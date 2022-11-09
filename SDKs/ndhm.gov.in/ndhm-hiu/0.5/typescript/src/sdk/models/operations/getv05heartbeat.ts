import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETV05HEARTBEAT_SERVERS = [
	"https://dev.ndhm.gov.in/hiu",
];



export class GetV05HeartbeatRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;
}


export class GetV05HeartbeatResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  heartbeatResponse?: shared.HeartbeatResponse;

  @Metadata()
  statusCode: number;
}
