import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingDimensionValuesQueryPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class DfareportingDimensionValuesQueryQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingDimensionValuesQuerySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingDimensionValuesQueryRequest extends SpeakeasyBase {
    pathParams: DfareportingDimensionValuesQueryPathParams;
    queryParams: DfareportingDimensionValuesQueryQueryParams;
    request?: shared.DimensionValueRequest;
    security: DfareportingDimensionValuesQuerySecurity;
}
export declare class DfareportingDimensionValuesQueryResponse extends SpeakeasyBase {
    contentType: string;
    dimensionValueList?: shared.DimensionValueList;
    statusCode: number;
}
