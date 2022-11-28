import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingEventTagsDeletePathParams extends SpeakeasyBase {
    id: string;
    profileId: string;
}
export declare class DfareportingEventTagsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DfareportingEventTagsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingEventTagsDeleteRequest extends SpeakeasyBase {
    pathParams: DfareportingEventTagsDeletePathParams;
    queryParams: DfareportingEventTagsDeleteQueryParams;
    security: DfareportingEventTagsDeleteSecurity;
}
export declare class DfareportingEventTagsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
