import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1CsvInstruction } from "./googleclouddatalabelingv1beta1csvinstruction";
import { GoogleCloudDatalabelingV1beta1PdfInstruction } from "./googleclouddatalabelingv1beta1pdfinstruction";


export enum GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum {
    DataTypeUnspecified = "DATA_TYPE_UNSPECIFIED",
    Image = "IMAGE",
    Video = "VIDEO",
    Text = "TEXT",
    GeneralData = "GENERAL_DATA"
}


// GoogleCloudDatalabelingV1beta1Instruction
/** 
 * Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported.
**/
export class GoogleCloudDatalabelingV1beta1Instruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=blockingResources" })
  blockingResources?: string[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=csvInstruction" })
  csvInstruction?: GoogleCloudDatalabelingV1beta1CsvInstruction;

  @SpeakeasyMetadata({ data: "json, name=dataType" })
  dataType?: GoogleCloudDatalabelingV1beta1InstructionDataTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pdfInstruction" })
  pdfInstruction?: GoogleCloudDatalabelingV1beta1PdfInstruction;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
