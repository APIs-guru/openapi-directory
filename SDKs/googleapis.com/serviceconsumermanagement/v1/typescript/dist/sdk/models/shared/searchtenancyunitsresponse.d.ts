import { SpeakeasyBase } from "../../../internal/utils";
import { TenancyUnit } from "./tenancyunit";
/**
 * Response for the search query.
**/
export declare class SearchTenancyUnitsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    tenancyUnits?: TenancyUnit[];
}
