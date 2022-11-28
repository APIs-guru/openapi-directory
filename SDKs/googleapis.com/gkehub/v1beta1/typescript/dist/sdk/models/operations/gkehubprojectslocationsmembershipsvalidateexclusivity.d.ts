import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkehubProjectsLocationsMembershipsValidateExclusivityPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkehubProjectsLocationsMembershipsValidateExclusivityQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    crManifest?: string;
    fields?: string;
    intendedMembership?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GkehubProjectsLocationsMembershipsValidateExclusivitySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkehubProjectsLocationsMembershipsValidateExclusivityRequest extends SpeakeasyBase {
    pathParams: GkehubProjectsLocationsMembershipsValidateExclusivityPathParams;
    queryParams: GkehubProjectsLocationsMembershipsValidateExclusivityQueryParams;
    security: GkehubProjectsLocationsMembershipsValidateExclusivitySecurity;
}
export declare class GkehubProjectsLocationsMembershipsValidateExclusivityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    validateExclusivityResponse?: shared.ValidateExclusivityResponse;
}
