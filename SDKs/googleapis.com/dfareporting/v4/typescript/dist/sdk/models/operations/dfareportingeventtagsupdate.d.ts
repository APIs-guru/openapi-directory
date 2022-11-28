import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingEventTagsUpdatePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingEventTagsUpdateQueryParams extends SpeakeasyBase {
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
export declare class DfareportingEventTagsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingEventTagsUpdateRequest extends SpeakeasyBase {
    pathParams: DfareportingEventTagsUpdatePathParams;
    queryParams: DfareportingEventTagsUpdateQueryParams;
    request?: shared.EventTag;
    security: DfareportingEventTagsUpdateSecurity;
}
export declare class DfareportingEventTagsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    eventTag?: shared.EventTag;
    statusCode: number;
}
