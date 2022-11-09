import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ManagedZonePrivateVisibilityConfigGkeCluster } from "./managedzoneprivatevisibilityconfiggkecluster";
import { ManagedZonePrivateVisibilityConfigNetwork } from "./managedzoneprivatevisibilityconfignetwork";


export class ManagedZonePrivateVisibilityConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gkeClusters", elemType: shared.ManagedZonePrivateVisibilityConfigGkeCluster })
  gkeClusters?: ManagedZonePrivateVisibilityConfigGkeCluster[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=networks", elemType: shared.ManagedZonePrivateVisibilityConfigNetwork })
  networks?: ManagedZonePrivateVisibilityConfigNetwork[];
}
