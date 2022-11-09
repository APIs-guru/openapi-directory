import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams extends SpeakeasyBase {
    x: number;
    y: number;
    z: number;
}
export declare class GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams extends SpeakeasyBase {
    dateFrom: any;
    dateTo: any;
    isAnalysis?: boolean;
    isMobile?: boolean;
    lastUpdatedFrom?: any;
    lastUpdatedTo?: any;
    location?: number[];
    parameter?: any;
    project?: number;
}
export declare class GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest extends SpeakeasyBase {
    pathParams: GetMobiletileV2LocationsTilesMobileZXYPbfGetPathParams;
    queryParams: GetMobiletileV2LocationsTilesMobileZXYPbfGetQueryParams;
}
export declare class GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
