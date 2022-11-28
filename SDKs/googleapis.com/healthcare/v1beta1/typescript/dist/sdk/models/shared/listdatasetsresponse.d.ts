import { SpeakeasyBase } from "../../../internal/utils";
import { Dataset } from "./dataset";
/**
 * Lists the available datasets.
**/
export declare class ListDatasetsResponse extends SpeakeasyBase {
    datasets?: Dataset[];
    nextPageToken?: string;
}
