import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LicensingModelsSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class LicensingModelsRequest extends SpeakeasyBase {
    security: LicensingModelsSecurity;
}
export declare class LicensingModelsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
