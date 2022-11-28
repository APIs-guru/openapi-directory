import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPasswordResetProvidersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPasswordResetProvidersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetPasswordResetProvidersSecurity;
}


export class GetPasswordResetProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.NameIdPair })
  nameIdPairs?: shared.NameIdPair[];

  @SpeakeasyMetadata()
  statusCode: number;
}
