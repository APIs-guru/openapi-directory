import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfileCondition } from "./profilecondition";
import { DlnaProfileTypeEnum } from "./dlnaprofiletypeenum";



export class ContainerProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Conditions", elemType: ProfileCondition })
  conditions?: ProfileCondition[];

  @SpeakeasyMetadata({ data: "json, name=Container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: DlnaProfileTypeEnum;
}
