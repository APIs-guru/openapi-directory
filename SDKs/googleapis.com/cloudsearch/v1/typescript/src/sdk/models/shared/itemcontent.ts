import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UploadItemRef } from "./uploaditemref";

export enum ItemContentContentFormatEnum {
    Unspecified = "UNSPECIFIED"
,    Html = "HTML"
,    Text = "TEXT"
,    Raw = "RAW"
}


// ItemContent
/** 
 * Content of an item to be indexed and surfaced by Cloud Search. Only UTF-8 encoded strings are allowed as inlineContent. If the content is uploaded and not binary, it must be UTF-8 encoded.
**/
export class ItemContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentDataRef" })
  contentDataRef?: UploadItemRef;

  @Metadata({ data: "json, name=contentFormat" })
  contentFormat?: ItemContentContentFormatEnum;

  @Metadata({ data: "json, name=hash" })
  hash?: string;

  @Metadata({ data: "json, name=inlineContent" })
  inlineContent?: string;
}
