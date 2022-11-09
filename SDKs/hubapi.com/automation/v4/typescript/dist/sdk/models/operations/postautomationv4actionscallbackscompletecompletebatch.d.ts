import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurityOption1 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurityOption2 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity extends SpeakeasyBase {
    option1?: PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurityOption1;
    option2?: PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurityOption2;
}
export declare class PostAutomationV4ActionsCallbacksCompleteCompleteBatchRequest extends SpeakeasyBase {
    request: shared.BatchInputCallbackCompletionBatchRequest;
    security: PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity;
}
export declare class PostAutomationV4ActionsCallbacksCompleteCompleteBatchResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
