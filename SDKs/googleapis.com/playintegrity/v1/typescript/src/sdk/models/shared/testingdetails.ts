import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TestingDetails
/** 
 * Contains additional information generated for testing responses.
**/
export class TestingDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=isTestingResponse" })
  isTestingResponse?: boolean;
}
