import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPostalCodesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingPostalCodesListQueryParams extends SpeakeasyBase {
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
export declare class DfareportingPostalCodesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPostalCodesListRequest extends SpeakeasyBase {
    pathParams: DfareportingPostalCodesListPathParams;
    queryParams: DfareportingPostalCodesListQueryParams;
    security: DfareportingPostalCodesListSecurity;
}
export declare class DfareportingPostalCodesListResponse extends SpeakeasyBase {
    contentType: string;
    postalCodesListResponse?: shared.PostalCodesListResponse;
    statusCode: number;
}
