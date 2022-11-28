import { SpeakeasyBase } from "../../../internal/utils";
export declare enum IdSourceEnum {
    Nsidc = "NSIDC",
    Ade = "ADE"
}
export declare class IdQueryParams extends SpeakeasyBase {
    q: string;
    source: IdSourceEnum;
}
export declare class IdRequest extends SpeakeasyBase {
    queryParams: IdQueryParams;
}
export declare class IdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    id200ApplicationXSuggestionsPlusJsonString?: string;
}
