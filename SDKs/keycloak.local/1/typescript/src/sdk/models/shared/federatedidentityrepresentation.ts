import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FederatedIdentityRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identityProvider" })
  identityProvider?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
