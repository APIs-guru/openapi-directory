import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ToolresultsProjectsHistoriesGetPathParams extends SpeakeasyBase {
    historyId: string;
    projectId: string;
}
export declare class ToolresultsProjectsHistoriesGetQueryParams extends SpeakeasyBase {
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
export declare class ToolresultsProjectsHistoriesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ToolresultsProjectsHistoriesGetRequest extends SpeakeasyBase {
    pathParams: ToolresultsProjectsHistoriesGetPathParams;
    queryParams: ToolresultsProjectsHistoriesGetQueryParams;
    security: ToolresultsProjectsHistoriesGetSecurity;
}
export declare class ToolresultsProjectsHistoriesGetResponse extends SpeakeasyBase {
    contentType: string;
    history?: shared.History;
    statusCode: number;
}
