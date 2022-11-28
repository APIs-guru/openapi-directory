import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetRedirectToQueryParams extends SpeakeasyBase {
    statusCode?: number;
    url: string;
}
export declare class GetRedirectToRequest extends SpeakeasyBase {
    queryParams: GetRedirectToQueryParams;
}
export declare class GetRedirectToResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
