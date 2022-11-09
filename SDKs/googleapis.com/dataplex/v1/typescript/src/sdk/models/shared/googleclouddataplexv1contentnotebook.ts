import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDataplexV1ContentNotebookKernelTypeEnum {
    KernelTypeUnspecified = "KERNEL_TYPE_UNSPECIFIED"
,    Python3 = "PYTHON3"
}


// GoogleCloudDataplexV1ContentNotebook
/** 
 * Configuration for Notebook content.
**/
export class GoogleCloudDataplexV1ContentNotebook extends SpeakeasyBase {
  @Metadata({ data: "json, name=kernelType" })
  kernelType?: GoogleCloudDataplexV1ContentNotebookKernelTypeEnum;
}
