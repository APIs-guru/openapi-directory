import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=callbackId" })
  callbackId: string;
}


export class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
}


export class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAutomationV4ActionsCallbacksCallbackIdCompleteCompletePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CallbackCompletionRequest;

  @SpeakeasyMetadata()
  security: PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteSecurity;
}


export class PostAutomationV4ActionsCallbacksCallbackIdCompleteCompleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
