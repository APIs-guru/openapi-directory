import { SpeakeasyBase } from "../../../internal/utils";
import { ProfileCondition } from "./profilecondition";
import { DlnaProfileTypeEnum } from "./dlnaprofiletypeenum";
export declare class ContainerProfile extends SpeakeasyBase {
    conditions?: ProfileCondition[];
    container?: string;
    type?: DlnaProfileTypeEnum;
}
