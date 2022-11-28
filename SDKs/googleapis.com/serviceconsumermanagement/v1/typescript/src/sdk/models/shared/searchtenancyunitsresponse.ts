import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TenancyUnit } from "./tenancyunit";



// SearchTenancyUnitsResponse
/** 
 * Response for the search query.
**/
export class SearchTenancyUnitsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tenancyUnits", elemType: TenancyUnit })
  tenancyUnits?: TenancyUnit[];
}
