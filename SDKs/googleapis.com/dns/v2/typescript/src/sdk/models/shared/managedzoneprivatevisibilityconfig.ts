import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ManagedZonePrivateVisibilityConfigGkeCluster } from "./managedzoneprivatevisibilityconfiggkecluster";
import { ManagedZonePrivateVisibilityConfigNetwork } from "./managedzoneprivatevisibilityconfignetwork";



export class ManagedZonePrivateVisibilityConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gkeClusters", elemType: ManagedZonePrivateVisibilityConfigGkeCluster })
  gkeClusters?: ManagedZonePrivateVisibilityConfigGkeCluster[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=networks", elemType: ManagedZonePrivateVisibilityConfigNetwork })
  networks?: ManagedZonePrivateVisibilityConfigNetwork[];
}
