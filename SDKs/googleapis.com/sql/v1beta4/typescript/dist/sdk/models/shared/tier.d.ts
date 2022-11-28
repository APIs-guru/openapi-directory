import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A Google Cloud SQL service tier resource.
**/
export declare class Tier extends SpeakeasyBase {
    diskQuota?: string;
    ram?: string;
    kind?: string;
    region?: string[];
    tier?: string;
}
