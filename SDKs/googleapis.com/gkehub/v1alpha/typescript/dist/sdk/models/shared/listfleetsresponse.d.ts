import { SpeakeasyBase } from "../../../internal/utils";
import { Fleet } from "./fleet";
/**
 * Response message for the `GkeHub.ListFleetsResponse` method.
**/
export declare class ListFleetsResponse extends SpeakeasyBase {
    fleets?: Fleet[];
    nextPageToken?: string;
}
