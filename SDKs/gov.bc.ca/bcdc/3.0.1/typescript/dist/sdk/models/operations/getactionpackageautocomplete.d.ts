import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetActionPackageAutocompleteQueryParams extends SpeakeasyBase {
    limit?: number;
    q?: string;
}
export declare class GetActionPackageAutocompleteRequest extends SpeakeasyBase {
    queryParams: GetActionPackageAutocompleteQueryParams;
}
export declare class GetActionPackageAutocompleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
