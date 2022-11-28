import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAutomationV4ActionsCallbacksCompleteCompleteBatchSecurity extends SpeakeasyBase {
    oauth2Legacy?: shared.SchemeOauth2Legacy;
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
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
