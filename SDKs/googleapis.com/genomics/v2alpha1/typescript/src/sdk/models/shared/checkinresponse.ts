import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CheckInResponse
/** 
 * The response to the CheckIn method.
**/
export class CheckInResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deadline" })
  deadline?: string;

  @Metadata({ data: "json, name=features" })
  features?: Map<string, any>;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;
}
