import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FileNoteFileTypeEnum {
    FileTypeUnspecified = "FILE_TYPE_UNSPECIFIED",
    Source = "SOURCE",
    Binary = "BINARY",
    Archive = "ARCHIVE",
    Application = "APPLICATION",
    Audio = "AUDIO",
    Image = "IMAGE",
    Text = "TEXT",
    Video = "VIDEO",
    Documentation = "DOCUMENTATION",
    Spdx = "SPDX",
    Other = "OTHER"
}
/**
 * FileNote represents an SPDX File Information section: https://spdx.github.io/spdx-spec/4-file-information/
**/
export declare class FileNote extends SpeakeasyBase {
    checksum?: string[];
    fileType?: FileNoteFileTypeEnum;
    title?: string;
}
