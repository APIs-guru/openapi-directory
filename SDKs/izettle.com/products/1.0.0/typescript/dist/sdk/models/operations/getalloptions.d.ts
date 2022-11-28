import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAllOptionsPathParams extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class GetAllOptionsSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class GetAllOptionsRequest extends SpeakeasyBase {
    pathParams: GetAllOptionsPathParams;
    security: GetAllOptionsSecurity;
}
export declare class GetAllOptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    variantOptionsResponses?: shared.VariantOptionsResponse[];
}
