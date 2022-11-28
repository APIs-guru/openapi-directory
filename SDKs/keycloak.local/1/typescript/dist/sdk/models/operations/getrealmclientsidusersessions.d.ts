import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdUserSessionsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdUserSessionsQueryParams extends SpeakeasyBase {
    first?: number;
    max?: number;
}
export declare class GetRealmClientsIdUserSessionsRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdUserSessionsPathParams;
    queryParams: GetRealmClientsIdUserSessionsQueryParams;
}
export declare class GetRealmClientsIdUserSessionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userSessionRepresentations?: shared.UserSessionRepresentation[];
}
