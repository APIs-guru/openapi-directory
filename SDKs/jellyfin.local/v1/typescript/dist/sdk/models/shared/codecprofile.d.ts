import { SpeakeasyBase } from "../../../internal/utils";
import { ProfileCondition } from "./profilecondition";
import { CodecTypeEnum } from "./codectypeenum";
export declare class CodecProfile extends SpeakeasyBase {
    applyConditions?: ProfileCondition[];
    codec?: string;
    conditions?: ProfileCondition[];
    container?: string;
    type?: CodecTypeEnum;
}
