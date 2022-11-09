import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConfigManagementErrorResource } from "./configmanagementerrorresource";


// ConfigManagementSyncError
/** 
 * An ACM created error representing a problem syncing configurations
**/
export class ConfigManagementSyncError extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=errorResources", elemType: shared.ConfigManagementErrorResource })
  errorResources?: ConfigManagementErrorResource[];
}
