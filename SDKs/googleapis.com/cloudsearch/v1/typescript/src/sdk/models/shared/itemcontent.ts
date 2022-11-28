import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UploadItemRef } from "./uploaditemref";


export enum ItemContentContentFormatEnum {
    Unspecified = "UNSPECIFIED",
    Html = "HTML",
    Text = "TEXT",
    Raw = "RAW"
}


// ItemContent
/** 
 * Content of an item to be indexed and surfaced by Cloud Search. Only UTF-8 encoded strings are allowed as inlineContent. If the content is uploaded and not binary, it must be UTF-8 encoded.
**/
export class ItemContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentDataRef" })
  contentDataRef?: UploadItemRef;

  @SpeakeasyMetadata({ data: "json, name=contentFormat" })
  contentFormat?: ItemContentContentFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=hash" })
  hash?: string;

  @SpeakeasyMetadata({ data: "json, name=inlineContent" })
  inlineContent?: string;
}
