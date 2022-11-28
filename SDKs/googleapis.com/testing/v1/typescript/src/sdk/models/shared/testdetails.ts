import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestDetails
/** 
 * Additional details about the progress of the running test.
**/
export class TestDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=progressMessages" })
  progressMessages?: string[];
}
