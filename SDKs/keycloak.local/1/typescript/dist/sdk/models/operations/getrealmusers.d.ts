import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmUsersPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmUsersQueryParams extends SpeakeasyBase {
    briefRepresentation?: boolean;
    email?: string;
    first?: number;
    firstName?: string;
    lastName?: string;
    max?: number;
    search?: string;
    username?: string;
}
export declare class GetRealmUsersRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersPathParams;
    queryParams: GetRealmUsersQueryParams;
}
export declare class GetRealmUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRepresentations?: shared.UserRepresentation[];
}
