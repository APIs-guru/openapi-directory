import { SpeakeasyBase } from "../../../internal/utils";
import { BuildTrigger } from "./buildtrigger";
/**
 * Response containing existing `BuildTriggers`.
**/
export declare class ListBuildTriggersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    triggers?: BuildTrigger[];
}
