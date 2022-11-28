import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OriginPathParams extends SpeakeasyBase {
    firstName: string;
    lastName: string;
}
export declare class OriginSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class OriginRequest extends SpeakeasyBase {
    pathParams: OriginPathParams;
    security: OriginSecurity;
}
export declare class OriginResponse extends SpeakeasyBase {
    contentType: string;
    firstLastNameOriginedOut?: shared.FirstLastNameOriginedOut;
    statusCode: number;
}
