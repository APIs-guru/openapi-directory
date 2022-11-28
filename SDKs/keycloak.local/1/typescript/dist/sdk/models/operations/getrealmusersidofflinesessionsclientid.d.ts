import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmUsersIdOfflineSessionsClientIdPathParams extends SpeakeasyBase {
    clientId: string;
    id: string;
    realm: string;
}
export declare class GetRealmUsersIdOfflineSessionsClientIdRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersIdOfflineSessionsClientIdPathParams;
}
export declare class GetRealmUsersIdOfflineSessionsClientIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userSessionRepresentations?: shared.UserSessionRepresentation[];
}
