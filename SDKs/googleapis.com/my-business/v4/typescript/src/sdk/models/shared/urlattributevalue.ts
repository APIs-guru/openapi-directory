import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UrlAttributeValue
/** 
 * Values for an attribute with a `value_type` of URL.
**/
export class UrlAttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
