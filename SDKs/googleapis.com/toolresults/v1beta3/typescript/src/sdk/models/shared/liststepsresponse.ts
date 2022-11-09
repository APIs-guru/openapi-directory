import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Step } from "./step";


// ListStepsResponse
/** 
 * Response message for StepService.List.
**/
export class ListStepsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=steps", elemType: shared.Step })
  steps?: Step[];
}
