import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativeGroupsPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingCreativeGroupsPatchQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCreativeGroupsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativeGroupsPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativeGroupsPatchPathParams;
    queryParams: DfareportingCreativeGroupsPatchQueryParams;
    request?: shared.CreativeGroup;
    security: DfareportingCreativeGroupsPatchSecurity;
}
export declare class DfareportingCreativeGroupsPatchResponse extends SpeakeasyBase {
    contentType: string;
    creativeGroup?: shared.CreativeGroup;
    statusCode: number;
}
