import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLiveTvInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetLiveTvInfoRequest extends SpeakeasyBase {
  @Metadata()
  security: GetLiveTvInfoSecurity;
}


export class GetLiveTvInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  liveTvInfo?: shared.LiveTvInfo;

  @Metadata()
  statusCode: number;
}
