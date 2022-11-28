import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";



// SideInputInfo
/** 
 * Information about a side input of a DoFn or an input of a SeqDoFn.
**/
export class SideInputInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sources", elemType: Source })
  sources?: Source[];

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
