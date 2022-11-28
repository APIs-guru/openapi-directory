import { SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
/**
 * Response to a ModifyLabels request. This contains only those labels which were added or updated by the request.
**/
export declare class ModifyLabelsResponse extends SpeakeasyBase {
    kind?: string;
    modifiedLabels?: Label[];
}
