import { SpeakeasyBase } from "../../../internal/utils";
import { Model } from "./model";
/**
 * The response for list models
**/
export declare class ListModelsResponse extends SpeakeasyBase {
    models?: Model[];
    nextPageToken?: string;
}
