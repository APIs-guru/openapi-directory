import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingProjectsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingProjectsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingProjectsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingProjectsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingProjectsGetPathParams;
    queryParams: DfareportingProjectsGetQueryParams;
    security: DfareportingProjectsGetSecurity;
}
export declare class DfareportingProjectsGetResponse extends SpeakeasyBase {
    contentType: string;
    project?: shared.Project;
    statusCode: number;
}
