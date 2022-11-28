import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HeldDriveQuery
/** 
 * Options for Drive holds.
**/
export class HeldDriveQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeSharedDriveFiles" })
  includeSharedDriveFiles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeTeamDriveFiles" })
  includeTeamDriveFiles?: boolean;
}
