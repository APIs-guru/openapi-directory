import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1TaskInfrastructureSpec } from "./googleclouddataplexv1taskinfrastructurespec";



// GoogleCloudDataplexV1TaskNotebookTaskConfig
/** 
 * Config for running scheduled notebooks.
**/
export class GoogleCloudDataplexV1TaskNotebookTaskConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archiveUris" })
  archiveUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=fileUris" })
  fileUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=infrastructureSpec" })
  infrastructureSpec?: GoogleCloudDataplexV1TaskInfrastructureSpec;

  @SpeakeasyMetadata({ data: "json, name=notebook" })
  notebook?: string;
}
