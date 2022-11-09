import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ServiceBinding
/** 
 * ServiceBinding is the resource that defines a Service Directory Service to be used in a BackendService resource.
**/
export class ServiceBinding extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=service" })
  service?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
