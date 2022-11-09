import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RelatedUrl
/** 
 * Metadata for any related URL information.
**/
export class RelatedUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
