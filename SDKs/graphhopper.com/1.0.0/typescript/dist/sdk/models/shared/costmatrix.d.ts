import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Additional information for your request
**/
export declare class CostMatrixDataInfo extends SpeakeasyBase {
    copyrights?: string[];
    took?: number;
}
/**
 * JSON data of matrix response
**/
export declare class CostMatrixData extends SpeakeasyBase {
    distances?: number[][];
    info?: CostMatrixDataInfo;
    times?: number[][];
}
export declare enum CostMatrixTypeEnum {
    Default = "default",
    Google = "google"
}
export declare class CostMatrix extends SpeakeasyBase {
    data?: CostMatrixData;
    locationIds?: string[];
    profile?: string;
    type?: CostMatrixTypeEnum;
}
