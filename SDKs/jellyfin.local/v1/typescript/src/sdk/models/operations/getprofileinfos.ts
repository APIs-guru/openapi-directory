import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProfileInfosSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetProfileInfosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetProfileInfosSecurity;
}


export class GetProfileInfosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.DeviceProfileInfo })
  deviceProfileInfos?: shared.DeviceProfileInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
