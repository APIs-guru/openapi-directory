import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmUsersIdGroupsPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmUsersIdGroupsQueryParams extends SpeakeasyBase {
    briefRepresentation?: boolean;
    first?: number;
    max?: number;
    search?: string;
}
export declare class GetRealmUsersIdGroupsRequest extends SpeakeasyBase {
    pathParams: GetRealmUsersIdGroupsPathParams;
    queryParams: GetRealmUsersIdGroupsQueryParams;
}
export declare class GetRealmUsersIdGroupsResponse extends SpeakeasyBase {
    contentType: string;
    groupRepresentations?: shared.GroupRepresentation[];
    statusCode: number;
}
