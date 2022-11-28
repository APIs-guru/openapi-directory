import { SpeakeasyBase } from "../../../internal/utils";
import { MemoryInfoRepresentation } from "./memoryinforepresentation";
import { PasswordPolicyTypeRepresentation } from "./passwordpolicytyperepresentation";
import { ProfileInfoRepresentation } from "./profileinforepresentation";
import { SystemInfoRepresentation } from "./systeminforepresentation";
export declare class ServerInfoRepresentation extends SpeakeasyBase {
    builtinProtocolMappers?: Map<string, any>;
    clientImporters?: Map<string, any>[];
    clientInstallations?: Map<string, any>;
    componentTypes?: Map<string, any>;
    enums?: Map<string, any>;
    identityProviders?: Map<string, any>[];
    memoryInfo?: MemoryInfoRepresentation;
    passwordPolicies?: PasswordPolicyTypeRepresentation[];
    profileInfo?: ProfileInfoRepresentation;
    protocolMapperTypes?: Map<string, any>;
    providers?: Map<string, any>;
    socialProviders?: Map<string, any>[];
    systemInfo?: SystemInfoRepresentation;
    themes?: Map<string, any>;
}
