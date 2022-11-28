import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ManagementPermissionReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;

  @SpeakeasyMetadata({ data: "json, name=scopePermissions" })
  scopePermissions?: Map<string, any>;
}
