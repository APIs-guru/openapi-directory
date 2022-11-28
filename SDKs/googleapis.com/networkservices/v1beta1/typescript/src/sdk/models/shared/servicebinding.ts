import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ServiceBindingInput
/** 
 * ServiceBinding is the resource that defines a Service Directory Service to be used in a BackendService resource.
**/
export class ServiceBindingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;
}


// ServiceBinding
/** 
 * ServiceBinding is the resource that defines a Service Directory Service to be used in a BackendService resource.
**/
export class ServiceBinding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=service" })
  service?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
