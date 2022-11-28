import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TenancyUnit } from "./tenancyunit";



// ListTenancyUnitsResponse
/** 
 * Response for the list request.
**/
export class ListTenancyUnitsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=tenancyUnits", elemType: TenancyUnit })
  tenancyUnits?: TenancyUnit[];
}
