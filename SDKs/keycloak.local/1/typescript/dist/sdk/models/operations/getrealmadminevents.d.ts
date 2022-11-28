import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmAdminEventsPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmAdminEventsQueryParams extends SpeakeasyBase {
    authClient?: string;
    authIpAddress?: string;
    authRealm?: string;
    authUser?: string;
    dateFrom?: string;
    dateTo?: string;
    first?: number;
    max?: number;
    operationTypes?: string[];
    resourcePath?: string;
    resourceTypes?: string[];
}
export declare class GetRealmAdminEventsRequest extends SpeakeasyBase {
    pathParams: GetRealmAdminEventsPathParams;
    queryParams: GetRealmAdminEventsQueryParams;
}
export declare class GetRealmAdminEventsResponse extends SpeakeasyBase {
    adminEventRepresentations?: shared.AdminEventRepresentation[];
    contentType: string;
    statusCode: number;
}
