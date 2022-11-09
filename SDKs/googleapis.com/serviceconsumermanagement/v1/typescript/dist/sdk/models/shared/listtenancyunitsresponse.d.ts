import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TenancyUnit } from "./tenancyunit";
/**
 * Response for the list request.
**/
export declare class ListTenancyUnitsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tenancyUnits?: TenancyUnit[];
}
