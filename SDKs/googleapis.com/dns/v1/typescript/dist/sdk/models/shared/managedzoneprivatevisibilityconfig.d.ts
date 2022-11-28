import { SpeakeasyBase } from "../../../internal/utils";
import { ManagedZonePrivateVisibilityConfigGkeCluster } from "./managedzoneprivatevisibilityconfiggkecluster";
import { ManagedZonePrivateVisibilityConfigNetwork } from "./managedzoneprivatevisibilityconfignetwork";
export declare class ManagedZonePrivateVisibilityConfig extends SpeakeasyBase {
    gkeClusters?: ManagedZonePrivateVisibilityConfigGkeCluster[];
    kind?: string;
    networks?: ManagedZonePrivateVisibilityConfigNetwork[];
}
