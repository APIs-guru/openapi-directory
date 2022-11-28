import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGuideInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetGuideInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetGuideInfoSecurity;
}


export class GetGuideInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  guideInfo?: shared.GuideInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
