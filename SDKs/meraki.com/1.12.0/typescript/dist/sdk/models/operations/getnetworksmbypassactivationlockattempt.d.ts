import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSmBypassActivationLockAttemptPathParams extends SpeakeasyBase {
    attemptId: string;
    networkId: string;
}
export declare class GetNetworkSmBypassActivationLockAttemptRequest extends SpeakeasyBase {
    pathParams: GetNetworkSmBypassActivationLockAttemptPathParams;
}
export declare class GetNetworkSmBypassActivationLockAttemptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSmBypassActivationLockAttempt200ApplicationJsonObject?: Map<string, any>;
}
