import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifies location of where either Envoy runs or where upstream hosts run.
**/
export declare class Locality extends SpeakeasyBase {
    region?: string;
    subZone?: string;
    zone?: string;
}
