import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingEventTagsGetPathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingEventTagsGetQueryParams extends SpeakeasyBase {
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
export declare class DfareportingEventTagsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingEventTagsGetRequest extends SpeakeasyBase {
    pathParams: DfareportingEventTagsGetPathParams;
    queryParams: DfareportingEventTagsGetQueryParams;
    security: DfareportingEventTagsGetSecurity;
}
export declare class DfareportingEventTagsGetResponse extends SpeakeasyBase {
    contentType: string;
    eventTag?: shared.EventTag;
    statusCode: number;
}
