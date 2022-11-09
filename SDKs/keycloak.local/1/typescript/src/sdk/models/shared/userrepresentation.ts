import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserConsentRepresentation } from "./userconsentrepresentation";
import { CredentialRepresentation } from "./credentialrepresentation";
import { FederatedIdentityRepresentation } from "./federatedidentityrepresentation";


export class UserRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: Map<string, any>;

  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=clientConsents", elemType: shared.UserConsentRepresentation })
  clientConsents?: UserConsentRepresentation[];

  @Metadata({ data: "json, name=clientRoles" })
  clientRoles?: Map<string, any>;

  @Metadata({ data: "json, name=createdTimestamp" })
  createdTimestamp?: number;

  @Metadata({ data: "json, name=credentials", elemType: shared.CredentialRepresentation })
  credentials?: CredentialRepresentation[];

  @Metadata({ data: "json, name=disableableCredentialTypes" })
  disableableCredentialTypes?: string[];

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=emailVerified" })
  emailVerified?: boolean;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=federatedIdentities", elemType: shared.FederatedIdentityRepresentation })
  federatedIdentities?: FederatedIdentityRepresentation[];

  @Metadata({ data: "json, name=federationLink" })
  federationLink?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=groups" })
  groups?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=notBefore" })
  notBefore?: number;

  @Metadata({ data: "json, name=origin" })
  origin?: string;

  @Metadata({ data: "json, name=realmRoles" })
  realmRoles?: string[];

  @Metadata({ data: "json, name=requiredActions" })
  requiredActions?: string[];

  @Metadata({ data: "json, name=self" })
  self?: string;

  @Metadata({ data: "json, name=serviceAccountClientId" })
  serviceAccountClientId?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
