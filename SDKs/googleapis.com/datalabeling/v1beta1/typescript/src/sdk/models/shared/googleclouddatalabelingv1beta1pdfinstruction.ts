import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1PdfInstruction
/** 
 * Instruction from a PDF file.
**/
export class GoogleCloudDatalabelingV1beta1PdfInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsFileUri" })
  gcsFileUri?: string;
}
