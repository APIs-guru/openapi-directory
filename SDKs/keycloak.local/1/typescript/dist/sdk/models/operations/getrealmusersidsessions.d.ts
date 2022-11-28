import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmUsersIdSessionsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmUsersIdSessionsRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersIdSessionsPathParams;
}
export declare class GetRealmUsersIdSessionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userSessionRepresentations?: shared.UserSessionRepresentation[];
}
