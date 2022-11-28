import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMatrixCurbsideEnum {
    Any = "any",
    Right = "right",
    Left = "left"
}
export declare enum GetMatrixFromCurbsideEnum {
    Any = "any",
    Right = "right",
    Left = "left"
}
export declare enum GetMatrixToCurbsideEnum {
    Any = "any",
    Right = "right",
    Left = "left"
}
export declare class GetMatrixQueryParams extends SpeakeasyBase {
    curbside?: GetMatrixCurbsideEnum[];
    failFast?: boolean;
    fromCurbside?: GetMatrixFromCurbsideEnum[];
    fromPoint?: string[];
    fromPointHint?: string[];
    outArray?: string[];
    point?: string[];
    pointHint?: string[];
    snapPrevention?: string[];
    toCurbside?: GetMatrixToCurbsideEnum[];
    toPoint?: string[];
    toPointHint?: string[];
    turnCosts?: boolean;
    vehicle?: shared.VehicleProfileIdEnum;
}
export declare class GetMatrixRequest extends SpeakeasyBase {
    queryParams: GetMatrixQueryParams;
}
export declare class GetMatrixResponse extends SpeakeasyBase {
    contentType: string;
    ghError?: shared.GhError;
    headers: Map<string, string[]>;
    matrixResponse?: shared.MatrixResponse;
    statusCode: number;
}
