package shared

type FileNoteFileTypeEnum string

const (
	FileNoteFileTypeEnumFileTypeUnspecified FileNoteFileTypeEnum = "FILE_TYPE_UNSPECIFIED"
	FileNoteFileTypeEnumSource              FileNoteFileTypeEnum = "SOURCE"
	FileNoteFileTypeEnumBinary              FileNoteFileTypeEnum = "BINARY"
	FileNoteFileTypeEnumArchive             FileNoteFileTypeEnum = "ARCHIVE"
	FileNoteFileTypeEnumApplication         FileNoteFileTypeEnum = "APPLICATION"
	FileNoteFileTypeEnumAudio               FileNoteFileTypeEnum = "AUDIO"
	FileNoteFileTypeEnumImage               FileNoteFileTypeEnum = "IMAGE"
	FileNoteFileTypeEnumText                FileNoteFileTypeEnum = "TEXT"
	FileNoteFileTypeEnumVideo               FileNoteFileTypeEnum = "VIDEO"
	FileNoteFileTypeEnumDocumentation       FileNoteFileTypeEnum = "DOCUMENTATION"
	FileNoteFileTypeEnumSpdx                FileNoteFileTypeEnum = "SPDX"
	FileNoteFileTypeEnumOther               FileNoteFileTypeEnum = "OTHER"
)

// FileNote
// FileNote represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/
type FileNote struct {
	Checksum []string              `json:"checksum,omitempty"`
	FileType *FileNoteFileTypeEnum `json:"fileType,omitempty"`
	Title    *string               `json:"title,omitempty"`
}
