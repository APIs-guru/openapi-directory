import { SpeakeasyBase } from "../../../internal/utils";
import { QueryResultEntry } from "./queryresultentry";
import { Project } from "./project";
export declare class QueryjobProjectResults extends SpeakeasyBase {
    columns?: string[];
    data?: QueryResultEntry[][];
    next?: string;
    project?: Project;
}
