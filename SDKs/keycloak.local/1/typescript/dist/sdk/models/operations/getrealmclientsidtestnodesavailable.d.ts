import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRealmClientsIdTestNodesAvailablePathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class GetRealmClientsIdTestNodesAvailableRequest extends SpeakeasyBase {
    pathParams: GetRealmClientsIdTestNodesAvailablePathParams;
}
export declare class GetRealmClientsIdTestNodesAvailableResponse extends SpeakeasyBase {
    contentType: string;
    globalRequestResult?: shared.GlobalRequestResult;
    statusCode: number;
}
