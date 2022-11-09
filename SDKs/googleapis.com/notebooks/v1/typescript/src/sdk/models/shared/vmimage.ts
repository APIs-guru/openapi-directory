import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VmImage
/** 
 * Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM.
**/
export class VmImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageFamily" })
  imageFamily?: string;

  @Metadata({ data: "json, name=imageName" })
  imageName?: string;

  @Metadata({ data: "json, name=project" })
  project?: string;
}
