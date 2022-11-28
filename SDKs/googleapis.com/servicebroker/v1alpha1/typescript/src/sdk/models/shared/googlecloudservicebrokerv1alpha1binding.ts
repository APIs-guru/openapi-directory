import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudServicebrokerV1alpha1Binding
/** 
 * Describes the binding.
**/
export class GoogleCloudServicebrokerV1alpha1Binding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bind_resource" })
  bindResource?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=binding_id" })
  bindingId?: string;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=plan_id" })
  planId?: string;

  @SpeakeasyMetadata({ data: "json, name=service_id" })
  serviceId?: string;
}
