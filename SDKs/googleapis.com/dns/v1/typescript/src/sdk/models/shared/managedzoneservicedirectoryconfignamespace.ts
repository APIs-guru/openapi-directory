import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ManagedZoneServiceDirectoryConfigNamespace extends SpeakeasyBase {
  @Metadata({ data: "json, name=deletionTime" })
  deletionTime?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=namespaceUrl" })
  namespaceUrl?: string;
}
