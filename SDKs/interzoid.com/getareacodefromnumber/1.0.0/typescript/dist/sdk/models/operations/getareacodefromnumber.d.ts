import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetareacodefromnumberQueryParams extends SpeakeasyBase {
    license: string;
    number: string;
}
export declare class Getareacodefromnumber200ApplicationJson extends SpeakeasyBase {
    abbreviation?: string;
    areaCode?: string;
    code?: string;
    credits?: string;
    locale?: string;
    primaryCity?: string;
}
export declare class GetareacodefromnumberRequest extends SpeakeasyBase {
    queryParams: GetareacodefromnumberQueryParams;
}
export declare class GetareacodefromnumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getareacodefromnumber200ApplicationJsonObject?: Getareacodefromnumber200ApplicationJson;
}
