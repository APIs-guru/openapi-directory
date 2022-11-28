import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserConsentRepresentation } from "./userconsentrepresentation";
import { CredentialRepresentation } from "./credentialrepresentation";
import { FederatedIdentityRepresentation } from "./federatedidentityrepresentation";



export class UserRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=clientConsents", elemType: UserConsentRepresentation })
  clientConsents?: UserConsentRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=clientRoles" })
  clientRoles?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=createdTimestamp" })
  createdTimestamp?: number;

  @SpeakeasyMetadata({ data: "json, name=credentials", elemType: CredentialRepresentation })
  credentials?: CredentialRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=disableableCredentialTypes" })
  disableableCredentialTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=emailVerified" })
  emailVerified?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=federatedIdentities", elemType: FederatedIdentityRepresentation })
  federatedIdentities?: FederatedIdentityRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=federationLink" })
  federationLink?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=groups" })
  groups?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=notBefore" })
  notBefore?: number;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin?: string;

  @SpeakeasyMetadata({ data: "json, name=realmRoles" })
  realmRoles?: string[];

  @SpeakeasyMetadata({ data: "json, name=requiredActions" })
  requiredActions?: string[];

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccountClientId" })
  serviceAccountClientId?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
