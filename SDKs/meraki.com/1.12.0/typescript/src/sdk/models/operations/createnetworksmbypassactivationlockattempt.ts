import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkSmBypassActivationLockAttemptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class CreateNetworkSmBypassActivationLockAttemptRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=ids" })
  ids: string[];
}


export class CreateNetworkSmBypassActivationLockAttemptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkSmBypassActivationLockAttemptPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkSmBypassActivationLockAttemptRequestBody;
}


export class CreateNetworkSmBypassActivationLockAttemptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkSmBypassActivationLockAttempt201ApplicationJsonObject?: Map<string, any>;
}
