import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingMetrosListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingMetrosListQueryParams extends SpeakeasyBase {
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
export declare class DfareportingMetrosListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingMetrosListRequest extends SpeakeasyBase {
    pathParams: DfareportingMetrosListPathParams;
    queryParams: DfareportingMetrosListQueryParams;
    security: DfareportingMetrosListSecurity;
}
export declare class DfareportingMetrosListResponse extends SpeakeasyBase {
    contentType: string;
    metrosListResponse?: shared.MetrosListResponse;
    statusCode: number;
}
