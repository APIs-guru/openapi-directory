import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ComposerProjectsLocationsEnvironmentsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ComposerProjectsLocationsEnvironmentsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ComposerProjectsLocationsEnvironmentsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ComposerProjectsLocationsEnvironmentsListRequest extends SpeakeasyBase {
    pathParams: ComposerProjectsLocationsEnvironmentsListPathParams;
    queryParams: ComposerProjectsLocationsEnvironmentsListQueryParams;
    security: ComposerProjectsLocationsEnvironmentsListSecurity;
}
export declare class ComposerProjectsLocationsEnvironmentsListResponse extends SpeakeasyBase {
    contentType: string;
    listEnvironmentsResponse?: shared.ListEnvironmentsResponse;
    statusCode: number;
}
