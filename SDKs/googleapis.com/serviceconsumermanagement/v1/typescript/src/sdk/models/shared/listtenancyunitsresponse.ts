import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TenancyUnit } from "./tenancyunit";


// ListTenancyUnitsResponse
/** 
 * Response for the list request.
**/
export class ListTenancyUnitsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=tenancyUnits", elemType: shared.TenancyUnit })
  tenancyUnits?: TenancyUnit[];
}
