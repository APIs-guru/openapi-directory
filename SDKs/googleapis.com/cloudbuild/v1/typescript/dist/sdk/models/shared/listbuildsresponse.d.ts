import { SpeakeasyBase } from "../../../internal/utils";
import { Build } from "./build";
/**
 * Response including listed builds.
**/
export declare class ListBuildsResponse extends SpeakeasyBase {
    builds?: Build[];
    nextPageToken?: string;
}
