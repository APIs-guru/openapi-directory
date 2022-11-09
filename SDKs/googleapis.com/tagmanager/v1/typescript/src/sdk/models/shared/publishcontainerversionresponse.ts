import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerVersion } from "./containerversion";


// PublishContainerVersionResponse
/** 
 * Publish container version response.
**/
export class PublishContainerVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=compilerError" })
  compilerError?: boolean;

  @Metadata({ data: "json, name=containerVersion" })
  containerVersion?: ContainerVersion;
}
