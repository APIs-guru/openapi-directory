import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoubleclicksearchConversionGetPathParams extends SpeakeasyBase {
    advertiserId: string;
    agencyId: string;
    engineAccountId: string;
}
export declare class DoubleclicksearchConversionGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    adGroupId?: string;
    adId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    campaignId?: string;
    criterionId?: string;
    customerId?: string;
    endDate: number;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    rowCount: number;
    startDate: number;
    startRow: number;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DoubleclicksearchConversionGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclicksearchConversionGetRequest extends SpeakeasyBase {
    pathParams: DoubleclicksearchConversionGetPathParams;
    queryParams: DoubleclicksearchConversionGetQueryParams;
    security: DoubleclicksearchConversionGetSecurity;
}
export declare class DoubleclicksearchConversionGetResponse extends SpeakeasyBase {
    contentType: string;
    conversionList?: shared.ConversionList;
    statusCode: number;
}
