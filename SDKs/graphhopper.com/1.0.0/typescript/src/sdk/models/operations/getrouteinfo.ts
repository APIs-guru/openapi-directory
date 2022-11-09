import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRouteInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  infoResponse?: shared.InfoResponse;

  @Metadata()
  statusCode: number;
}
