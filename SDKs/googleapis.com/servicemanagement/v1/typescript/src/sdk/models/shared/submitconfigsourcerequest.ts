import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigSource } from "./configsource";



// SubmitConfigSourceRequest
/** 
 * Request message for SubmitConfigSource method.
**/
export class SubmitConfigSourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configSource" })
  configSource?: ConfigSource;

  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
