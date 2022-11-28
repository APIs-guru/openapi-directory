import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ContainerImage
/** 
 * Definition of a container image for starting a notebook instance with the environment installed in a container.
**/
export class ContainerImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=repository" })
  repository?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
