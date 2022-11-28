import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetAnalyzeMovePathParams extends SpeakeasyBase {
    resource: string;
}
export declare enum CloudassetAnalyzeMoveViewEnum {
    AnalysisViewUnspecified = "ANALYSIS_VIEW_UNSPECIFIED",
    Full = "FULL",
    Basic = "BASIC"
}
export declare class CloudassetAnalyzeMoveQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    destinationParent?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: CloudassetAnalyzeMoveViewEnum;
}
export declare class CloudassetAnalyzeMoveSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetAnalyzeMoveRequest extends SpeakeasyBase {
    pathParams: CloudassetAnalyzeMovePathParams;
    queryParams: CloudassetAnalyzeMoveQueryParams;
    security: CloudassetAnalyzeMoveSecurity;
}
export declare class CloudassetAnalyzeMoveResponse extends SpeakeasyBase {
    analyzeMoveResponse?: shared.AnalyzeMoveResponse;
    contentType: string;
    statusCode: number;
}
