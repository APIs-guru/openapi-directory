import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudDataplexV1ContentNotebookKernelTypeEnum {
    KernelTypeUnspecified = "KERNEL_TYPE_UNSPECIFIED",
    Python3 = "PYTHON3"
}
/**
 * Configuration for Notebook content.
**/
export declare class GoogleCloudDataplexV1ContentNotebook extends SpeakeasyBase {
    kernelType?: GoogleCloudDataplexV1ContentNotebookKernelTypeEnum;
}
