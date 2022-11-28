import { SpeakeasyBase } from "../../../internal/utils";
import { ResponseInfo } from "./responseinfo";
export declare class MatrixResponseHints extends SpeakeasyBase {
    details?: string;
    invalidFromPoints?: number[];
    invalidToPoints?: number[];
    message?: string;
    pointPairs?: number[][];
}
export declare class MatrixResponse extends SpeakeasyBase {
    distances?: number[][];
    hints?: MatrixResponseHints[];
    info?: ResponseInfo;
    times?: number[][];
    weights?: number[][];
}
