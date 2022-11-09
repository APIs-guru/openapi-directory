import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DumpFlag
/** 
 * Dump flag definition.
**/
export class DumpFlag extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
