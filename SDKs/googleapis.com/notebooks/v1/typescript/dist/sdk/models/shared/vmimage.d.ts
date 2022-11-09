import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Definition of a custom Compute Engine virtual machine image for starting a notebook instance with the environment installed directly on the VM.
**/
export declare class VmImage extends SpeakeasyBase {
    imageFamily?: string;
    imageName?: string;
    project?: string;
}
