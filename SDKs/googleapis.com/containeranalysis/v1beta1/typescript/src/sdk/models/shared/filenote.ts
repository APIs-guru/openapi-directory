import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FileNoteFileTypeEnum {
    FileTypeUnspecified = "FILE_TYPE_UNSPECIFIED"
,    Source = "SOURCE"
,    Binary = "BINARY"
,    Archive = "ARCHIVE"
,    Application = "APPLICATION"
,    Audio = "AUDIO"
,    Image = "IMAGE"
,    Text = "TEXT"
,    Video = "VIDEO"
,    Documentation = "DOCUMENTATION"
,    Spdx = "SPDX"
,    Other = "OTHER"
}


// FileNote
/** 
 * FileNote represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/
**/
export class FileNote extends SpeakeasyBase {
  @Metadata({ data: "json, name=checksum" })
  checksum?: string[];

  @Metadata({ data: "json, name=fileType" })
  fileType?: FileNoteFileTypeEnum;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
