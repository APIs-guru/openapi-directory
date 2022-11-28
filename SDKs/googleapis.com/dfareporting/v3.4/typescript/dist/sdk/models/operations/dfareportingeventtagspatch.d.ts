import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingEventTagsPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingEventTagsPatchQueryParams extends SpeakeasyBase {
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
export declare class DfareportingEventTagsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingEventTagsPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingEventTagsPatchPathParams;
    queryParams: DfareportingEventTagsPatchQueryParams;
    request?: shared.EventTag;
    security: DfareportingEventTagsPatchSecurity;
}
export declare class DfareportingEventTagsPatchResponse extends SpeakeasyBase {
    contentType: string;
    eventTag?: shared.EventTag;
    statusCode: number;
}
