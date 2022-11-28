import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingDynamicTargetingKeysListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingDynamicTargetingKeysListObjectTypeEnum {
    ObjectAdvertiser = "OBJECT_ADVERTISER",
    ObjectAd = "OBJECT_AD",
    ObjectCreative = "OBJECT_CREATIVE",
    ObjectPlacement = "OBJECT_PLACEMENT"
}
export declare class DfareportingDynamicTargetingKeysListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    names?: string[];
    oauthToken?: string;
    objectId?: string;
    objectType?: DfareportingDynamicTargetingKeysListObjectTypeEnum;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingDynamicTargetingKeysListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingDynamicTargetingKeysListRequest extends SpeakeasyBase {
    pathParams: DfareportingDynamicTargetingKeysListPathParams;
    queryParams: DfareportingDynamicTargetingKeysListQueryParams;
    security: DfareportingDynamicTargetingKeysListSecurity;
}
export declare class DfareportingDynamicTargetingKeysListResponse extends SpeakeasyBase {
    contentType: string;
    dynamicTargetingKeysListResponse?: shared.DynamicTargetingKeysListResponse;
    statusCode: number;
}
