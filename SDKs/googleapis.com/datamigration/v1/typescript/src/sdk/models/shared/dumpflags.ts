import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DumpFlag } from "./dumpflag";



// DumpFlags
/** 
 * Dump flags definition.
**/
export class DumpFlags extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dumpFlags", elemType: DumpFlag })
  dumpFlags?: DumpFlag[];
}
