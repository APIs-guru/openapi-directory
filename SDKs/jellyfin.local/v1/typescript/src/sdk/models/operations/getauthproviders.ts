import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAuthProvidersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetAuthProvidersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetAuthProvidersSecurity;
}


export class GetAuthProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.NameIdPair })
  nameIdPairs?: shared.NameIdPair[];

  @SpeakeasyMetadata()
  statusCode: number;
}
