import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CheckInResponse
/** 
 * The response to the CheckIn method.
**/
export class CheckInResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deadline" })
  deadline?: string;

  @SpeakeasyMetadata({ data: "json, name=features" })
  features?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;
}
