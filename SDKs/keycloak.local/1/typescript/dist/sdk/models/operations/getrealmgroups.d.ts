import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmGroupsPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmGroupsQueryParams extends SpeakeasyBase {
    briefRepresentation?: boolean;
    first?: number;
    max?: number;
    search?: string;
}
export declare class GetRealmGroupsRequest extends SpeakeasyBase {
    pathParams: GetRealmGroupsPathParams;
    queryParams: GetRealmGroupsQueryParams;
}
export declare class GetRealmGroupsResponse extends SpeakeasyBase {
    contentType: string;
    groupRepresentations?: shared.GroupRepresentation[];
    statusCode: number;
}
