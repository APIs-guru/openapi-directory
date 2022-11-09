import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GkehubProjectsLocationsFeaturesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class GkehubProjectsLocationsFeaturesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    featureId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GkehubProjectsLocationsFeaturesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkehubProjectsLocationsFeaturesCreateRequest extends SpeakeasyBase {
    pathParams: GkehubProjectsLocationsFeaturesCreatePathParams;
    queryParams: GkehubProjectsLocationsFeaturesCreateQueryParams;
    request?: shared.Feature;
    security: GkehubProjectsLocationsFeaturesCreateSecurity;
}
export declare class GkehubProjectsLocationsFeaturesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
