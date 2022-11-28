import { SpeakeasyBase } from "../../../internal/utils";
import { Project } from "./project";
export declare enum QueryjobResultsOverviewEntryStatusEnum {
    Success = "success",
    Error = "error"
}
export declare class QueryjobResultsOverviewEntry extends SpeakeasyBase {
    error?: string;
    external?: number;
    internal?: number;
    project?: Project;
    status?: QueryjobResultsOverviewEntryStatusEnum;
    total?: number;
}
