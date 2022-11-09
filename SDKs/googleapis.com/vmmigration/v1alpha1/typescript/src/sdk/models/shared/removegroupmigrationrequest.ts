import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoveGroupMigrationRequest
/** 
 * Request message for 'RemoveMigration' request.
**/
export class RemoveGroupMigrationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=migratingVm" })
  migratingVm?: string;
}
