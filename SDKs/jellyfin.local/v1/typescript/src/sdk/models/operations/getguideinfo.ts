import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGuideInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetGuideInfoRequest extends SpeakeasyBase {
  @Metadata()
  security: GetGuideInfoSecurity;
}


export class GetGuideInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  guideInfo?: shared.GuideInfo;

  @Metadata()
  statusCode: number;
}
