import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerVersion } from "./containerversion";
import { SyncStatus } from "./syncstatus";



// CreateContainerVersionResponse
/** 
 * Create container versions response.
**/
export class CreateContainerVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compilerError" })
  compilerError?: boolean;

  @SpeakeasyMetadata({ data: "json, name=containerVersion" })
  containerVersion?: ContainerVersion;

  @SpeakeasyMetadata({ data: "json, name=newWorkspacePath" })
  newWorkspacePath?: string;

  @SpeakeasyMetadata({ data: "json, name=syncStatus" })
  syncStatus?: SyncStatus;
}
