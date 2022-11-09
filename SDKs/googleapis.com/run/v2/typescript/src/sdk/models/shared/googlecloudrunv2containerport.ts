import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRunV2ContainerPort
/** 
 * ContainerPort represents a network port in a single container.
**/
export class GoogleCloudRunV2ContainerPort extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerPort" })
  containerPort?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
