import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DocumentBoilerplateHandlingEnum {
    BoilerplateHandlingUnspecified = "BOILERPLATE_HANDLING_UNSPECIFIED",
    SkipBoilerplate = "SKIP_BOILERPLATE",
    KeepBoilerplate = "KEEP_BOILERPLATE"
}

export enum DocumentTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    PlainText = "PLAIN_TEXT",
    Html = "HTML"
}


// Document
/** 
 * Represents the input to API methods.
**/
export class Document extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boilerplateHandling" })
  boilerplateHandling?: DocumentBoilerplateHandlingEnum;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsContentUri" })
  gcsContentUri?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=referenceWebUri" })
  referenceWebUri?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DocumentTypeEnum;
}
