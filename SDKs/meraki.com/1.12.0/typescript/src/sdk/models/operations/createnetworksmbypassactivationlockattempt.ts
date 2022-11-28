import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkSmBypassActivationLockAttemptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkSmBypassActivationLockAttemptRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ids" })
  ids: string[];
}


export class CreateNetworkSmBypassActivationLockAttemptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkSmBypassActivationLockAttemptPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkSmBypassActivationLockAttemptRequestBody;
}


export class CreateNetworkSmBypassActivationLockAttemptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkSmBypassActivationLockAttempt201ApplicationJsonObject?: Map<string, any>;
}
