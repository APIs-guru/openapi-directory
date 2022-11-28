import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetRecoveryCredentialPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion extends SpeakeasyBase {
    answer?: string;
    question?: string;
}
export declare class SetRecoveryCredentialRequestBodyCredentials extends SpeakeasyBase {
    recoveryQuestion?: SetRecoveryCredentialRequestBodyCredentialsRecoveryQuestion;
}
export declare class SetRecoveryCredentialRequestBody extends SpeakeasyBase {
    credentials?: SetRecoveryCredentialRequestBodyCredentials;
}
export declare class SetRecoveryCredentialRequest extends SpeakeasyBase {
    pathParams: SetRecoveryCredentialPathParams;
    request?: SetRecoveryCredentialRequestBody;
}
export declare class SetRecoveryCredentialResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
