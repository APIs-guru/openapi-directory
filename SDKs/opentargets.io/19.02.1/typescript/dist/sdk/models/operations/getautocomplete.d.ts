import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAutocompleteQueryParams extends SpeakeasyBase {
    q: string;
    size?: string;
}
export declare class GetAutocompleteRequest extends SpeakeasyBase {
    queryParams: GetAutocompleteQueryParams;
}
export declare class GetAutocompleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
