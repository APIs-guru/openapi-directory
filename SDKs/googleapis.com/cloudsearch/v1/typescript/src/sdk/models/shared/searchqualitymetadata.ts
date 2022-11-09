import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchQualityMetadata
/** 
 * Additional search quality metadata of the item.
**/
export class SearchQualityMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=quality" })
  quality?: number;
}
