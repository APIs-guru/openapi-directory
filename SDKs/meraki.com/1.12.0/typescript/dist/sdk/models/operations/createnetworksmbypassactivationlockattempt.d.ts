import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkSmBypassActivationLockAttemptPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class CreateNetworkSmBypassActivationLockAttemptRequestBody extends SpeakeasyBase {
    ids: string[];
}
export declare class CreateNetworkSmBypassActivationLockAttemptRequest extends SpeakeasyBase {
    pathParams: CreateNetworkSmBypassActivationLockAttemptPathParams;
    request: CreateNetworkSmBypassActivationLockAttemptRequestBody;
}
export declare class CreateNetworkSmBypassActivationLockAttemptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkSmBypassActivationLockAttempt201ApplicationJsonObject?: Map<string, any>;
}
