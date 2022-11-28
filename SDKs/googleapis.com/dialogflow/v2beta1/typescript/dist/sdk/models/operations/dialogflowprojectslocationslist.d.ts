import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsListSecurityOption1;
    option2?: DialogflowProjectsLocationsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsListPathParams;
    queryParams: DialogflowProjectsLocationsListQueryParams;
    security: DialogflowProjectsLocationsListSecurity;
}
export declare class DialogflowProjectsLocationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudLocationListLocationsResponse?: shared.GoogleCloudLocationListLocationsResponse;
    statusCode: number;
}
