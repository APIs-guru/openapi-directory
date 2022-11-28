import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsPathParams extends SpeakeasyBase {
    baseVersion: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsPathParams;
    queryParams: DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3beta1CompareVersionsRequest;
    security: DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsSecurity;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsCompareVersionsResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3beta1CompareVersionsResponse?: shared.GoogleCloudDialogflowCxV3beta1CompareVersionsResponse;
    statusCode: number;
}
