import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectInfo } from "./projectinfo";
export declare class ListAvailableProjectsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    projectInfo?: ProjectInfo[];
}
