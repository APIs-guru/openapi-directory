import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveGroupMigrationRequest
/** 
 * Request message for 'RemoveMigration' request.
**/
export class RemoveGroupMigrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=migratingVm" })
  migratingVm?: string;
}
