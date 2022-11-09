import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProfileConditionTypeEnum } from "./profileconditiontypeenum";
import { ProfileConditionValueEnum } from "./profileconditionvalueenum";


export class ProfileCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=Condition" })
  condition?: ProfileConditionTypeEnum;

  @Metadata({ data: "json, name=IsRequired" })
  isRequired?: boolean;

  @Metadata({ data: "json, name=Property" })
  property?: ProfileConditionValueEnum;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
