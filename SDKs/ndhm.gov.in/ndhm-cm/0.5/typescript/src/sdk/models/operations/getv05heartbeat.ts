import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


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
