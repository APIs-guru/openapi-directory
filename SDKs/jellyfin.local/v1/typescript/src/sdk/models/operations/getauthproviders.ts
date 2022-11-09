import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAuthProvidersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetAuthProvidersRequest extends SpeakeasyBase {
  @Metadata()
  security: GetAuthProvidersSecurity;
}


export class GetAuthProvidersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.NameIdPair })
  nameIdPairs?: shared.NameIdPair[];

  @Metadata()
  statusCode: number;
}
