import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCustomEventsBatchinsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingCustomEventsBatchinsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCustomEventsBatchinsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCustomEventsBatchinsertRequest extends SpeakeasyBase {
    pathParams: DfareportingCustomEventsBatchinsertPathParams;
    queryParams: DfareportingCustomEventsBatchinsertQueryParams;
    request?: shared.CustomEventsBatchInsertRequest;
    security: DfareportingCustomEventsBatchinsertSecurity;
}
export declare class DfareportingCustomEventsBatchinsertResponse extends SpeakeasyBase {
    contentType: string;
    customEventsBatchInsertResponse?: shared.CustomEventsBatchInsertResponse;
    statusCode: number;
}
