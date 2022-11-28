import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OutlierResponseTypeEnum {
    Additive = "Additive",
    LevelShift = "LevelShift",
    TemporaryChange = "TemporaryChange",
    Seasonal = "Seasonal"
}
export declare class OutlierResponse extends SpeakeasyBase {
    index?: number;
    type?: OutlierResponseTypeEnum;
    value?: number;
}
