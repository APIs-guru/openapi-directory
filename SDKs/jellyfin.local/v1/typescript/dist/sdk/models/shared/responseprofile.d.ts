import { SpeakeasyBase } from "../../../internal/utils";
import { ProfileCondition } from "./profilecondition";
import { DlnaProfileTypeEnum } from "./dlnaprofiletypeenum";
export declare class ResponseProfile extends SpeakeasyBase {
    audioCodec?: string;
    conditions?: ProfileCondition[];
    container?: string;
    mimeType?: string;
    orgPn?: string;
    type?: DlnaProfileTypeEnum;
    videoCodec?: string;
}
