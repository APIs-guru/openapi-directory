import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaNextTask
/** 
 * The task that is next in line to be executed, if the condition specified evaluated to true.
**/
export class GoogleCloudIntegrationsV1alphaNextTask extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=taskConfigId" })
  taskConfigId?: string;

  @SpeakeasyMetadata({ data: "json, name=taskId" })
  taskId?: string;
}
