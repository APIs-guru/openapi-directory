import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfileConditionTypeEnum } from "./profileconditiontypeenum";
import { ProfileConditionValueEnum } from "./profileconditionvalueenum";



export class ProfileCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Condition" })
  condition?: ProfileConditionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=IsRequired" })
  isRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Property" })
  property?: ProfileConditionValueEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
