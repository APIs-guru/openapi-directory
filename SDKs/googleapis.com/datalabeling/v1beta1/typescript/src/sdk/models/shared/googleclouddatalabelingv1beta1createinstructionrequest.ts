import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatalabelingV1beta1Instruction } from "./googleclouddatalabelingv1beta1instruction";



// GoogleCloudDatalabelingV1beta1CreateInstructionRequest
/** 
 * Request message for CreateInstruction.
**/
export class GoogleCloudDatalabelingV1beta1CreateInstructionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=instruction" })
  instruction?: GoogleCloudDatalabelingV1beta1Instruction;
}
