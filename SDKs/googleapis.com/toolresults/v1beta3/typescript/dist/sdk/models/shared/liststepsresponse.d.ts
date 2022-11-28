import { SpeakeasyBase } from "../../../internal/utils";
import { Step } from "./step";
/**
 * Response message for StepService.List.
**/
export declare class ListStepsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    steps?: Step[];
}
