import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNotificationServicesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetNotificationServicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetNotificationServicesSecurity;
}


export class GetNotificationServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.NameIdPair })
  nameIdPairs?: shared.NameIdPair[];

  @SpeakeasyMetadata()
  statusCode: number;
}
