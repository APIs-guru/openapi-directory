import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FileUploadQuestionTypesEnum {
    FileTypeUnspecified = "FILE_TYPE_UNSPECIFIED",
    Any = "ANY",
    Document = "DOCUMENT",
    Presentation = "PRESENTATION",
    Spreadsheet = "SPREADSHEET",
    Drawing = "DRAWING",
    Pdf = "PDF",
    Image = "IMAGE",
    Video = "VIDEO",
    Audio = "AUDIO"
}
/**
 * A file upload question. The API currently does not support creating file upload questions.
**/
export declare class FileUploadQuestion extends SpeakeasyBase {
    folderId?: string;
    maxFileSize?: string;
    maxFiles?: number;
    types?: FileUploadQuestionTypesEnum[];
}
