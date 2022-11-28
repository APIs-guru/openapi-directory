import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmComponentsPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PostRealmComponentsRequest extends SpeakeasyBase {
    pathParams: PostRealmComponentsPathParams;
    request: shared.ComponentRepresentation;
}
export declare class PostRealmComponentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
