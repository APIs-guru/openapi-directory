import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FactchecktoolsPagesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class FactchecktoolsPagesDeleteQueryParams extends SpeakeasyBase {
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
export declare class FactchecktoolsPagesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FactchecktoolsPagesDeleteRequest extends SpeakeasyBase {
    pathParams: FactchecktoolsPagesDeletePathParams;
    queryParams: FactchecktoolsPagesDeleteQueryParams;
    security: FactchecktoolsPagesDeleteSecurity;
}
export declare class FactchecktoolsPagesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
