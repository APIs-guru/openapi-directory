import { SpeakeasyBase } from "../../../internal/utils";
import { StreamLocation } from "./streamlocation";
import { KeyRangeLocation } from "./keyrangelocation";
import { StateFamilyConfig } from "./statefamilyconfig";
/**
 * All configuration data for a particular Computation.
**/
export declare class ComputationTopology extends SpeakeasyBase {
    computationId?: string;
    inputs?: StreamLocation[];
    keyRanges?: KeyRangeLocation[];
    outputs?: StreamLocation[];
    stateFamilies?: StateFamilyConfig[];
    systemStageName?: string;
}
