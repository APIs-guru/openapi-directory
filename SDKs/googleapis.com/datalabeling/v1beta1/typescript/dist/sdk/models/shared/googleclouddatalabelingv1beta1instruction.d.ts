import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1CsvInstruction } from "./googleclouddatalabelingv1beta1csvinstruction";
import { GoogleCloudDatalabelingV1beta1PdfInstruction } from "./googleclouddatalabelingv1beta1pdfinstruction";
export declare enum GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED",
    Image = "IMAGE",
    Video = "VIDEO",
    Text = "TEXT",
    GeneralData = "GENERAL_DATA"
}
/**
 * Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported.
**/
export declare class GoogleCloudDatalabelingV1beta1Instruction extends SpeakeasyBase {
    blockingResources?: string[];
    createTime?: string;
    csvInstruction?: GoogleCloudDatalabelingV1beta1CsvInstruction;
    dataType?: GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum;
    description?: string;
    displayName?: string;
    name?: string;
    pdfInstruction?: GoogleCloudDatalabelingV1beta1PdfInstruction;
    updateTime?: string;
}
