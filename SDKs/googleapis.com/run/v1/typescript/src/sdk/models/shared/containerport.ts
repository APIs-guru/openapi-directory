import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContainerPort
/** 
 * ContainerPort represents a network port in a single container.
**/
export class ContainerPort extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containerPort" })
  containerPort?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;
}
