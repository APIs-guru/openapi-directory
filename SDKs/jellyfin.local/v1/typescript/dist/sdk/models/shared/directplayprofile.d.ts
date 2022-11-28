import { SpeakeasyBase } from "../../../internal/utils";
import { DlnaProfileTypeEnum } from "./dlnaprofiletypeenum";
export declare class DirectPlayProfile extends SpeakeasyBase {
    audioCodec?: string;
    container?: string;
    type?: DlnaProfileTypeEnum;
    videoCodec?: string;
}
