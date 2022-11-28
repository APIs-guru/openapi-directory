import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FileUploadQuestionTypesEnum {
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


// FileUploadQuestion
/** 
 * A file upload question. The API currently does not support creating file upload questions.
**/
export class FileUploadQuestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=folderId" })
  folderId?: string;

  @SpeakeasyMetadata({ data: "json, name=maxFileSize" })
  maxFileSize?: string;

  @SpeakeasyMetadata({ data: "json, name=maxFiles" })
  maxFiles?: number;

  @SpeakeasyMetadata({ data: "json, name=types" })
  types?: FileUploadQuestionTypesEnum[];
}
