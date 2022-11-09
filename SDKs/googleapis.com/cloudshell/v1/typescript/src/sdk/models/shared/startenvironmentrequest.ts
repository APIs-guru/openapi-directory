import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartEnvironmentRequest
/** 
 * Request message for StartEnvironment.
**/
export class StartEnvironmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessToken" })
  accessToken?: string;

  @Metadata({ data: "json, name=publicKeys" })
  publicKeys?: string[];
}
