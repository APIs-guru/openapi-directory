import { SpeakeasyBase } from "../../../internal/utils";
import { Execution } from "./execution";
export declare class ListExecutionsResponse extends SpeakeasyBase {
    executions?: Execution[];
    nextPageToken?: string;
}
