import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCreativeAssetsInsertPathParams extends SpeakeasyBase {
    advertiserId: string;
    profileId: string;
}
export declare class DfareportingCreativeAssetsInsertQueryParams extends SpeakeasyBase {
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
export declare class DfareportingCreativeAssetsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCreativeAssetsInsertRequest extends SpeakeasyBase {
    pathParams: DfareportingCreativeAssetsInsertPathParams;
    queryParams: DfareportingCreativeAssetsInsertQueryParams;
    request?: Uint8Array;
    security: DfareportingCreativeAssetsInsertSecurity;
}
export declare class DfareportingCreativeAssetsInsertResponse extends SpeakeasyBase {
    contentType: string;
    creativeAssetMetadata?: shared.CreativeAssetMetadata;
    statusCode: number;
}
