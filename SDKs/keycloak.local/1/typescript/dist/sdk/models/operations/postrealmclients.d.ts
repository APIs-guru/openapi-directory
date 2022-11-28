import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientsPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PostRealmClientsRequest extends SpeakeasyBase {
    pathParams: PostRealmClientsPathParams;
    request: shared.ClientRepresentation;
}
export declare class PostRealmClientsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
