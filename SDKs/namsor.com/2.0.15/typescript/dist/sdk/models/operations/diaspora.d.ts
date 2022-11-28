import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DiasporaPathParams extends SpeakeasyBase {
    countryIso2: string;
    firstName: string;
    lastName: string;
}
export declare class DiasporaSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DiasporaRequest extends SpeakeasyBase {
    pathParams: DiasporaPathParams;
    security: DiasporaSecurity;
}
export declare class DiasporaResponse extends SpeakeasyBase {
    contentType: string;
    firstLastNameDiasporaedOut?: shared.FirstLastNameDiasporaedOut;
    statusCode: number;
}
