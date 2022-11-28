import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RelatedUrl
/** 
 * Metadata for any related URL information
**/
export class RelatedUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
