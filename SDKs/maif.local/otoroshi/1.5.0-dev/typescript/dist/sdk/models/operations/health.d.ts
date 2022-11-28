import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthResponse extends SpeakeasyBase {
    contentType: string;
    otoroshiHealth?: shared.OtoroshiHealth;
    statusCode: number;
}
