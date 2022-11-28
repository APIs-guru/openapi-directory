import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



export class RealmRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessCodeLifespan" })
  accessCodeLifespan?: number;

  @SpeakeasyMetadata({ data: "json, name=accessCodeLifespanLogin" })
  accessCodeLifespanLogin?: number;

  @SpeakeasyMetadata({ data: "json, name=accessCodeLifespanUserAction" })
  accessCodeLifespanUserAction?: number;

  @SpeakeasyMetadata({ data: "json, name=accessTokenLifespan" })
  accessTokenLifespan?: number;

  @SpeakeasyMetadata({ data: "json, name=accessTokenLifespanForImplicitFlow" })
  accessTokenLifespanForImplicitFlow?: number;

  @SpeakeasyMetadata({ data: "json, name=accountTheme" })
  accountTheme?: string;

  @SpeakeasyMetadata({ data: "json, name=actionTokenGeneratedByAdminLifespan" })
  actionTokenGeneratedByAdminLifespan?: number;

  @SpeakeasyMetadata({ data: "json, name=actionTokenGeneratedByUserLifespan" })
  actionTokenGeneratedByUserLifespan?: number;

  @SpeakeasyMetadata({ data: "json, name=adminEventsDetailsEnabled" })
  adminEventsDetailsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=adminEventsEnabled" })
  adminEventsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=adminTheme" })
  adminTheme?: string;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=authenticationFlows", elemType: AuthenticationFlowRepresentation })
  authenticationFlows?: AuthenticationFlowRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=authenticatorConfig", elemType: AuthenticatorConfigRepresentation })
  authenticatorConfig?: AuthenticatorConfigRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=browserFlow" })
  browserFlow?: string;

  @SpeakeasyMetadata({ data: "json, name=browserSecurityHeaders" })
  browserSecurityHeaders?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=bruteForceProtected" })
  bruteForceProtected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clientAuthenticationFlow" })
  clientAuthenticationFlow?: string;

  @SpeakeasyMetadata({ data: "json, name=clientScopeMappings" })
  clientScopeMappings?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=clientScopes", elemType: ClientScopeRepresentation })
  clientScopes?: ClientScopeRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=clientSessionIdleTimeout" })
  clientSessionIdleTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=clientSessionMaxLifespan" })
  clientSessionMaxLifespan?: number;

  @SpeakeasyMetadata({ data: "json, name=clients", elemType: ClientRepresentation })
  clients?: ClientRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=components" })
  components?: MultivaluedHashMap;

  @SpeakeasyMetadata({ data: "json, name=defaultDefaultClientScopes" })
  defaultDefaultClientScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=defaultGroups" })
  defaultGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=defaultLocale" })
  defaultLocale?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultOptionalClientScopes" })
  defaultOptionalClientScopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=defaultRoles" })
  defaultRoles?: string[];

  @SpeakeasyMetadata({ data: "json, name=defaultSignatureAlgorithm" })
  defaultSignatureAlgorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=directGrantFlow" })
  directGrantFlow?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=displayNameHtml" })
  displayNameHtml?: string;

  @SpeakeasyMetadata({ data: "json, name=dockerAuthenticationFlow" })
  dockerAuthenticationFlow?: string;

  @SpeakeasyMetadata({ data: "json, name=duplicateEmailsAllowed" })
  duplicateEmailsAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=editUsernameAllowed" })
  editUsernameAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=emailTheme" })
  emailTheme?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enabledEventTypes" })
  enabledEventTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=eventsEnabled" })
  eventsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=eventsExpiration" })
  eventsExpiration?: number;

  @SpeakeasyMetadata({ data: "json, name=eventsListeners" })
  eventsListeners?: string[];

  @SpeakeasyMetadata({ data: "json, name=failureFactor" })
  failureFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=federatedUsers", elemType: UserRepresentation })
  federatedUsers?: UserRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=groups", elemType: GroupRepresentation })
  groups?: GroupRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=identityProviderMappers", elemType: IdentityProviderMapperRepresentation })
  identityProviderMappers?: IdentityProviderMapperRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=identityProviders", elemType: IdentityProviderRepresentation })
  identityProviders?: IdentityProviderRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=internationalizationEnabled" })
  internationalizationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=keycloakVersion" })
  keycloakVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=loginTheme" })
  loginTheme?: string;

  @SpeakeasyMetadata({ data: "json, name=loginWithEmailAllowed" })
  loginWithEmailAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxDeltaTimeSeconds" })
  maxDeltaTimeSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=maxFailureWaitSeconds" })
  maxFailureWaitSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=minimumQuickLoginWaitSeconds" })
  minimumQuickLoginWaitSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=notBefore" })
  notBefore?: number;

  @SpeakeasyMetadata({ data: "json, name=offlineSessionIdleTimeout" })
  offlineSessionIdleTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=offlineSessionMaxLifespan" })
  offlineSessionMaxLifespan?: number;

  @SpeakeasyMetadata({ data: "json, name=offlineSessionMaxLifespanEnabled" })
  offlineSessionMaxLifespanEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=otpPolicyAlgorithm" })
  otpPolicyAlgorithm?: string;

  @SpeakeasyMetadata({ data: "json, name=otpPolicyDigits" })
  otpPolicyDigits?: number;

  @SpeakeasyMetadata({ data: "json, name=otpPolicyInitialCounter" })
  otpPolicyInitialCounter?: number;

  @SpeakeasyMetadata({ data: "json, name=otpPolicyLookAheadWindow" })
  otpPolicyLookAheadWindow?: number;

  @SpeakeasyMetadata({ data: "json, name=otpPolicyPeriod" })
  otpPolicyPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=otpPolicyType" })
  otpPolicyType?: string;

  @SpeakeasyMetadata({ data: "json, name=otpSupportedApplications" })
  otpSupportedApplications?: string[];

  @SpeakeasyMetadata({ data: "json, name=passwordPolicy" })
  passwordPolicy?: string;

  @SpeakeasyMetadata({ data: "json, name=permanentLockout" })
  permanentLockout?: boolean;

  @SpeakeasyMetadata({ data: "json, name=protocolMappers", elemType: ProtocolMapperRepresentation })
  protocolMappers?: ProtocolMapperRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=quickLoginCheckMilliSeconds" })
  quickLoginCheckMilliSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=realm" })
  realm?: string;

  @SpeakeasyMetadata({ data: "json, name=refreshTokenMaxReuse" })
  refreshTokenMaxReuse?: number;

  @SpeakeasyMetadata({ data: "json, name=registrationAllowed" })
  registrationAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registrationEmailAsUsername" })
  registrationEmailAsUsername?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registrationFlow" })
  registrationFlow?: string;

  @SpeakeasyMetadata({ data: "json, name=rememberMe" })
  rememberMe?: boolean;

  @SpeakeasyMetadata({ data: "json, name=requiredActions", elemType: RequiredActionProviderRepresentation })
  requiredActions?: RequiredActionProviderRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=resetCredentialsFlow" })
  resetCredentialsFlow?: string;

  @SpeakeasyMetadata({ data: "json, name=resetPasswordAllowed" })
  resetPasswordAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=revokeRefreshToken" })
  revokeRefreshToken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=roles" })
  roles?: RolesRepresentation;

  @SpeakeasyMetadata({ data: "json, name=scopeMappings", elemType: ScopeMappingRepresentation })
  scopeMappings?: ScopeMappingRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=smtpServer" })
  smtpServer?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sslRequired" })
  sslRequired?: string;

  @SpeakeasyMetadata({ data: "json, name=ssoSessionIdleTimeout" })
  ssoSessionIdleTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=ssoSessionIdleTimeoutRememberMe" })
  ssoSessionIdleTimeoutRememberMe?: number;

  @SpeakeasyMetadata({ data: "json, name=ssoSessionMaxLifespan" })
  ssoSessionMaxLifespan?: number;

  @SpeakeasyMetadata({ data: "json, name=ssoSessionMaxLifespanRememberMe" })
  ssoSessionMaxLifespanRememberMe?: number;

  @SpeakeasyMetadata({ data: "json, name=supportedLocales" })
  supportedLocales?: string[];

  @SpeakeasyMetadata({ data: "json, name=userFederationMappers", elemType: UserFederationMapperRepresentation })
  userFederationMappers?: UserFederationMapperRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=userFederationProviders", elemType: UserFederationProviderRepresentation })
  userFederationProviders?: UserFederationProviderRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=userManagedAccessAllowed" })
  userManagedAccessAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=users", elemType: UserRepresentation })
  users?: UserRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=verifyEmail" })
  verifyEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=waitIncrementSeconds" })
  waitIncrementSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyAcceptableAaguids" })
  webAuthnPolicyAcceptableAaguids?: string[];

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyAttestationConveyancePreference" })
  webAuthnPolicyAttestationConveyancePreference?: string;

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyAuthenticatorAttachment" })
  webAuthnPolicyAuthenticatorAttachment?: string;

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyAvoidSameAuthenticatorRegister" })
  webAuthnPolicyAvoidSameAuthenticatorRegister?: boolean;

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyCreateTimeout" })
  webAuthnPolicyCreateTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessAcceptableAaguids" })
  webAuthnPolicyPasswordlessAcceptableAaguids?: string[];

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessAttestationConveyancePreference" })
  webAuthnPolicyPasswordlessAttestationConveyancePreference?: string;

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessAuthenticatorAttachment" })
  webAuthnPolicyPasswordlessAuthenticatorAttachment?: string;

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister" })
  webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister?: boolean;

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessCreateTimeout" })
  webAuthnPolicyPasswordlessCreateTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessRequireResidentKey" })
  webAuthnPolicyPasswordlessRequireResidentKey?: string;

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessRpEntityName" })
  webAuthnPolicyPasswordlessRpEntityName?: string;

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessRpId" })
  webAuthnPolicyPasswordlessRpId?: string;

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessSignatureAlgorithms" })
  webAuthnPolicyPasswordlessSignatureAlgorithms?: string[];

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessUserVerificationRequirement" })
  webAuthnPolicyPasswordlessUserVerificationRequirement?: string;

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyRequireResidentKey" })
  webAuthnPolicyRequireResidentKey?: string;

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyRpEntityName" })
  webAuthnPolicyRpEntityName?: string;

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyRpId" })
  webAuthnPolicyRpId?: string;

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicySignatureAlgorithms" })
  webAuthnPolicySignatureAlgorithms?: string[];

  @SpeakeasyMetadata({ data: "json, name=webAuthnPolicyUserVerificationRequirement" })
  webAuthnPolicyUserVerificationRequirement?: string;
}
