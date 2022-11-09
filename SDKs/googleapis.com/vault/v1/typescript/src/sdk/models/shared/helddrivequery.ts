import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HeldDriveQuery
/** 
 * Options for Drive holds.
**/
export class HeldDriveQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeSharedDriveFiles" })
  includeSharedDriveFiles?: boolean;

  @Metadata({ data: "json, name=includeTeamDriveFiles" })
  includeTeamDriveFiles?: boolean;
}
