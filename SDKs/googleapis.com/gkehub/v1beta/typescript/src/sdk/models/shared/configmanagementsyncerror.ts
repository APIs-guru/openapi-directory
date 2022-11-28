import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigManagementErrorResource } from "./configmanagementerrorresource";



// ConfigManagementSyncError
/** 
 * An ACM created error representing a problem syncing configurations
**/
export class ConfigManagementSyncError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=errorResources", elemType: ConfigManagementErrorResource })
  errorResources?: ConfigManagementErrorResource[];
}
