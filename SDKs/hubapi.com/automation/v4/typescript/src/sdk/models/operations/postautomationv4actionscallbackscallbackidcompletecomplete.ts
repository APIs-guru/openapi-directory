import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=callbackId" })
  callbackId: string;
}


export class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurityOption2;
}


export class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAutomationV4ActionsCallbacksCallbackIdCompleteCompletePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CallbackCompletionRequest;

  @Metadata()
  security: PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity;
}


export class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
