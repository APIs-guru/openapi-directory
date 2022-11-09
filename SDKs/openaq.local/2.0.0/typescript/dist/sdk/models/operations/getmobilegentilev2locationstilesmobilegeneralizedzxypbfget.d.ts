import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams extends SpeakeasyBase {
    x: number;
    y: number;
    z: number;
}
export declare class GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams extends SpeakeasyBase {
    isAnalysis?: boolean;
    isMobile?: boolean;
    lastUpdatedFrom?: any;
    lastUpdatedTo?: any;
    location?: number[];
    parameter?: any;
    project?: number;
}
export declare class GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest extends SpeakeasyBase {
    pathParams: GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetPathParams;
    queryParams: GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetQueryParams;
}
export declare class GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse extends SpeakeasyBase {
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
