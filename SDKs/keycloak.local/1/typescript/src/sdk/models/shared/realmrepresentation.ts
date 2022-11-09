import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AuthenticationFlowRepresentation } from "./authenticationflowrepresentation";
import { AuthenticatorConfigRepresentation } from "./authenticatorconfigrepresentation";
import { ClientScopeRepresentation } from "./clientscoperepresentation";
import { ClientRepresentation } from "./clientrepresentation";
import { MultivaluedHashMap } from "./multivaluedhashmap";
import { UserRepresentation } from "./userrepresentation";
import { GroupRepresentation } from "./grouprepresentation";
import { IdentityProviderMapperRepresentation } from "./identityprovidermapperrepresentation";
import { IdentityProviderRepresentation } from "./identityproviderrepresentation";
import { ProtocolMapperRepresentation } from "./protocolmapperrepresentation";
import { RequiredActionProviderRepresentation } from "./requiredactionproviderrepresentation";
import { RolesRepresentation } from "./rolesrepresentation";
import { ScopeMappingRepresentation } from "./scopemappingrepresentation";
import { UserFederationMapperRepresentation } from "./userfederationmapperrepresentation";
import { UserFederationProviderRepresentation } from "./userfederationproviderrepresentation";
import { UserRepresentation } from "./userrepresentation";


