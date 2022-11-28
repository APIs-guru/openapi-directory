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
export var MitreAttackAdditionalTacticsEnum;
(function (MitreAttackAdditionalTacticsEnum) {
    MitreAttackAdditionalTacticsEnum["TacticUnspecified"] = "TACTIC_UNSPECIFIED";
    MitreAttackAdditionalTacticsEnum["Reconnaissance"] = "RECONNAISSANCE";
    MitreAttackAdditionalTacticsEnum["ResourceDevelopment"] = "RESOURCE_DEVELOPMENT";
    MitreAttackAdditionalTacticsEnum["InitialAccess"] = "INITIAL_ACCESS";
    MitreAttackAdditionalTacticsEnum["Execution"] = "EXECUTION";
    MitreAttackAdditionalTacticsEnum["Persistence"] = "PERSISTENCE";
    MitreAttackAdditionalTacticsEnum["PrivilegeEscalation"] = "PRIVILEGE_ESCALATION";
    MitreAttackAdditionalTacticsEnum["DefenseEvasion"] = "DEFENSE_EVASION";
    MitreAttackAdditionalTacticsEnum["CredentialAccess"] = "CREDENTIAL_ACCESS";
    MitreAttackAdditionalTacticsEnum["Discovery"] = "DISCOVERY";
    MitreAttackAdditionalTacticsEnum["LateralMovement"] = "LATERAL_MOVEMENT";
    MitreAttackAdditionalTacticsEnum["Collection"] = "COLLECTION";
    MitreAttackAdditionalTacticsEnum["CommandAndControl"] = "COMMAND_AND_CONTROL";
    MitreAttackAdditionalTacticsEnum["Exfiltration"] = "EXFILTRATION";
    MitreAttackAdditionalTacticsEnum["Impact"] = "IMPACT";
})(MitreAttackAdditionalTacticsEnum || (MitreAttackAdditionalTacticsEnum = {}));
export var MitreAttackAdditionalTechniquesEnum;
(function (MitreAttackAdditionalTechniquesEnum) {
    MitreAttackAdditionalTechniquesEnum["TechniqueUnspecified"] = "TECHNIQUE_UNSPECIFIED";
    MitreAttackAdditionalTechniquesEnum["ActiveScanning"] = "ACTIVE_SCANNING";
    MitreAttackAdditionalTechniquesEnum["ScanningIpBlocks"] = "SCANNING_IP_BLOCKS";
    MitreAttackAdditionalTechniquesEnum["IngressToolTransfer"] = "INGRESS_TOOL_TRANSFER";
    MitreAttackAdditionalTechniquesEnum["NativeApi"] = "NATIVE_API";
    MitreAttackAdditionalTechniquesEnum["SharedModules"] = "SHARED_MODULES";
    MitreAttackAdditionalTechniquesEnum["CommandAndScriptingInterpreter"] = "COMMAND_AND_SCRIPTING_INTERPRETER";
    MitreAttackAdditionalTechniquesEnum["UnixShell"] = "UNIX_SHELL";
    MitreAttackAdditionalTechniquesEnum["ResourceHijacking"] = "RESOURCE_HIJACKING";
    MitreAttackAdditionalTechniquesEnum["Proxy"] = "PROXY";
    MitreAttackAdditionalTechniquesEnum["ExternalProxy"] = "EXTERNAL_PROXY";
    MitreAttackAdditionalTechniquesEnum["MultiHopProxy"] = "MULTI_HOP_PROXY";
    MitreAttackAdditionalTechniquesEnum["DynamicResolution"] = "DYNAMIC_RESOLUTION";
    MitreAttackAdditionalTechniquesEnum["UnsecuredCredentials"] = "UNSECURED_CREDENTIALS";
    MitreAttackAdditionalTechniquesEnum["ValidAccounts"] = "VALID_ACCOUNTS";
    MitreAttackAdditionalTechniquesEnum["LocalAccounts"] = "LOCAL_ACCOUNTS";
    MitreAttackAdditionalTechniquesEnum["CloudAccounts"] = "CLOUD_ACCOUNTS";
    MitreAttackAdditionalTechniquesEnum["NetworkDenialOfService"] = "NETWORK_DENIAL_OF_SERVICE";
    MitreAttackAdditionalTechniquesEnum["PermissionGroupsDiscovery"] = "PERMISSION_GROUPS_DISCOVERY";
    MitreAttackAdditionalTechniquesEnum["CloudGroups"] = "CLOUD_GROUPS";
    MitreAttackAdditionalTechniquesEnum["ExfiltrationOverWebService"] = "EXFILTRATION_OVER_WEB_SERVICE";
    MitreAttackAdditionalTechniquesEnum["ExfiltrationToCloudStorage"] = "EXFILTRATION_TO_CLOUD_STORAGE";
    MitreAttackAdditionalTechniquesEnum["AccountManipulation"] = "ACCOUNT_MANIPULATION";
    MitreAttackAdditionalTechniquesEnum["SshAuthorizedKeys"] = "SSH_AUTHORIZED_KEYS";
    MitreAttackAdditionalTechniquesEnum["CreateOrModifySystemProcess"] = "CREATE_OR_MODIFY_SYSTEM_PROCESS";
    MitreAttackAdditionalTechniquesEnum["StealWebSessionCookie"] = "STEAL_WEB_SESSION_COOKIE";
    MitreAttackAdditionalTechniquesEnum["ModifyCloudComputeInfrastructure"] = "MODIFY_CLOUD_COMPUTE_INFRASTRUCTURE";
    MitreAttackAdditionalTechniquesEnum["ExploitPublicFacingApplication"] = "EXPLOIT_PUBLIC_FACING_APPLICATION";
    MitreAttackAdditionalTechniquesEnum["ModifyAuthenticationProcess"] = "MODIFY_AUTHENTICATION_PROCESS";
    MitreAttackAdditionalTechniquesEnum["DataDestruction"] = "DATA_DESTRUCTION";
    MitreAttackAdditionalTechniquesEnum["DomainPolicyModification"] = "DOMAIN_POLICY_MODIFICATION";
    MitreAttackAdditionalTechniquesEnum["ImpairDefenses"] = "IMPAIR_DEFENSES";
    MitreAttackAdditionalTechniquesEnum["NetworkServiceDiscovery"] = "NETWORK_SERVICE_DISCOVERY";
    MitreAttackAdditionalTechniquesEnum["AccessTokenManipulation"] = "ACCESS_TOKEN_MANIPULATION";
    MitreAttackAdditionalTechniquesEnum["AbuseElevationControlMechanism"] = "ABUSE_ELEVATION_CONTROL_MECHANISM";
    MitreAttackAdditionalTechniquesEnum["DefaultAccounts"] = "DEFAULT_ACCOUNTS";
})(MitreAttackAdditionalTechniquesEnum || (MitreAttackAdditionalTechniquesEnum = {}));
export var MitreAttackPrimaryTacticEnum;
(function (MitreAttackPrimaryTacticEnum) {
    MitreAttackPrimaryTacticEnum["TacticUnspecified"] = "TACTIC_UNSPECIFIED";
    MitreAttackPrimaryTacticEnum["Reconnaissance"] = "RECONNAISSANCE";
    MitreAttackPrimaryTacticEnum["ResourceDevelopment"] = "RESOURCE_DEVELOPMENT";
    MitreAttackPrimaryTacticEnum["InitialAccess"] = "INITIAL_ACCESS";
    MitreAttackPrimaryTacticEnum["Execution"] = "EXECUTION";
    MitreAttackPrimaryTacticEnum["Persistence"] = "PERSISTENCE";
    MitreAttackPrimaryTacticEnum["PrivilegeEscalation"] = "PRIVILEGE_ESCALATION";
    MitreAttackPrimaryTacticEnum["DefenseEvasion"] = "DEFENSE_EVASION";
    MitreAttackPrimaryTacticEnum["CredentialAccess"] = "CREDENTIAL_ACCESS";
    MitreAttackPrimaryTacticEnum["Discovery"] = "DISCOVERY";
    MitreAttackPrimaryTacticEnum["LateralMovement"] = "LATERAL_MOVEMENT";
    MitreAttackPrimaryTacticEnum["Collection"] = "COLLECTION";
    MitreAttackPrimaryTacticEnum["CommandAndControl"] = "COMMAND_AND_CONTROL";
    MitreAttackPrimaryTacticEnum["Exfiltration"] = "EXFILTRATION";
    MitreAttackPrimaryTacticEnum["Impact"] = "IMPACT";
})(MitreAttackPrimaryTacticEnum || (MitreAttackPrimaryTacticEnum = {}));
export var MitreAttackPrimaryTechniquesEnum;
(function (MitreAttackPrimaryTechniquesEnum) {
    MitreAttackPrimaryTechniquesEnum["TechniqueUnspecified"] = "TECHNIQUE_UNSPECIFIED";
    MitreAttackPrimaryTechniquesEnum["ActiveScanning"] = "ACTIVE_SCANNING";
    MitreAttackPrimaryTechniquesEnum["ScanningIpBlocks"] = "SCANNING_IP_BLOCKS";
    MitreAttackPrimaryTechniquesEnum["IngressToolTransfer"] = "INGRESS_TOOL_TRANSFER";
    MitreAttackPrimaryTechniquesEnum["NativeApi"] = "NATIVE_API";
    MitreAttackPrimaryTechniquesEnum["SharedModules"] = "SHARED_MODULES";
    MitreAttackPrimaryTechniquesEnum["CommandAndScriptingInterpreter"] = "COMMAND_AND_SCRIPTING_INTERPRETER";
    MitreAttackPrimaryTechniquesEnum["UnixShell"] = "UNIX_SHELL";
    MitreAttackPrimaryTechniquesEnum["ResourceHijacking"] = "RESOURCE_HIJACKING";
    MitreAttackPrimaryTechniquesEnum["Proxy"] = "PROXY";
    MitreAttackPrimaryTechniquesEnum["ExternalProxy"] = "EXTERNAL_PROXY";
    MitreAttackPrimaryTechniquesEnum["MultiHopProxy"] = "MULTI_HOP_PROXY";
    MitreAttackPrimaryTechniquesEnum["DynamicResolution"] = "DYNAMIC_RESOLUTION";
    MitreAttackPrimaryTechniquesEnum["UnsecuredCredentials"] = "UNSECURED_CREDENTIALS";
    MitreAttackPrimaryTechniquesEnum["ValidAccounts"] = "VALID_ACCOUNTS";
    MitreAttackPrimaryTechniquesEnum["LocalAccounts"] = "LOCAL_ACCOUNTS";
    MitreAttackPrimaryTechniquesEnum["CloudAccounts"] = "CLOUD_ACCOUNTS";
    MitreAttackPrimaryTechniquesEnum["NetworkDenialOfService"] = "NETWORK_DENIAL_OF_SERVICE";
    MitreAttackPrimaryTechniquesEnum["PermissionGroupsDiscovery"] = "PERMISSION_GROUPS_DISCOVERY";
    MitreAttackPrimaryTechniquesEnum["CloudGroups"] = "CLOUD_GROUPS";
    MitreAttackPrimaryTechniquesEnum["ExfiltrationOverWebService"] = "EXFILTRATION_OVER_WEB_SERVICE";
    MitreAttackPrimaryTechniquesEnum["ExfiltrationToCloudStorage"] = "EXFILTRATION_TO_CLOUD_STORAGE";
    MitreAttackPrimaryTechniquesEnum["AccountManipulation"] = "ACCOUNT_MANIPULATION";
    MitreAttackPrimaryTechniquesEnum["SshAuthorizedKeys"] = "SSH_AUTHORIZED_KEYS";
    MitreAttackPrimaryTechniquesEnum["CreateOrModifySystemProcess"] = "CREATE_OR_MODIFY_SYSTEM_PROCESS";
    MitreAttackPrimaryTechniquesEnum["StealWebSessionCookie"] = "STEAL_WEB_SESSION_COOKIE";
    MitreAttackPrimaryTechniquesEnum["ModifyCloudComputeInfrastructure"] = "MODIFY_CLOUD_COMPUTE_INFRASTRUCTURE";
    MitreAttackPrimaryTechniquesEnum["ExploitPublicFacingApplication"] = "EXPLOIT_PUBLIC_FACING_APPLICATION";
    MitreAttackPrimaryTechniquesEnum["ModifyAuthenticationProcess"] = "MODIFY_AUTHENTICATION_PROCESS";
    MitreAttackPrimaryTechniquesEnum["DataDestruction"] = "DATA_DESTRUCTION";
    MitreAttackPrimaryTechniquesEnum["DomainPolicyModification"] = "DOMAIN_POLICY_MODIFICATION";
    MitreAttackPrimaryTechniquesEnum["ImpairDefenses"] = "IMPAIR_DEFENSES";
    MitreAttackPrimaryTechniquesEnum["NetworkServiceDiscovery"] = "NETWORK_SERVICE_DISCOVERY";
    MitreAttackPrimaryTechniquesEnum["AccessTokenManipulation"] = "ACCESS_TOKEN_MANIPULATION";
    MitreAttackPrimaryTechniquesEnum["AbuseElevationControlMechanism"] = "ABUSE_ELEVATION_CONTROL_MECHANISM";
    MitreAttackPrimaryTechniquesEnum["DefaultAccounts"] = "DEFAULT_ACCOUNTS";
})(MitreAttackPrimaryTechniquesEnum || (MitreAttackPrimaryTechniquesEnum = {}));
// MitreAttack
/**
 * MITRE ATT&CK tactics and techniques related to this finding. See: https://attack.mitre.org
**/
var MitreAttack = /** @class */ (function (_super) {
    __extends(MitreAttack, _super);
    function MitreAttack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalTactics" }),
        __metadata("design:type", Array)
    ], MitreAttack.prototype, "additionalTactics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalTechniques" }),
        __metadata("design:type", Array)
    ], MitreAttack.prototype, "additionalTechniques", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryTactic" }),
        __metadata("design:type", String)
    ], MitreAttack.prototype, "primaryTactic", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryTechniques" }),
        __metadata("design:type", Array)
    ], MitreAttack.prototype, "primaryTechniques", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], MitreAttack.prototype, "version", void 0);
    return MitreAttack;
}(SpeakeasyBase));
export { MitreAttack };
