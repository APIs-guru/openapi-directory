import { SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";
/**
 * A list of labels.
**/
export declare class LabelList extends SpeakeasyBase {
    items?: Label[];
    kind?: string;
    nextPageToken?: string;
}
