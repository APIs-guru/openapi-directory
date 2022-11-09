import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FederatedIdentityRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=identityProvider" })
  identityProvider?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
