import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContainerImage
/** 
 * Definition of a container image for starting a notebook instance with the environment installed in a container.
**/
export class ContainerImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=repository" })
  repository?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
