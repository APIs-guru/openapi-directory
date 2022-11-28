import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWakeOnLanInfoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetWakeOnLanInfoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetWakeOnLanInfoSecurity;
}


export class GetWakeOnLanInfoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.WakeOnLanInfo })
  wakeOnLanInfos?: shared.WakeOnLanInfo[];
}
