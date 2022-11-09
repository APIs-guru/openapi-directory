import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LookupUmprnPathParams extends SpeakeasyBase {
    umprn: string;
}
export declare class LookupUmprnQueryParams extends SpeakeasyBase {
    filter?: string;
    licensee?: string;
}
export declare class LookupUmprnSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    userToken: shared.SchemeUserToken;
}
export declare class LookupUmprnRequest extends SpeakeasyBase {
    pathParams: LookupUmprnPathParams;
    queryParams: LookupUmprnQueryParams;
    security: LookupUmprnSecurity;
}
export declare class LookupUmprnResponse extends SpeakeasyBase {
    addressLookupResponseSchema?: shared.AddressLookupResponseSchema;
    contentType: string;
    errorResponseSchema?: shared.ErrorResponseSchema;
    statusCode: number;
}
