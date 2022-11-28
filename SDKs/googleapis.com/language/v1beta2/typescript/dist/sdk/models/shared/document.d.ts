import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DocumentBoilerplateHandlingEnum {
    BoilerplateHandlingUnspecified = "BOILERPLATE_HANDLING_UNSPECIFIED",
    SkipBoilerplate = "SKIP_BOILERPLATE",
    KeepBoilerplate = "KEEP_BOILERPLATE"
}
export declare enum DocumentTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    PlainText = "PLAIN_TEXT",
    Html = "HTML"
}
/**
 * Represents the input to API methods.
**/
export declare class Document extends SpeakeasyBase {
    boilerplateHandling?: DocumentBoilerplateHandlingEnum;
    content?: string;
    gcsContentUri?: string;
    language?: string;
    referenceWebUri?: string;
    type?: DocumentTypeEnum;
}
