import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VmImage
/** 
 * Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM.
**/
export class VmImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageFamily" })
  imageFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=imageName" })
  imageName?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;
}
