import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const GetV05HeartbeatServerList = [
	"https://your-hrp-server.com",
] as const;


export class GetV05HeartbeatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;
}


export class GetV05HeartbeatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  heartbeatResponse?: shared.HeartbeatResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
