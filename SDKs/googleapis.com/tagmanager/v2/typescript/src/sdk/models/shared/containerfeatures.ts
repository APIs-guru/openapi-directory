import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContainerFeatures extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=supportBuiltInVariables" })
  supportBuiltInVariables?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportClients" })
  supportClients?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportEnvironments" })
  supportEnvironments?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportFolders" })
  supportFolders?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportGtagConfigs" })
  supportGtagConfigs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportTags" })
  supportTags?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportTemplates" })
  supportTemplates?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportTriggers" })
  supportTriggers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportUserPermissions" })
  supportUserPermissions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportVariables" })
  supportVariables?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportVersions" })
  supportVersions?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportWorkspaces" })
  supportWorkspaces?: boolean;

  @SpeakeasyMetadata({ data: "json, name=supportZones" })
  supportZones?: boolean;
}
