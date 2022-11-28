import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdOfflineSessionsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdOfflineSessionsQueryParams extends SpeakeasyBase {
    first?: number;
    max?: number;
}
export declare class GetRealmClientsIdOfflineSessionsRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdOfflineSessionsPathParams;
    queryParams: GetRealmClientsIdOfflineSessionsQueryParams;
}
export declare class GetRealmClientsIdOfflineSessionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userSessionRepresentations?: shared.UserSessionRepresentation[];
}
