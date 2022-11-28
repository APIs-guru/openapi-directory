import { SpeakeasyBase } from "../../../internal/utils";
import { AccountLabel } from "./accountlabel";
/**
 * Response message for the `ListAccountLabels` method.
**/
export declare class ListAccountLabelsResponse extends SpeakeasyBase {
    accountLabels?: AccountLabel[];
    nextPageToken?: string;
}
