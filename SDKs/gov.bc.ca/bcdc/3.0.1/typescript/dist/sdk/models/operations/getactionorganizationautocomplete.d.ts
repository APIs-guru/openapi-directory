import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetActionOrganizationAutocompleteQueryParams extends SpeakeasyBase {
    limit?: number;
    q?: string;
}
export declare class GetActionOrganizationAutocompleteRequest extends SpeakeasyBase {
    queryParams: GetActionOrganizationAutocompleteQueryParams;
}
export declare class GetActionOrganizationAutocompleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
