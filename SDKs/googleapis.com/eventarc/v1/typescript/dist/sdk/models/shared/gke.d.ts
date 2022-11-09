import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Represents a GKE destination.
**/
export declare class Gke extends SpeakeasyBase {
    cluster?: string;
    location?: string;
    namespace?: string;
    path?: string;
    service?: string;
}
