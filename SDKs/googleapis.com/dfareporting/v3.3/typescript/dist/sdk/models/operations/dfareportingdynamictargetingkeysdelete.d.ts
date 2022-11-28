import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingDynamicTargetingKeysDeletePathParams extends SpeakeasyBase {
    objectId: string;
    profileId: string;
}
export declare enum DfareportingDynamicTargetingKeysDeleteObjectTypeEnum {
    ObjectAdvertiser = "OBJECT_ADVERTISER",
    ObjectAd = "OBJECT_AD",
    ObjectCreative = "OBJECT_CREATIVE",
    ObjectPlacement = "OBJECT_PLACEMENT"
}
export declare class DfareportingDynamicTargetingKeysDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    name: string;
    oauthToken?: string;
    objectType: DfareportingDynamicTargetingKeysDeleteObjectTypeEnum;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingDynamicTargetingKeysDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingDynamicTargetingKeysDeleteRequest extends SpeakeasyBase {
    pathParams: DfareportingDynamicTargetingKeysDeletePathParams;
    queryParams: DfareportingDynamicTargetingKeysDeleteQueryParams;
    security: DfareportingDynamicTargetingKeysDeleteSecurity;
}
export declare class DfareportingDynamicTargetingKeysDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
