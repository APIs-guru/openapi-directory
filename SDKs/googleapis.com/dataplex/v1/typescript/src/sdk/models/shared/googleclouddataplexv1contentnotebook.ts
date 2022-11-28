import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudDataplexV1ContentNotebookKernelTypeEnum {
    KernelTypeUnspecified = "KERNEL_TYPE_UNSPECIFIED",
    Python3 = "PYTHON3"
}


// GoogleCloudDataplexV1ContentNotebook
/** 
 * Configuration for Notebook content.
**/
export class GoogleCloudDataplexV1ContentNotebook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kernelType" })
  kernelType?: GoogleCloudDataplexV1ContentNotebookKernelTypeEnum;
}
