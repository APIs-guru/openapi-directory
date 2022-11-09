import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudServicebrokerV1alpha1ServiceInstance
/** 
 * Message describing inputs to Provision and Update Service instance requests.
**/
export class GoogleCloudServicebrokerV1alpha1ServiceInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=context" })
  context?: Map<string, any>;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deploymentName" })
  deploymentName?: string;

  @Metadata({ data: "json, name=instance_id" })
  instanceId?: string;

  @Metadata({ data: "json, name=organization_guid" })
  organizationGuid?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @Metadata({ data: "json, name=plan_id" })
  planId?: string;

  @Metadata({ data: "json, name=previous_values" })
  previousValues?: Map<string, any>;

  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;

  @Metadata({ data: "json, name=service_id" })
  serviceId?: string;

  @Metadata({ data: "json, name=space_guid" })
  spaceGuid?: string;
}
