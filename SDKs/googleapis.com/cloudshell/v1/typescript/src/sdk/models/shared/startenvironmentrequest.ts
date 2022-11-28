import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartEnvironmentRequest
/** 
 * Request message for StartEnvironment.
**/
export class StartEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=publicKeys" })
  publicKeys?: string[];
}
