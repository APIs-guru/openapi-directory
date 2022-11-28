import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientsIdPushRevocationPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PostRealmClientsIdPushRevocationRequest extends SpeakeasyBase {
    pathParams: PostRealmClientsIdPushRevocationPathParams;
}
export declare class PostRealmClientsIdPushRevocationResponse extends SpeakeasyBase {
    contentType: string;
    globalRequestResult?: shared.GlobalRequestResult;
    statusCode: number;
}
