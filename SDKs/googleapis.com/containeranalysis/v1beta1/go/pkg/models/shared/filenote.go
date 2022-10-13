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

type FileNote struct {
	Checksum []string              `json:"checksum"`
	FileType *FileNoteFileTypeEnum `json:"fileType"`
	Title    *string               `json:"title"`
}
