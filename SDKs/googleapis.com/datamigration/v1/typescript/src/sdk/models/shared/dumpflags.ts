import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DumpFlag } from "./dumpflag";


// DumpFlags
/** 
 * Dump flags definition.
**/
export class DumpFlags extends SpeakeasyBase {
  @Metadata({ data: "json, name=dumpFlags", elemType: shared.DumpFlag })
  dumpFlags?: DumpFlag[];
}
