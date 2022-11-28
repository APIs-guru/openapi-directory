import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class NameTypeGeoPathParams extends SpeakeasyBase {
    countryIso2: string;
    properNoun: string;
}
export declare class NameTypeGeoSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class NameTypeGeoRequest extends SpeakeasyBase {
    pathParams: NameTypeGeoPathParams;
    security: NameTypeGeoSecurity;
}
export declare class NameTypeGeoResponse extends SpeakeasyBase {
    contentType: string;
    properNounCategorizedOut?: shared.ProperNounCategorizedOut;
    statusCode: number;
}
