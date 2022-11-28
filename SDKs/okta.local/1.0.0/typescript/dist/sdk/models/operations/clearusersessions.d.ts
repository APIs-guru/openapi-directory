import { SpeakeasyBase } from "../../../internal/utils";
export declare class ClearUserSessionsPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class ClearUserSessionsRequest extends SpeakeasyBase {
    pathParams: ClearUserSessionsPathParams;
    request?: Uint8Array;
}
export declare class ClearUserSessionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
