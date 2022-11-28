import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AllLinesSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class AllLinesRequest extends SpeakeasyBase {
    security: AllLinesSecurity;
}
export declare class AllLinesResponse extends SpeakeasyBase {
    contentType: string;
    environment?: string;
    statusCode: number;
}
