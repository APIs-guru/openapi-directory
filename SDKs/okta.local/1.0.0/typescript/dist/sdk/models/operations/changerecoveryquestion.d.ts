import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChangeRecoveryQuestionPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class ChangeRecoveryQuestionRequestBodyPassword extends SpeakeasyBase {
    value?: string;
}
export declare class ChangeRecoveryQuestionRequestBodyRecoveryQuestion extends SpeakeasyBase {
    answer?: string;
    question?: string;
}
export declare class ChangeRecoveryQuestionRequestBody extends SpeakeasyBase {
    password?: ChangeRecoveryQuestionRequestBodyPassword;
    recoveryQuestion?: ChangeRecoveryQuestionRequestBodyRecoveryQuestion;
}
export declare class ChangeRecoveryQuestionRequest extends SpeakeasyBase {
    pathParams: ChangeRecoveryQuestionPathParams;
    request?: ChangeRecoveryQuestionRequestBody;
}
export declare class ChangeRecoveryQuestionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
