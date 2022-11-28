import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindAllScriptsSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class FindAllScriptsRequest extends SpeakeasyBase {
    security: FindAllScriptsSecurity;
}
export declare class FindAllScriptsResponse extends SpeakeasyBase {
    contentType: string;
    scripts?: shared.Script[];
    statusCode: number;
}
