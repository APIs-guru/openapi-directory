import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1CsvInstruction
/** 
 * Deprecated: this instruction format is not supported any more. Instruction from a CSV file.
**/
export class GoogleCloudDatalabelingV1beta1CsvInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsFileUri" })
  gcsFileUri?: string;
}
