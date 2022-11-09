import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompletePathParams extends SpeakeasyBase {
    callbackId: string;
}
export declare class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption1 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption2 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity extends SpeakeasyBase {
    option1?: PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption1;
    option2?: PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption2;
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
