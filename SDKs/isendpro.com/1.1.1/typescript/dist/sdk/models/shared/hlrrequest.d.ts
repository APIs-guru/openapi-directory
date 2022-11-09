import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum HlRrequestGetHlrEnum {
    One = "1"
}
export declare class HlRrequest extends SpeakeasyBase {
    getHlr: HlRrequestGetHlrEnum;
    keyid: string;
    num: string[];
}
