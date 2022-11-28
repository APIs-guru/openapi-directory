import { SpeakeasyBase } from "../../../internal/utils";
import { Election } from "./election";
/**
 * The list of elections available for this version of the API.
**/
export declare class ElectionsQueryResponse extends SpeakeasyBase {
    elections?: Election[];
    kind?: string;
}
