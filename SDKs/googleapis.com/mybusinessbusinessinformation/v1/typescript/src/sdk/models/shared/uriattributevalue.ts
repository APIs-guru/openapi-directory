import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UriAttributeValue
/** 
 * Values for an attribute with a `value_type` of URL.
**/
export class UriAttributeValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
