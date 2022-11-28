import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesPathParams extends SpeakeasyBase {
    executionId: string;
    historyId: string;
    projectId: string;
    stepId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesPathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesQueryParams;
    request?: shared.PublishXunitXmlFilesRequest;
    security: ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsStepsPublishXunitXmlFilesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    step?: shared.Step;
}
