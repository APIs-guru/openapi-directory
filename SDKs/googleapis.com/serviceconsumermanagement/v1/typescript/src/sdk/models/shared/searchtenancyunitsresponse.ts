import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TenancyUnit } from "./tenancyunit";


// SearchTenancyUnitsResponse
/** 
 * Response for the search query.
**/
export class SearchTenancyUnitsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tenancyUnits", elemType: shared.TenancyUnit })
  tenancyUnits?: TenancyUnit[];
}
