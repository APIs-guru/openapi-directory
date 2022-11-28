import { SpeakeasyBase } from "../../../internal/utils";
import { SearchApplication } from "./searchapplication";
export declare class ListSearchApplicationsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    searchApplications?: SearchApplication[];
}
