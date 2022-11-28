import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IFrameActionBodyTypeEnum {
    Iframe = "IFRAME"
}
export declare class IFrameActionBody extends SpeakeasyBase {
    height: number;
    label?: string;
    propertyNamesIncluded: string[];
    type: IFrameActionBodyTypeEnum;
    url: string;
    width: number;
}
