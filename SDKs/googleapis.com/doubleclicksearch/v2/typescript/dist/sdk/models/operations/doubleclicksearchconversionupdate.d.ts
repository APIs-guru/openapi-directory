import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DoubleclicksearchConversionUpdateQueryParams extends SpeakeasyBase {
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
export declare class DoubleclicksearchConversionUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DoubleclicksearchConversionUpdateRequest extends SpeakeasyBase {
    queryParams: DoubleclicksearchConversionUpdateQueryParams;
    request?: shared.ConversionList;
    security: DoubleclicksearchConversionUpdateSecurity;
}
export declare class DoubleclicksearchConversionUpdateResponse extends SpeakeasyBase {
    contentType: string;
    conversionList?: shared.ConversionList;
    statusCode: number;
}
