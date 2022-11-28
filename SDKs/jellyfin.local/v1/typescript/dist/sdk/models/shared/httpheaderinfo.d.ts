import { SpeakeasyBase } from "../../../internal/utils";
import { HeaderMatchTypeEnum } from "./headermatchtypeenum";
export declare class HttpHeaderInfo extends SpeakeasyBase {
    match?: HeaderMatchTypeEnum;
    name?: string;
    value?: string;
}
