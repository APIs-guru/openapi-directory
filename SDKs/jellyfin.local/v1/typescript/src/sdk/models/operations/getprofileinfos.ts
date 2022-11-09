import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProfileInfosSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetProfileInfosRequest extends SpeakeasyBase {
  @Metadata()
  security: GetProfileInfosSecurity;
}


export class GetProfileInfosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.DeviceProfileInfo })
  deviceProfileInfos?: shared.DeviceProfileInfo[];

  @Metadata()
  statusCode: number;
}
