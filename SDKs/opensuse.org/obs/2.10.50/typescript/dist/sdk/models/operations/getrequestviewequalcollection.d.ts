import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetRequestViewEqualCollectionQueryParams extends SpeakeasyBase {
    ids?: string;
    limit?: number;
    package?: string;
    project?: string;
    roles?: string;
    states?: string;
    types?: string;
    user?: string;
    withfullhistory?: string;
    withhistory?: string;
}
export declare class GetRequestViewEqualCollectionSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetRequestViewEqualCollectionRequest extends SpeakeasyBase {
    queryParams: GetRequestViewEqualCollectionQueryParams;
    security: GetRequestViewEqualCollectionSecurity;
}
export declare class GetRequestViewEqualCollectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
