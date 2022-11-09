import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPasswordResetProvidersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPasswordResetProvidersRequest extends SpeakeasyBase {
  @Metadata()
  security: GetPasswordResetProvidersSecurity;
}


export class GetPasswordResetProvidersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.NameIdPair })
  nameIdPairs?: shared.NameIdPair[];

  @Metadata()
  statusCode: number;
}
