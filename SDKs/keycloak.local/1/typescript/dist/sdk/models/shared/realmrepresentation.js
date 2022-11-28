var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var RealmRepresentation = /** @class */ (function (_super) {
    __extends(RealmRepresentation, _super);
    function RealmRepresentation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessCodeLifespan" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "accessCodeLifespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessCodeLifespanLogin" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "accessCodeLifespanLogin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessCodeLifespanUserAction" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "accessCodeLifespanUserAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessTokenLifespan" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "accessTokenLifespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accessTokenLifespanForImplicitFlow" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "accessTokenLifespanForImplicitFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=accountTheme" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "accountTheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionTokenGeneratedByAdminLifespan" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "actionTokenGeneratedByAdminLifespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actionTokenGeneratedByUserLifespan" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "actionTokenGeneratedByUserLifespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminEventsDetailsEnabled" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "adminEventsDetailsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminEventsEnabled" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "adminEventsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminTheme" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "adminTheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attributes" }),
        __metadata("design:type", Map)
    ], RealmRepresentation.prototype, "attributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authenticationFlows", elemType: AuthenticationFlowRepresentation }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "authenticationFlows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authenticatorConfig", elemType: AuthenticatorConfigRepresentation }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "authenticatorConfig", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=browserFlow" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "browserFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=browserSecurityHeaders" }),
        __metadata("design:type", Map)
    ], RealmRepresentation.prototype, "browserSecurityHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bruteForceProtected" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "bruteForceProtected", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientAuthenticationFlow" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "clientAuthenticationFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientScopeMappings" }),
        __metadata("design:type", Map)
    ], RealmRepresentation.prototype, "clientScopeMappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientScopes", elemType: ClientScopeRepresentation }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "clientScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientSessionIdleTimeout" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "clientSessionIdleTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clientSessionMaxLifespan" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "clientSessionMaxLifespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clients", elemType: ClientRepresentation }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "clients", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=components" }),
        __metadata("design:type", MultivaluedHashMap)
    ], RealmRepresentation.prototype, "components", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultDefaultClientScopes" }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "defaultDefaultClientScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultGroups" }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "defaultGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultLocale" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "defaultLocale", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultOptionalClientScopes" }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "defaultOptionalClientScopes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultRoles" }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "defaultRoles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=defaultSignatureAlgorithm" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "defaultSignatureAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directGrantFlow" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "directGrantFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayNameHtml" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "displayNameHtml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dockerAuthenticationFlow" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "dockerAuthenticationFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=duplicateEmailsAllowed" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "duplicateEmailsAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=editUsernameAllowed" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "editUsernameAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailTheme" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "emailTheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabledEventTypes" }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "enabledEventTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventsEnabled" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "eventsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventsExpiration" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "eventsExpiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eventsListeners" }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "eventsListeners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=failureFactor" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "failureFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=federatedUsers", elemType: UserRepresentation }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "federatedUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=groups", elemType: GroupRepresentation }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "groups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identityProviderMappers", elemType: IdentityProviderMapperRepresentation }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "identityProviderMappers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identityProviders", elemType: IdentityProviderRepresentation }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "identityProviders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=internationalizationEnabled" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "internationalizationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keycloakVersion" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "keycloakVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loginTheme" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "loginTheme", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=loginWithEmailAllowed" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "loginWithEmailAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxDeltaTimeSeconds" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "maxDeltaTimeSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxFailureWaitSeconds" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "maxFailureWaitSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimumQuickLoginWaitSeconds" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "minimumQuickLoginWaitSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notBefore" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "notBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offlineSessionIdleTimeout" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "offlineSessionIdleTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offlineSessionMaxLifespan" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "offlineSessionMaxLifespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offlineSessionMaxLifespanEnabled" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "offlineSessionMaxLifespanEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otpPolicyAlgorithm" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "otpPolicyAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otpPolicyDigits" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "otpPolicyDigits", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otpPolicyInitialCounter" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "otpPolicyInitialCounter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otpPolicyLookAheadWindow" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "otpPolicyLookAheadWindow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otpPolicyPeriod" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "otpPolicyPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otpPolicyType" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "otpPolicyType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=otpSupportedApplications" }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "otpSupportedApplications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=passwordPolicy" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "passwordPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=permanentLockout" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "permanentLockout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocolMappers", elemType: ProtocolMapperRepresentation }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "protocolMappers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=quickLoginCheckMilliSeconds" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "quickLoginCheckMilliSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=realm" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "realm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=refreshTokenMaxReuse" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "refreshTokenMaxReuse", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registrationAllowed" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "registrationAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registrationEmailAsUsername" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "registrationEmailAsUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=registrationFlow" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "registrationFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rememberMe" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "rememberMe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requiredActions", elemType: RequiredActionProviderRepresentation }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "requiredActions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetCredentialsFlow" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "resetCredentialsFlow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resetPasswordAllowed" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "resetPasswordAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revokeRefreshToken" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "revokeRefreshToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=roles" }),
        __metadata("design:type", RolesRepresentation)
    ], RealmRepresentation.prototype, "roles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scopeMappings", elemType: ScopeMappingRepresentation }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "scopeMappings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smtpServer" }),
        __metadata("design:type", Map)
    ], RealmRepresentation.prototype, "smtpServer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sslRequired" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "sslRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssoSessionIdleTimeout" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "ssoSessionIdleTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssoSessionIdleTimeoutRememberMe" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "ssoSessionIdleTimeoutRememberMe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssoSessionMaxLifespan" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "ssoSessionMaxLifespan", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssoSessionMaxLifespanRememberMe" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "ssoSessionMaxLifespanRememberMe", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportedLocales" }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "supportedLocales", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userFederationMappers", elemType: UserFederationMapperRepresentation }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "userFederationMappers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userFederationProviders", elemType: UserFederationProviderRepresentation }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "userFederationProviders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userManagedAccessAllowed" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "userManagedAccessAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=users", elemType: UserRepresentation }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "users", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=verifyEmail" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "verifyEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=waitIncrementSeconds" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "waitIncrementSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyAcceptableAaguids" }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "webAuthnPolicyAcceptableAaguids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyAttestationConveyancePreference" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "webAuthnPolicyAttestationConveyancePreference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyAuthenticatorAttachment" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "webAuthnPolicyAuthenticatorAttachment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyAvoidSameAuthenticatorRegister" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "webAuthnPolicyAvoidSameAuthenticatorRegister", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyCreateTimeout" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "webAuthnPolicyCreateTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessAcceptableAaguids" }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "webAuthnPolicyPasswordlessAcceptableAaguids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessAttestationConveyancePreference" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "webAuthnPolicyPasswordlessAttestationConveyancePreference", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessAuthenticatorAttachment" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "webAuthnPolicyPasswordlessAuthenticatorAttachment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister" }),
        __metadata("design:type", Boolean)
    ], RealmRepresentation.prototype, "webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessCreateTimeout" }),
        __metadata("design:type", Number)
    ], RealmRepresentation.prototype, "webAuthnPolicyPasswordlessCreateTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessRequireResidentKey" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "webAuthnPolicyPasswordlessRequireResidentKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessRpEntityName" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "webAuthnPolicyPasswordlessRpEntityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessRpId" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "webAuthnPolicyPasswordlessRpId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessSignatureAlgorithms" }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "webAuthnPolicyPasswordlessSignatureAlgorithms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyPasswordlessUserVerificationRequirement" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "webAuthnPolicyPasswordlessUserVerificationRequirement", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyRequireResidentKey" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "webAuthnPolicyRequireResidentKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyRpEntityName" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "webAuthnPolicyRpEntityName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyRpId" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "webAuthnPolicyRpId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicySignatureAlgorithms" }),
        __metadata("design:type", Array)
    ], RealmRepresentation.prototype, "webAuthnPolicySignatureAlgorithms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=webAuthnPolicyUserVerificationRequirement" }),
        __metadata("design:type", String)
    ], RealmRepresentation.prototype, "webAuthnPolicyUserVerificationRequirement", void 0);
    return RealmRepresentation;
}(SpeakeasyBase));
export { RealmRepresentation };
