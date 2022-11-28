import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TfaDisableSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class TfaDisableDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class TfaDisableRequest extends SpeakeasyBase {
    security: TfaDisableSecurity;
}
export declare class TfaDisableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tfaDisable200ApplicationJsonObject?: Map<string, any>;
    tfaDisableDefaultApplicationJsonObject?: TfaDisableDefaultApplicationJson;
}
