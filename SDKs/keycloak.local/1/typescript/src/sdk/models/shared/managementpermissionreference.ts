import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ManagementPermissionReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=resource" })
  resource?: string;

  @Metadata({ data: "json, name=scopePermissions" })
  scopePermissions?: Map<string, any>;
}
