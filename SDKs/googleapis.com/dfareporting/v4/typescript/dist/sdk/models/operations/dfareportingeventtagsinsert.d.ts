import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingEventTagsInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingEventTagsInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingEventTagsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingEventTagsInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingEventTagsInsertPathParams;
    queryParams: DfareportingEventTagsInsertQueryParams;
    request?: shared.EventTag;
    security: DfareportingEventTagsInsertSecurity;
}
export declare class DfareportingEventTagsInsertResponse extends SpeakeasyBase {
    contentType: string;
    eventTag?: shared.EventTag;
    statusCode: number;
}
