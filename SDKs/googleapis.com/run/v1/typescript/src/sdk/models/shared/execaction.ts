import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExecAction
/** 
 * Not supported by Cloud Run. ExecAction describes a "run in container" action.
**/
export class ExecAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=command" })
  command?: string[];
}
