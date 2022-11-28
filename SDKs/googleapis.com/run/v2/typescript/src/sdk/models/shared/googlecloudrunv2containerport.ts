import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRunV2ContainerPort
/** 
 * ContainerPort represents a network port in a single container.
**/
export class GoogleCloudRunV2ContainerPort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerPort" })
  containerPort?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
