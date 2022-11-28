import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsTemplatesGetPathParams extends SpeakeasyBase {
    location: string;
    projectId: string;
}
export declare enum DataflowProjectsLocationsTemplatesGetViewEnum {
    MetadataOnly = "METADATA_ONLY"
}
export declare class DataflowProjectsLocationsTemplatesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    gcsPath?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: DataflowProjectsLocationsTemplatesGetViewEnum;
}
export declare class DataflowProjectsLocationsTemplatesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsTemplatesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsTemplatesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsTemplatesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsTemplatesGetSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsTemplatesGetSecurityOption1;
    option2?: DataflowProjectsLocationsTemplatesGetSecurityOption2;
    option3?: DataflowProjectsLocationsTemplatesGetSecurityOption3;
    option4?: DataflowProjectsLocationsTemplatesGetSecurityOption4;
}
export declare class DataflowProjectsLocationsTemplatesGetRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsTemplatesGetPathParams;
    queryParams: DataflowProjectsLocationsTemplatesGetQueryParams;
    security: DataflowProjectsLocationsTemplatesGetSecurity;
}
export declare class DataflowProjectsLocationsTemplatesGetResponse extends SpeakeasyBase {
    contentType: string;
    getTemplateResponse?: shared.GetTemplateResponse;
    statusCode: number;
}
