import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmGroupsIdMembersPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmGroupsIdMembersQueryParams extends SpeakeasyBase {
    briefRepresentation?: boolean;
    first?: number;
    max?: number;
}
export declare class GetRealmGroupsIdMembersRequest extends SpeakeasyBase {
    pathParams: GetRealmGroupsIdMembersPathParams;
    queryParams: GetRealmGroupsIdMembersQueryParams;
}
export declare class GetRealmGroupsIdMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userRepresentations?: shared.UserRepresentation[];
}
