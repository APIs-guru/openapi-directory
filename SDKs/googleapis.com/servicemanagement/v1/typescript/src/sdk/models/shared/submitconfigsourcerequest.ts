import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigSource } from "./configsource";


// SubmitConfigSourceRequest
/** 
 * Request message for SubmitConfigSource method.
**/
export class SubmitConfigSourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=configSource" })
  configSource?: ConfigSource;

  @Metadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
