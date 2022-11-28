import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContainerVersion } from "./containerversion";
import { SyncStatus } from "./syncstatus";



// QuickPreviewResponse
/** 
 * Response to quick previewing a workspace.
**/
export class QuickPreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compilerError" })
  compilerError?: boolean;

  @SpeakeasyMetadata({ data: "json, name=containerVersion" })
  containerVersion?: ContainerVersion;

  @SpeakeasyMetadata({ data: "json, name=syncStatus" })
  syncStatus?: SyncStatus;
}
