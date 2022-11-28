import { SpeakeasyBase } from "../../../internal/utils";
import { UserConsentRepresentation } from "./userconsentrepresentation";
import { CredentialRepresentation } from "./credentialrepresentation";
import { FederatedIdentityRepresentation } from "./federatedidentityrepresentation";
export declare class UserRepresentation extends SpeakeasyBase {
    access?: Map<string, any>;
    attributes?: Map<string, any>;
    clientConsents?: UserConsentRepresentation[];
    clientRoles?: Map<string, any>;
    createdTimestamp?: number;
    credentials?: CredentialRepresentation[];
    disableableCredentialTypes?: string[];
    email?: string;
    emailVerified?: boolean;
    enabled?: boolean;
    federatedIdentities?: FederatedIdentityRepresentation[];
    federationLink?: string;
    firstName?: string;
    groups?: string[];
    id?: string;
    lastName?: string;
    notBefore?: number;
    origin?: string;
    realmRoles?: string[];
    requiredActions?: string[];
    self?: string;
    serviceAccountClientId?: string;
    username?: string;
}
