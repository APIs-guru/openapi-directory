import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableAccountMangedSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class EnableAccountMangedDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class EnableAccountMangedRequest extends SpeakeasyBase {
    security: EnableAccountMangedSecurity;
}
export declare class EnableAccountMangedResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    enableAccountManged200ApplicationJsonObject?: Map<string, any>;
    enableAccountMangedDefaultApplicationJsonObject?: EnableAccountMangedDefaultApplicationJson;
}
