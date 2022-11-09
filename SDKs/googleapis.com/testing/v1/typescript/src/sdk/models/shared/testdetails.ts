import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestDetails
/** 
 * Additional details about the progress of the running test.
**/
export class TestDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=progressMessages" })
  progressMessages?: string[];
}
