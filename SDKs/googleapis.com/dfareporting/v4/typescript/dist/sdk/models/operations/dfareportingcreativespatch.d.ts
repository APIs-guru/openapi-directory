import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativesPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingCreativesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    id: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingCreativesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativesPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativesPatchPathParams;
    queryParams: DfareportingCreativesPatchQueryParams;
    request?: shared.Creative;
    security: DfareportingCreativesPatchSecurity;
}
export declare class DfareportingCreativesPatchResponse extends SpeakeasyBase {
    contentType: string;
    creative?: shared.Creative;
    statusCode: number;
}
