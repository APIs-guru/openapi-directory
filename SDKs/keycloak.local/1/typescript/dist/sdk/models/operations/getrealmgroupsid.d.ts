import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmGroupsIdPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmGroupsIdRequest extends SpeakeasyBase {
    pathParams: GetRealmGroupsIdPathParams;
}
export declare class GetRealmGroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    groupRepresentation?: shared.GroupRepresentation;
    statusCode: number;
}
