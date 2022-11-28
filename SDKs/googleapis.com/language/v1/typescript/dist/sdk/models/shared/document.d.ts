import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DocumentTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    PlainText = "PLAIN_TEXT",
    Html = "HTML"
}
/**
 * Represents the input to API methods.
**/
export declare class Document extends SpeakeasyBase {
    content?: string;
    gcsContentUri?: string;
    language?: string;
    type?: DocumentTypeEnum;
}
