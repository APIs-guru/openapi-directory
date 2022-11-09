import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNetworkSmBypassActivationLockAttemptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=attemptId" })
  attemptId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


export class GetNetworkSmBypassActivationLockAttemptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNetworkSmBypassActivationLockAttemptPathParams;
}


export class GetNetworkSmBypassActivationLockAttemptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getNetworkSmBypassActivationLockAttempt200ApplicationJsonObject?: Map<string, any>;
}
