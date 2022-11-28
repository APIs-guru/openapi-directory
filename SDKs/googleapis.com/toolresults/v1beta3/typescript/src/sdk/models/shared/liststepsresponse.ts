import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Step } from "./step";



// ListStepsResponse
/** 
 * Response message for StepService.List.
**/
export class ListStepsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=steps", elemType: Step })
  steps?: Step[];
}
