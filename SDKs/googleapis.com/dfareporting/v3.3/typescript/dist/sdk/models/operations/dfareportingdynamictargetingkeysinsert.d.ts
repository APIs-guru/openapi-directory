import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingDynamicTargetingKeysInsertPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingDynamicTargetingKeysInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingDynamicTargetingKeysInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingDynamicTargetingKeysInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingDynamicTargetingKeysInsertPathParams;
    queryParams: DfareportingDynamicTargetingKeysInsertQueryParams;
    request?: shared.DynamicTargetingKey;
    security: DfareportingDynamicTargetingKeysInsertSecurity;
}
export declare class DfareportingDynamicTargetingKeysInsertResponse extends SpeakeasyBase {
    contentType: string;
    dynamicTargetingKey?: shared.DynamicTargetingKey;
    statusCode: number;
}
