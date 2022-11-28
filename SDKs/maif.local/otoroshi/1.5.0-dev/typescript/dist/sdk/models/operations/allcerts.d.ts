import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AllCertsSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class AllCertsRequest extends SpeakeasyBase {
    security: AllCertsSecurity;
}
export declare class AllCertsResponse extends SpeakeasyBase {
    certificates?: shared.Certificate[];
    contentType: string;
    statusCode: number;
}
