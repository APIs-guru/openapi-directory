import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmGroupByPathPathPathParams extends SpeakeasyBase {
    path: string;
    realm: string;
}
export declare class GetRealmGroupByPathPathRequest extends SpeakeasyBase {
    pathParams: GetRealmGroupByPathPathPathParams;
}
export declare class GetRealmGroupByPathPathResponse extends SpeakeasyBase {
    contentType: string;
    groupRepresentation?: shared.GroupRepresentation;
    statusCode: number;
}
