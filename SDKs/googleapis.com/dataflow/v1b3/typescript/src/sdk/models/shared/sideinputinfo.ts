import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Source } from "./source";


// SideInputInfo
/** 
 * Information about a side input of a DoFn or an input of a SeqDoFn.
**/
export class SideInputInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: Map<string, any>;

  @Metadata({ data: "json, name=sources", elemType: shared.Source })
  sources?: Source[];

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
