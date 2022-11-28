import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTileV2LocationsTilesZXYPbfGetPathParams extends SpeakeasyBase {
    x: number;
    y: number;
    z: number;
}
export declare class GetTileV2LocationsTilesZXYPbfGetQueryParams extends SpeakeasyBase {
    isAnalysis?: boolean;
    isMobile?: boolean;
    lastUpdatedFrom?: any;
    lastUpdatedTo?: any;
    location?: number[];
    parameter?: any;
    project?: number;
}
export declare class GetTileV2LocationsTilesZXYPbfGetRequest extends SpeakeasyBase {
    pathParams: GetTileV2LocationsTilesZXYPbfGetPathParams;
    queryParams: GetTileV2LocationsTilesZXYPbfGetQueryParams;
}
export declare class GetTileV2LocationsTilesZXYPbfGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
