import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContainerVersion } from "./containerversion";
import { SyncStatus } from "./syncstatus";


// QuickPreviewResponse
/** 
 * Response to quick previewing a workspace.
**/
export class QuickPreviewResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=compilerError" })
  compilerError?: boolean;

  @Metadata({ data: "json, name=containerVersion" })
  containerVersion?: ContainerVersion;

  @Metadata({ data: "json, name=syncStatus" })
  syncStatus?: SyncStatus;
}
