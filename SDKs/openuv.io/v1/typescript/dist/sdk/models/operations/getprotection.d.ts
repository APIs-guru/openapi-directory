import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetProtectionQueryParams extends SpeakeasyBase {
    alt?: number;
    from: number;
    lat: number;
    lng: number;
    ozone?: number;
    to: number;
}
export declare class GetProtectionHeaders extends SpeakeasyBase {
    xAccessToken: string;
}
export declare class GetProtectionRequest extends SpeakeasyBase {
    queryParams: GetProtectionQueryParams;
    headers: GetProtectionHeaders;
}
export declare class GetProtectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    protectionResult?: shared.ProtectionResult;
}
