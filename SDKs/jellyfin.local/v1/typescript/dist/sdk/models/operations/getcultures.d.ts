import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCulturesSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetCulturesRequest extends SpeakeasyBase {
    security: GetCulturesSecurity;
}
export declare class GetCulturesResponse extends SpeakeasyBase {
    contentType: string;
    cultureDtos?: shared.CultureDto[];
    statusCode: number;
}
