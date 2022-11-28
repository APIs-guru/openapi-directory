import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestingDetails
/** 
 * Contains additional information generated for testing responses.
**/
export class TestingDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isTestingResponse" })
  isTestingResponse?: boolean;
}
