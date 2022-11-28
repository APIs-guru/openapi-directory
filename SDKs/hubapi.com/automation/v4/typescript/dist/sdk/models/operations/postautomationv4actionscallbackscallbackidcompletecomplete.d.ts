import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompletePathParams extends SpeakeasyBase {
    callbackId: string;
}
export declare class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity extends SpeakeasyBase {
    oauth2Legacy?: shared.SchemeOauth2Legacy;
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
}
export declare class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest extends SpeakeasyBase {
    pathParams: PostAutomationV4ActionsCallbacksCallbackIdCompleteCompletePathParams;
    request: shared.CallbackCompletionRequest;
    security: PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity;
}
export declare class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
