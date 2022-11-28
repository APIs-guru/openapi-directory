import { SpeakeasyBase } from "../../../internal/utils";
import { ProfileConditionTypeEnum } from "./profileconditiontypeenum";
import { ProfileConditionValueEnum } from "./profileconditionvalueenum";
export declare class ProfileCondition extends SpeakeasyBase {
    condition?: ProfileConditionTypeEnum;
    isRequired?: boolean;
    property?: ProfileConditionValueEnum;
    value?: string;
}
