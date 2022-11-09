import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UriAttributeValue
/** 
 * Values for an attribute with a `value_type` of URL.
**/
export class UriAttributeValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
