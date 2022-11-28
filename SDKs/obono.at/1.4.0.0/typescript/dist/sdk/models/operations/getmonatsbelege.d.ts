import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMonatsbelegePathParams extends SpeakeasyBase {
    registrierkasseUuid: string;
}
export declare class GetMonatsbelegeQueryParams extends SpeakeasyBase {
    month?: number;
    year?: number;
}
export declare class GetMonatsbelegeRequest extends SpeakeasyBase {
    pathParams: GetMonatsbelegePathParams;
    queryParams: GetMonatsbelegeQueryParams;
}
export declare class GetMonatsbelegeResponse extends SpeakeasyBase {
    contentType: string;
    monatsbelegs?: shared.Monatsbeleg[];
    statusCode: number;
}
