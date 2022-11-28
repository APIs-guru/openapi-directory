import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerVersion } from "./containerversion";



// CreateContainerVersionResponse
/** 
 * Create container versions response.
**/
export class CreateContainerVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compilerError" })
  compilerError?: boolean;

  @SpeakeasyMetadata({ data: "json, name=containerVersion" })
  containerVersion?: ContainerVersion;
}
