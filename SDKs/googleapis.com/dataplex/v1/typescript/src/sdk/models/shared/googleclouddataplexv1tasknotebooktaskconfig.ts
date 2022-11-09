import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1TaskInfrastructureSpec } from "./googleclouddataplexv1taskinfrastructurespec";


// GoogleCloudDataplexV1TaskNotebookTaskConfig
/** 
 * Config for running scheduled notebooks.
**/
export class GoogleCloudDataplexV1TaskNotebookTaskConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=archiveUris" })
  archiveUris?: string[];

  @Metadata({ data: "json, name=fileUris" })
  fileUris?: string[];

  @Metadata({ data: "json, name=infrastructureSpec" })
  infrastructureSpec?: GoogleCloudDataplexV1TaskInfrastructureSpec;

  @Metadata({ data: "json, name=notebook" })
  notebook?: string;
}
