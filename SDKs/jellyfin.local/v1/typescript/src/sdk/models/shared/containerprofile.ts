import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProfileCondition } from "./profilecondition";
import { DlnaProfileTypeEnum } from "./dlnaprofiletypeenum";


export class ContainerProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=Conditions", elemType: shared.ProfileCondition })
  conditions?: ProfileCondition[];

  @Metadata({ data: "json, name=Container" })
  container?: string;

  @Metadata({ data: "json, name=Type" })
  type?: DlnaProfileTypeEnum;
}
