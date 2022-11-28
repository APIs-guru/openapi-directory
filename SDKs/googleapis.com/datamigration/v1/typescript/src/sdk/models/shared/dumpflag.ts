import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DumpFlag
/** 
 * Dump flag definition.
**/
export class DumpFlag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
