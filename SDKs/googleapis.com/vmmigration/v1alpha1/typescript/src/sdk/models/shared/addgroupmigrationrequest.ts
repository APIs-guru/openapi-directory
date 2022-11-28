import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddGroupMigrationRequest
/** 
 * Request message for 'AddGroupMigration' request.
**/
export class AddGroupMigrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=migratingVm" })
  migratingVm?: string;
}
