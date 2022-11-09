import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostDistributionsSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class PostDistributionsRequest extends SpeakeasyBase {
    request?: Uint8Array;
    security: PostDistributionsSecurity;
}
export declare class PostDistributionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
