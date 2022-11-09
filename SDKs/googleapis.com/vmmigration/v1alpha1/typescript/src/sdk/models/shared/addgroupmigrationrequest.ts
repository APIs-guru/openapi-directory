import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddGroupMigrationRequest
/** 
 * Request message for 'AddGroupMigration' request.
**/
export class AddGroupMigrationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=migratingVm" })
  migratingVm?: string;
}
