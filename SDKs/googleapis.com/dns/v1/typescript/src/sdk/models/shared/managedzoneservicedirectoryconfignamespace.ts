import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ManagedZoneServiceDirectoryConfigNamespace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deletionTime" })
  deletionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=namespaceUrl" })
  namespaceUrl?: string;
}
