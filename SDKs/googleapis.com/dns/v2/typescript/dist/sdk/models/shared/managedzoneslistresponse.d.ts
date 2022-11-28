import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeader } from "./responseheader";
import { ManagedZone } from "./managedzone";
export declare class ManagedZonesListResponse extends SpeakeasyBase {
    header?: ResponseHeader;
    kind?: string;
    managedZones?: ManagedZone[];
    nextPageToken?: string;
}
