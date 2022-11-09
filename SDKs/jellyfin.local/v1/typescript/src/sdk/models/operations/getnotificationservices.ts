import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetNotificationServicesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetNotificationServicesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetNotificationServicesSecurity;
}


export class GetNotificationServicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.NameIdPair })
  nameIdPairs?: shared.NameIdPair[];

  @Metadata()
  statusCode: number;
}
