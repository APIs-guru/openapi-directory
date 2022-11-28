import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SearchQualityMetadata
/** 
 * Additional search quality metadata of the item.
**/
export class SearchQualityMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=quality" })
  quality?: number;
}
