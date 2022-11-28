import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoubleclicksearchConversionGetByCustomerIdPathParams extends SpeakeasyBase {
    customerId: string;
}
export declare class DoubleclicksearchConversionGetByCustomerIdQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    adGroupId?: string;
    adId?: string;
    advertiserId?: string;
    agencyId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    campaignId?: string;
    criterionId?: string;
    endDate: number;
    engineAccountId?: string;
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
export declare class DoubleclicksearchConversionGetByCustomerIdSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclicksearchConversionGetByCustomerIdRequest extends SpeakeasyBase {
    pathParams: DoubleclicksearchConversionGetByCustomerIdPathParams;
    queryParams: DoubleclicksearchConversionGetByCustomerIdQueryParams;
    security: DoubleclicksearchConversionGetByCustomerIdSecurity;
}
export declare class DoubleclicksearchConversionGetByCustomerIdResponse extends SpeakeasyBase {
    contentType: string;
    conversionList?: shared.ConversionList;
    statusCode: number;
}
