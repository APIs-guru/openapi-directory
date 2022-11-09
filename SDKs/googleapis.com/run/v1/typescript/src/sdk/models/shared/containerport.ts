import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContainerPort
/** 
 * ContainerPort represents a network port in a single container.
**/
export class ContainerPort extends SpeakeasyBase {
  @Metadata({ data: "json, name=containerPort" })
  containerPort?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;
}
