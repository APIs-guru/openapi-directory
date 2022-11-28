import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1StudyConfig } from "./googlecloudmlv1studyconfig";


export enum GoogleCloudMlV1StudyStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Completed = "COMPLETED"
}


// GoogleCloudMlV1StudyInput
/** 
 * A message representing a Study.
**/
export class GoogleCloudMlV1StudyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=studyConfig" })
  studyConfig?: GoogleCloudMlV1StudyConfig;
}


// GoogleCloudMlV1Study
/** 
 * A message representing a Study.
**/
export class GoogleCloudMlV1Study extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=inactiveReason" })
  inactiveReason?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudMlV1StudyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=studyConfig" })
  studyConfig?: GoogleCloudMlV1StudyConfig;
}
