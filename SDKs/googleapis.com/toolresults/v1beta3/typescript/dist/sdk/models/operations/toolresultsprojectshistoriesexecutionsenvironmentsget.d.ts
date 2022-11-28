import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesExecutionsEnvironmentsGetPathParams extends SpeakeasyBase {
    environmentId: string;
    executionId: string;
    historyId: string;
    projectId: string;
}
export declare class ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesExecutionsEnvironmentsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesExecutionsEnvironmentsGetRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesExecutionsEnvironmentsGetPathParams;
    queryParams: ToolresultsProjectsHistoriesExecutionsEnvironmentsGetQueryParams;
    security: ToolresultsProjectsHistoriesExecutionsEnvironmentsGetSecurity;
}
export declare class ToolresultsProjectsHistoriesExecutionsEnvironmentsGetResponse extends SpeakeasyBase {
    contentType: string;
    environment?: shared.Environment;
    statusCode: number;
}
