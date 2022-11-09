import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TexttospeechVoicesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TexttospeechVoicesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TexttospeechVoicesListRequest extends SpeakeasyBase {
    queryParams: TexttospeechVoicesListQueryParams;
    security: TexttospeechVoicesListSecurity;
}
export declare class TexttospeechVoicesListResponse extends SpeakeasyBase {
    contentType: string;
    listVoicesResponse?: shared.ListVoicesResponse;
    statusCode: number;
}
