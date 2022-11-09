import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetWakeOnLanInfoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetWakeOnLanInfoRequest extends SpeakeasyBase {
  @Metadata()
  security: GetWakeOnLanInfoSecurity;
}


export class GetWakeOnLanInfoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.WakeOnLanInfo })
  wakeOnLanInfos?: shared.WakeOnLanInfo[];
}
