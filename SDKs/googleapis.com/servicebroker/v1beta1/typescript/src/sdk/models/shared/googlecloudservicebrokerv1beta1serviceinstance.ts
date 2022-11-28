import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudServicebrokerV1beta1ServiceInstance
/** 
 * Message describing inputs to Provision and Update Service instance requests.
**/
export class GoogleCloudServicebrokerV1beta1ServiceInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentName" })
  deploymentName?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=instance_id" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=organization_guid" })
  organizationGuid?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=plan_id" })
  planId?: string;

  @SpeakeasyMetadata({ data: "json, name=previous_values" })
  previousValues?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @SpeakeasyMetadata({ data: "json, name=service_id" })
  serviceId?: string;

  @SpeakeasyMetadata({ data: "json, name=space_guid" })
  spaceGuid?: string;
}
