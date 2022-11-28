import { SpeakeasyBase } from "../../../internal/utils";
export declare enum QueryGrantableRolesRequestViewEnum {
    Basic = "BASIC",
    Full = "FULL"
}
/**
 * The grantable role query request.
**/
export declare class QueryGrantableRolesRequest extends SpeakeasyBase {
    fullResourceName?: string;
    pageSize?: number;
    pageToken?: string;
    view?: QueryGrantableRolesRequestViewEnum;
}
