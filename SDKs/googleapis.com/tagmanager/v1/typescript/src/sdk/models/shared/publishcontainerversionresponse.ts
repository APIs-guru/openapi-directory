import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerVersion } from "./containerversion";



// PublishContainerVersionResponse
/** 
 * Publish container version response.
**/
export class PublishContainerVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compilerError" })
  compilerError?: boolean;

  @SpeakeasyMetadata({ data: "json, name=containerVersion" })
  containerVersion?: ContainerVersion;
}
