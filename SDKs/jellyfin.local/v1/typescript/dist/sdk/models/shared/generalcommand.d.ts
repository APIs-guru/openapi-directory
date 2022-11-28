import { SpeakeasyBase } from "../../../internal/utils";
import { GeneralCommandTypeEnum } from "./generalcommandtypeenum";
export declare class GeneralCommand extends SpeakeasyBase {
    arguments?: Map<string, string>;
    controllingUserId?: string;
    name?: GeneralCommandTypeEnum;
}
