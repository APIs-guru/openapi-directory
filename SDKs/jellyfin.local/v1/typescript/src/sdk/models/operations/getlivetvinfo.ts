import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLiveTvInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetLiveTvInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetLiveTvInfoSecurity;
}


export class GetLiveTvInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  liveTvInfo?: shared.LiveTvInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
