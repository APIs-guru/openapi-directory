import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetDistributionsIncludeRemotesSecurity extends SpeakeasyBase {
    basicAuthentication: shared.SchemeBasicAuthentication;
}
export declare class GetDistributionsIncludeRemotesRequest extends SpeakeasyBase {
    security: GetDistributionsIncludeRemotesSecurity;
}
export declare class GetDistributionsIncludeRemotesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
