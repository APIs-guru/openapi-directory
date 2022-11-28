import { SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
/**
 * Response message for EnvironmentService.ListEnvironments.
**/
export declare class ListEnvironmentsResponse extends SpeakeasyBase {
    environments?: Environment[];
    executionId?: string;
    historyId?: string;
    nextPageToken?: string;
    projectId?: string;
}
