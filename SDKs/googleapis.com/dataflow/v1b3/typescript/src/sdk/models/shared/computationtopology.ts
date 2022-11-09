import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StreamLocation } from "./streamlocation";
import { KeyRangeLocation } from "./keyrangelocation";
import { StreamLocation } from "./streamlocation";
import { StateFamilyConfig } from "./statefamilyconfig";


// ComputationTopology
/** 
 * All configuration data for a particular Computation.
**/
export class ComputationTopology extends SpeakeasyBase {
  @Metadata({ data: "json, name=computationId" })
  computationId?: string;

  @Metadata({ data: "json, name=inputs", elemType: shared.StreamLocation })
  inputs?: StreamLocation[];

  @Metadata({ data: "json, name=keyRanges", elemType: shared.KeyRangeLocation })
  keyRanges?: KeyRangeLocation[];

  @Metadata({ data: "json, name=outputs", elemType: shared.StreamLocation })
  outputs?: StreamLocation[];

  @Metadata({ data: "json, name=stateFamilies", elemType: shared.StateFamilyConfig })
  stateFamilies?: StateFamilyConfig[];

  @Metadata({ data: "json, name=systemStageName" })
  systemStageName?: string;
}
