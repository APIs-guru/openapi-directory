import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsTemplatesGetPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare enum DataflowProjectsTemplatesGetViewEnum {
    MetadataOnly = "METADATA_ONLY"
}
export declare class DataflowProjectsTemplatesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    gcsPath?: string;
    key?: string;
    location?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: DataflowProjectsTemplatesGetViewEnum;
}
export declare class DataflowProjectsTemplatesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsTemplatesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsTemplatesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsTemplatesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsTemplatesGetSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsTemplatesGetSecurityOption1;
    option2?: DataflowProjectsTemplatesGetSecurityOption2;
    option3?: DataflowProjectsTemplatesGetSecurityOption3;
    option4?: DataflowProjectsTemplatesGetSecurityOption4;
}
export declare class DataflowProjectsTemplatesGetRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsTemplatesGetPathParams;
    queryParams: DataflowProjectsTemplatesGetQueryParams;
    security: DataflowProjectsTemplatesGetSecurity;
}
export declare class DataflowProjectsTemplatesGetResponse extends SpeakeasyBase {
    contentType: string;
    getTemplateResponse?: shared.GetTemplateResponse;
    statusCode: number;
}
