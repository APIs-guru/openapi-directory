import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UrlAttributeValue
/** 
 * Values for an attribute with a `value_type` of URL.
**/
export class UrlAttributeValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}
