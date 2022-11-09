import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaNextTask
/** 
 * The task that is next in line to be executed, if the condition specified evaluated to true.
**/
export class GoogleCloudIntegrationsV1alphaNextTask extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=taskConfigId" })
  taskConfigId?: string;

  @Metadata({ data: "json, name=taskId" })
  taskId?: string;
}
