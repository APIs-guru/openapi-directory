import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudMlV1StudyConfig } from "./googlecloudmlv1studyconfig";

export enum GoogleCloudMlV1StudyStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Inactive = "INACTIVE"
,    Completed = "COMPLETED"
}


// GoogleCloudMlV1Study
/** 
 * A message representing a Study.
**/
export class GoogleCloudMlV1Study extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=inactiveReason" })
  inactiveReason?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudMlV1StudyStateEnum;

  @Metadata({ data: "json, name=studyConfig" })
  studyConfig?: GoogleCloudMlV1StudyConfig;
}
