import { SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";
/**
 * Project List Response
**/
export declare class ProjectsListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    projects?: Project[];
}
