import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DynamicGroupStatusStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED"
,    UpToDate = "UP_TO_DATE"
,    UpdatingMemberships = "UPDATING_MEMBERSHIPS"
,    InvalidQuery = "INVALID_QUERY"
}


// DynamicGroupStatus
/** 
 * The current status of a dynamic group along with timestamp.
**/
export class DynamicGroupStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: DynamicGroupStatusStatusEnum;

  @Metadata({ data: "json, name=statusTime" })
  statusTime?: string;
}
