import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    locale?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersPathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersQueryParams;
    security: ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsAccessibilityClustersResponse extends SpeakeasyBase {
    contentType: string;
    listStepAccessibilityClustersResponse?: shared.ListStepAccessibilityClustersResponse;
    statusCode: number;
}
