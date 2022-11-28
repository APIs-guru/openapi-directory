import { SpeakeasyBase } from "../../../internal/utils";
import { UploadItemRef } from "./uploaditemref";
export declare enum ItemContentContentFormatEnum {
    Unspecified = "UNSPECIFIED",
    Html = "HTML",
    Text = "TEXT",
    Raw = "RAW"
}
/**
 * Content of an item to be indexed and surfaced by Cloud Search. Only UTF-8 encoded strings are allowed as inlineContent. If the content is uploaded and not binary, it must be UTF-8 encoded.
**/
export declare class ItemContent extends SpeakeasyBase {
    contentDataRef?: UploadItemRef;
    contentFormat?: ItemContentContentFormatEnum;
    hash?: string;
    inlineContent?: string;
}
