import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ManagedZonePrivateVisibilityConfigGkeCluster extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gkeClusterName" })
  gkeClusterName?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
