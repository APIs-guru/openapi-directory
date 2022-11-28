import { SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
/**
 * A list of labels.
**/
export declare class LabelList extends SpeakeasyBase {
    kind?: string;
    labels?: Label[];
    nextPageToken?: string;
}
