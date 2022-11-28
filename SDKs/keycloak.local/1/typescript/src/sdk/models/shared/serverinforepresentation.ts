import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemoryInfoRepresentation } from "./memoryinforepresentation";
import { PasswordPolicyTypeRepresentation } from "./passwordpolicytyperepresentation";
import { ProfileInfoRepresentation } from "./profileinforepresentation";
import { SystemInfoRepresentation } from "./systeminforepresentation";



export class ServerInfoRepresentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=builtinProtocolMappers" })
  builtinProtocolMappers?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=clientImporters" })
  clientImporters?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=clientInstallations" })
  clientInstallations?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=componentTypes" })
  componentTypes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=enums" })
  enums?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=identityProviders" })
  identityProviders?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=memoryInfo" })
  memoryInfo?: MemoryInfoRepresentation;

  @SpeakeasyMetadata({ data: "json, name=passwordPolicies", elemType: PasswordPolicyTypeRepresentation })
  passwordPolicies?: PasswordPolicyTypeRepresentation[];

  @SpeakeasyMetadata({ data: "json, name=profileInfo" })
  profileInfo?: ProfileInfoRepresentation;

  @SpeakeasyMetadata({ data: "json, name=protocolMapperTypes" })
  protocolMapperTypes?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=providers" })
  providers?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=socialProviders" })
  socialProviders?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=systemInfo" })
  systemInfo?: SystemInfoRepresentation;

  @SpeakeasyMetadata({ data: "json, name=themes" })
  themes?: Map<string, any>;
}
