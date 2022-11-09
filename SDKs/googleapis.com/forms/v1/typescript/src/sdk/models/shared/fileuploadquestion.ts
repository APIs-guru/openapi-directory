import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum FileUploadQuestionTypesEnum {
    FileTypeUnspecified = "FILE_TYPE_UNSPECIFIED"
,    Any = "ANY"
,    Document = "DOCUMENT"
,    Presentation = "PRESENTATION"
,    Spreadsheet = "SPREADSHEET"
,    Drawing = "DRAWING"
,    Pdf = "PDF"
,    Image = "IMAGE"
,    Video = "VIDEO"
,    Audio = "AUDIO"
}


// FileUploadQuestion
/** 
 * A file upload question. The API currently does not support creating file upload questions.
**/
export class FileUploadQuestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=folderId" })
  folderId?: string;

  @Metadata({ data: "json, name=maxFileSize" })
  maxFileSize?: string;

  @Metadata({ data: "json, name=maxFiles" })
  maxFiles?: number;

  @Metadata({ data: "json, name=types" })
  types?: FileUploadQuestionTypesEnum[];
}
