import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StreamLocation } from "./streamlocation";
import { KeyRangeLocation } from "./keyrangelocation";
import { StateFamilyConfig } from "./statefamilyconfig";



// ComputationTopology
/** 
 * All configuration data for a particular Computation.
**/
export class ComputationTopology extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computationId" })
  computationId?: string;

  @SpeakeasyMetadata({ data: "json, name=inputs", elemType: StreamLocation })
  inputs?: StreamLocation[];

  @SpeakeasyMetadata({ data: "json, name=keyRanges", elemType: KeyRangeLocation })
  keyRanges?: KeyRangeLocation[];

  @SpeakeasyMetadata({ data: "json, name=outputs", elemType: StreamLocation })
  outputs?: StreamLocation[];

  @SpeakeasyMetadata({ data: "json, name=stateFamilies", elemType: StateFamilyConfig })
  stateFamilies?: StateFamilyConfig[];

  @SpeakeasyMetadata({ data: "json, name=systemStageName" })
  systemStageName?: string;
}