export class RealmRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessCodeLifespan" })
  accessCodeLifespan?: number;

  @Metadata({ data: "json, name=accessCodeLifespanLogin" })
  accessCodeLifespanLogin?: number;

  @Metadata({ data: "json, name=accessCodeLifespanUserAction" })
  accessCodeLifespanUserAction?: number;

  @Metadata({ data: "json, name=accessTokenLifespan" })
  accessTokenLifespan?: number;

  @Metadata({ data: "json, name=accessTokenLifespanForImplicitFlow" })
  accessTokenLifespanForImplicitFlow?: number;

  @Metadata({ data: "json, name=accountTheme" })
  accountTheme?: string;

  @Metadata({ data: "json, name=actionTokenGeneratedByAdminLifespan" })
  actionTokenGeneratedByAdminLifespan?: number;

  @Metadata({ data: "json, name=actionTokenGeneratedByUserLifespan" })
  actionTokenGeneratedByUserLifespan?: number;

  @Metadata({ data: "json, name=adminEventsDetailsEnabled" })
  adminEventsDetailsEnabled?: boolean;

  @Metadata({ data: "json, name=adminEventsEnabled" })
  adminEventsEnabled?: boolean;

  @Metadata({ data: "json, name=adminTheme" })
  adminTheme?: string;

  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @Metadata({ data: "json, name=authenticationFlows", elemType: shared.AuthenticationFlowRepresentation })
  authenticationFlows?: AuthenticationFlowRepresentation[];

  @Metadata({ data: "json, name=authenticatorConfig", elemType: shared.AuthenticatorConfigRepresentation })
  authenticatorConfig?: AuthenticatorConfigRepresentation[];

  @Metadata({ data: "json, name=browserFlow" })
  browserFlow?: string;

  @Metadata({ data: "json, name=browserSecurityHeaders" })
  browserSecurityHeaders?: Map<string, any>;

  @Metadata({ data: "json, name=bruteForceProtected" })
  bruteForceProtected?: boolean;

  @Metadata({ data: "json, name=clientAuthenticationFlow" })
  clientAuthenticationFlow?: string;

  @Metadata({ data: "json, name=clientScopeMappings" })
  clientScopeMappings?: Map<string, any>;

  @Metadata({ data: "json, name=clientScopes", elemType: shared.ClientScopeRepresentation })
  clientScopes?: ClientScopeRepresentation[];

  @Metadata({ data: "json, name=clientSessionIdleTimeout" })
  clientSessionIdleTimeout?: number;

  @Metadata({ data: "json, name=clientSessionMaxLifespan" })
  clientSessionMaxLifespan?: number;

  @Metadata({ data: "json, name=clients", elemType: shared.ClientRepresentation })
  clients?: ClientRepresentation[];

  @Metadata({ data: "json, name=components" })
  components?: MultivaluedHashMap;

  @Metadata({ data: "json, name=defaultDefaultClientScopes" })
  defaultDefaultClientScopes?: string[];

  @Metadata({ data: "json, name=defaultGroups" })
  defaultGroups?: string[];

  @Metadata({ data: "json, name=defaultLocale" })
  defaultLocale?: string;

  @Metadata({ data: "json, name=defaultOptionalClientScopes" })
  defaultOptionalClientScopes?: string[];

  @Metadata({ data: "json, name=defaultRoles" })
  defaultRoles?: string[];

  @Metadata({ data: "json, name=defaultSignatureAlgorithm" })
  defaultSignatureAlgorithm?: string;

  @Metadata({ data: "json, name=directGrantFlow" })
  directGrantFlow?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=displayNameHtml" })
  displayNameHtml?: string;

  @Metadata({ data: "json, name=dockerAuthenticationFlow" })
  dockerAuthenticationFlow?: string;

  @Metadata({ data: "json, name=duplicateEmailsAllowed" })
  duplicateEmailsAllowed?: boolean;

  @Metadata({ data: "json, name=editUsernameAllowed" })
  editUsernameAllowed?: boolean;

  @Metadata({ data: "json, name=emailTheme" })
  emailTheme?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=enabledEventTypes" })
  enabledEventTypes?: string[];

  @Metadata({ data: "json, name=eventsEnabled" })
  eventsEnabled?: boolean;

  @Metadata({ data: "json, name=eventsExpiration" })
  eventsExpiration?: number;

  @Metadata({ data: "json, name=eventsListeners" })
  eventsListeners?: string[];

  @Metadata({ data: "json, name=failureFactor" })
  failureFactor?: number;

  @Metadata({ data: "json, name=federatedUsers", elemType: shared.UserRepresentation })
  federatedUsers?: UserRepresentation[];

  @Metadata({ data: "json, name=groups", elemType: shared.GroupRepresentation })
  groups?: GroupRepresentation[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=identityProviderMappers", elemType: shared.IdentityProviderMapperRepresentation })
  identityProviderMappers?: IdentityProviderMapperRepresentation[];

  @Metadata({ data: "json, name=identityProviders", elemType: shared.IdentityProviderRepresentation })
  identityProviders?: IdentityProviderRepresentation[];

  @Metadata({ data: "json, name=internationalizationEnabled" })
  internationalizationEnabled?: boolean;

  @Metadata({ data: "json, name=keycloakVersion" })
  keycloakVersion?: string;

  @Metadata({ data: "json, name=loginTheme" })
  loginTheme?: string;

  @Metadata({ data: "json, name=loginWithEmailAllowed" })
  loginWithEmailAllowed?: boolean;

  @Metadata({ data: "json, name=maxDeltaTimeSeconds" })
  maxDeltaTimeSeconds?: number;

  @Metadata({ data: "json, name=maxFailureWaitSeconds" })
  maxFailureWaitSeconds?: number;

  @Metadata({ data: "json, name=minimumQuickLoginWaitSeconds" })
  minimumQuickLoginWaitSeconds?: number;

  @Metadata({ data: "json, name=notBefore" })
  notBefore?: number;

  @Metadata({ data: "json, name=offlineSessionIdleTimeout" })
  offlineSessionIdleTimeout?: number;

  @Metadata({ data: "json, name=offlineSessionMaxLifespan" })
  offlineSessionMaxLifespan?: number;

  @Metadata({ data: "json, name=offlineSessionMaxLifespanEnabled" })
  offlineSessionMaxLifespanEnabled?: boolean;

  @Metadata({ data: "json, name=otpPolicyAlgorithm" })
  otpPolicyAlgorithm?: string;

  @Metadata({ data: "json, name=otpPolicyDigits" })
  otpPolicyDigits?: number;

  @Metadata({ data: "json, name=otpPolicyInitialCounter" })
  otpPolicyInitialCounter?: number;

  @Metadata({ data: "json, name=otpPolicyLookAheadWindow" })
  otpPolicyLookAheadWindow?: number;

  @Metadata({ data: "json, name=otpPolicyPeriod" })
  otpPolicyPeriod?: number;

  @Metadata({ data: "json, name=otpPolicyType" })
  otpPolicyType?: string;

  @Metadata({ data: "json, name=otpSupportedApplications" })
  otpSupportedApplications?: string[];

  @Metadata({ data: "json, name=passwordPolicy" })
  passwordPolicy?: string;

  @Metadata({ data: "json, name=permanentLockout" })
  permanentLockout?: boolean;

  @Metadata({ data: "json, name=protocolMappers", elemType: shared.ProtocolMapperRepresentation })
  protocolMappers?: ProtocolMapperRepresentation[];

  @Metadata({ data: "json, name=quickLoginCheckMilliSeconds" })
  quickLoginCheckMilliSeconds?: number;

  @Metadata({ data: "json, name=realm" })
  realm?: string;

  @Metadata({ data: "json, name=refreshTokenMaxReuse" })
  refreshTokenMaxReuse?: number;

  @Metadata({ data: "json, name=registrationAllowed" })
  registrationAllowed?: boolean;

  @Metadata({ data: "json, name=registrationEmailAsUsername" })
  registrationEmailAsUsername?: boolean;

  @Metadata({ data: "json, name=registrationFlow" })
  registrationFlow?: string;

  @Metadata({ data: "json, name=rememberMe" })
  rememberMe?: boolean;

  @Metadata({ data: "json, name=requiredActions", elemType: shared.RequiredActionProviderRepresentation })
  requiredActions?: RequiredActionProviderRepresentation[];

  @Metadata({ data: "json, name=resetCredentialsFlow" })
  resetCredentialsFlow?: string;

  @Metadata({ data: "json, name=resetPasswordAllowed" })
  resetPasswordAllowed?: boolean;

  @Metadata({ data: "json, name=revokeRefreshToken" })
  revokeRefreshToken?: boolean;

  @Metadata({ data: "json, name=roles" })
  roles?: RolesRepresentation;

  @Metadata({ data: "json, name=scopeMappings", elemType: shared.ScopeMappingRepresentation })
  scopeMappings?: ScopeMappingRepresentation[];

  @Metadata({ data: "json, name=smtpServer" })
  smtpServer?: Map<string, any>;

  @Metadata({ data: "json, name=sslRequired" })
  sslRequired?: string;

  @Metadata({ data: "json, name=ssoSessionIdleTimeout" })
  ssoSessionIdleTimeout?: number;

  @Metadata({ data: "json, name=ssoSessionIdleTimeoutRememberMe" })
  ssoSessionIdleTimeoutRememberMe?: number;

  @Metadata({ data: "json, name=ssoSessionMaxLifespan" })
  ssoSessionMaxLifespan?: number;

  @Metadata({ data: "json, name=ssoSessionMaxLifespanRememberMe" })
  ssoSessionMaxLifespanRememberMe?: number;

  @Metadata({ data: "json, name=supportedLocales" })
  supportedLocales?: string[];

  @Metadata({ data: "json, name=userFederationMappers", elemType: shared.UserFederationMapperRepresentation })
  userFederationMappers?: UserFederationMapperRepresentation[];

  @Metadata({ data: "json, name=userFederationProviders", elemType: shared.UserFederationProviderRepresentation })
  userFederationProviders?: UserFederationProviderRepresentation[];

  @Metadata({ data: "json, name=userManagedAccessAllowed" })
  userManagedAccessAllowed?: boolean;

  @Metadata({ data: "json, name=users", elemType: shared.UserRepresentation })
  users?: UserRepresentation[];

  @Metadata({ data: "json, name=verifyEmail" })
  verifyEmail?: boolean;

  @Metadata({ data: "json, name=waitIncrementSeconds" })
  waitIncrementSeconds?: number;

  @Metadata({ data: "json, name=webAuthnPolicyAcceptableAaguids" })
  webAuthnPolicyAcceptableAaguids?: string[];

  @Metadata({ data: "json, name=webAuthnPolicyAttestationConveyancePreference" })
  webAuthnPolicyAttestationConveyancePreference?: string;

  @Metadata({ data: "json, name=webAuthnPolicyAuthenticatorAttachment" })
  webAuthnPolicyAuthenticatorAttachment?: string;

  @Metadata({ data: "json, name=webAuthnPolicyAvoidSameAuthenticatorRegister" })
  webAuthnPolicyAvoidSameAuthenticatorRegister?: boolean;

  @Metadata({ data: "json, name=webAuthnPolicyCreateTimeout" })
  webAuthnPolicyCreateTimeout?: number;

  @Metadata({ data: "json, name=webAuthnPolicyPasswordlessAcceptableAaguids" })
  webAuthnPolicyPasswordlessAcceptableAaguids?: string[];

  @Metadata({ data: "json, name=webAuthnPolicyPasswordlessAttestationConveyancePreference" })
  webAuthnPolicyPasswordlessAttestationConveyancePreference?: string;

  @Metadata({ data: "json, name=webAuthnPolicyPasswordlessAuthenticatorAttachment" })
  webAuthnPolicyPasswordlessAuthenticatorAttachment?: string;

  @Metadata({ data: "json, name=webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister" })
  webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister?: boolean;

  @Metadata({ data: "json, name=webAuthnPolicyPasswordlessCreateTimeout" })
  webAuthnPolicyPasswordlessCreateTimeout?: number;

  @Metadata({ data: "json, name=webAuthnPolicyPasswordlessRequireResidentKey" })
  webAuthnPolicyPasswordlessRequireResidentKey?: string;

  @Metadata({ data: "json, name=webAuthnPolicyPasswordlessRpEntityName" })
  webAuthnPolicyPasswordlessRpEntityName?: string;

  @Metadata({ data: "json, name=webAuthnPolicyPasswordlessRpId" })
  webAuthnPolicyPasswordlessRpId?: string;

  @Metadata({ data: "json, name=webAuthnPolicyPasswordlessSignatureAlgorithms" })
  webAuthnPolicyPasswordlessSignatureAlgorithms?: string[];

  @Metadata({ data: "json, name=webAuthnPolicyPasswordlessUserVerificationRequirement" })
  webAuthnPolicyPasswordlessUserVerificationRequirement?: string;

  @Metadata({ data: "json, name=webAuthnPolicyRequireResidentKey" })
  webAuthnPolicyRequireResidentKey?: string;

  @Metadata({ data: "json, name=webAuthnPolicyRpEntityName" })
  webAuthnPolicyRpEntityName?: string;

  @Metadata({ data: "json, name=webAuthnPolicyRpId" })
  webAuthnPolicyRpId?: string;

  @Metadata({ data: "json, name=webAuthnPolicySignatureAlgorithms" })
  webAuthnPolicySignatureAlgorithms?: string[];

  @Metadata({ data: "json, name=webAuthnPolicyUserVerificationRequirement" })
  webAuthnPolicyUserVerificationRequirement?: string;
}
