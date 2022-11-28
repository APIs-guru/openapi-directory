import { SpeakeasyBase } from "../../../internal/utils";
import { DirectorySite } from "./directorysite";
/**
 * Directory Site List Response
**/
export declare class DirectorySitesListResponse extends SpeakeasyBase {
    directorySites?: DirectorySite[];
    kind?: string;
    nextPageToken?: string;
}
