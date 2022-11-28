import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1TaskInfrastructureSpec } from "./googleclouddataplexv1taskinfrastructurespec";
/**
 * Config for running scheduled notebooks.
**/
export declare class GoogleCloudDataplexV1TaskNotebookTaskConfig extends SpeakeasyBase {
    archiveUris?: string[];
    fileUris?: string[];
    infrastructureSpec?: GoogleCloudDataplexV1TaskInfrastructureSpec;
    notebook?: string;
}
