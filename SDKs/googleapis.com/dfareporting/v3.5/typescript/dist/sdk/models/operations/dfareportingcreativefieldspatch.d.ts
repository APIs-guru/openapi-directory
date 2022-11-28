import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativeFieldsPatchPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingCreativeFieldsPatchQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCreativeFieldsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativeFieldsPatchRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativeFieldsPatchPathParams;
    queryParams: DfareportingCreativeFieldsPatchQueryParams;
    request?: shared.CreativeField;
    security: DfareportingCreativeFieldsPatchSecurity;
}
export declare class DfareportingCreativeFieldsPatchResponse extends SpeakeasyBase {
    contentType: string;
    creativeField?: shared.CreativeField;
    statusCode: number;
}
