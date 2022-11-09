import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerVersion } from "./containerversion";


// CreateContainerVersionResponse
/** 
 * Create container versions response.
**/
export class CreateContainerVersionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=compilerError" })
  compilerError?: boolean;

  @Metadata({ data: "json, name=containerVersion" })
  containerVersion?: ContainerVersion;
}
