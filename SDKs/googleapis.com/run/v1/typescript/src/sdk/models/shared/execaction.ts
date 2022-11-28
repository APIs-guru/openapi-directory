import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExecAction
/** 
 * Not supported by Cloud Run. ExecAction describes a "run in container" action.
**/
export class ExecAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=command" })
  command?: string[];
}
