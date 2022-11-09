import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DatapipelinesProjectsLocationsListPipelinesPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DatapipelinesProjectsLocationsListPipelinesQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatapipelinesProjectsLocationsListPipelinesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatapipelinesProjectsLocationsListPipelinesRequest extends SpeakeasyBase {
    pathParams: DatapipelinesProjectsLocationsListPipelinesPathParams;
    queryParams: DatapipelinesProjectsLocationsListPipelinesQueryParams;
    security: DatapipelinesProjectsLocationsListPipelinesSecurity;
}
export declare class DatapipelinesProjectsLocationsListPipelinesResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatapipelinesV1ListPipelinesResponse?: shared.GoogleCloudDatapipelinesV1ListPipelinesResponse;
    statusCode: number;
}
