import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MemoryInfoRepresentation } from "./memoryinforepresentation";
import { PasswordPolicyTypeRepresentation } from "./passwordpolicytyperepresentation";
import { ProfileInfoRepresentation } from "./profileinforepresentation";
import { SystemInfoRepresentation } from "./systeminforepresentation";


export class ServerInfoRepresentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=builtinProtocolMappers" })
  builtinProtocolMappers?: Map<string, any>;

  @Metadata({ data: "json, name=clientImporters" })
  clientImporters?: Map<string, any>[];

  @Metadata({ data: "json, name=clientInstallations" })
  clientInstallations?: Map<string, any>;

  @Metadata({ data: "json, name=componentTypes" })
  componentTypes?: Map<string, any>;

  @Metadata({ data: "json, name=enums" })
  enums?: Map<string, any>;

  @Metadata({ data: "json, name=identityProviders" })
  identityProviders?: Map<string, any>[];

  @Metadata({ data: "json, name=memoryInfo" })
  memoryInfo?: MemoryInfoRepresentation;

  @Metadata({ data: "json, name=passwordPolicies", elemType: shared.PasswordPolicyTypeRepresentation })
  passwordPolicies?: PasswordPolicyTypeRepresentation[];

  @Metadata({ data: "json, name=profileInfo" })
  profileInfo?: ProfileInfoRepresentation;

  @Metadata({ data: "json, name=protocolMapperTypes" })
  protocolMapperTypes?: Map<string, any>;

  @Metadata({ data: "json, name=providers" })
  providers?: Map<string, any>;

  @Metadata({ data: "json, name=socialProviders" })
  socialProviders?: Map<string, any>[];

  @Metadata({ data: "json, name=systemInfo" })
  systemInfo?: SystemInfoRepresentation;

  @Metadata({ data: "json, name=themes" })
  themes?: Map<string, any>;
}
