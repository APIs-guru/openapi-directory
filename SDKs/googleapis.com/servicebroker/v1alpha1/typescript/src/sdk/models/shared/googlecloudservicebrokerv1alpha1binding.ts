import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudServicebrokerV1alpha1Binding
/** 
 * Describes the binding.
**/
export class GoogleCloudServicebrokerV1alpha1Binding extends SpeakeasyBase {
  @Metadata({ data: "json, name=bind_resource" })
  bindResource?: Map<string, any>;

  @Metadata({ data: "json, name=binding_id" })
  bindingId?: string;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @Metadata({ data: "json, name=plan_id" })
  planId?: string;

  @Metadata({ data: "json, name=service_id" })
  serviceId?: string;
}
