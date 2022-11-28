import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmDefaultGroupsPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class GetRealmDefaultGroupsRequest extends SpeakeasyBase {
    pathParams: GetRealmDefaultGroupsPathParams;
}
export declare class GetRealmDefaultGroupsResponse extends SpeakeasyBase {
    contentType: string;
    groupRepresentations?: shared.GroupRepresentation[];
    statusCode: number;
}
