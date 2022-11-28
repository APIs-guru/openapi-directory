import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSnowMonkeyOutagesSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class GetSnowMonkeyOutagesRequest extends SpeakeasyBase {
    security: GetSnowMonkeyOutagesSecurity;
}
export declare class GetSnowMonkeyOutagesResponse extends SpeakeasyBase {
    contentType: string;
    outages?: shared.Outage[];
    statusCode: number;
}
