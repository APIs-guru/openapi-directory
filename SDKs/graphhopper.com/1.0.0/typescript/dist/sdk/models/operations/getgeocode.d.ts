import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGeocodeQueryParams extends SpeakeasyBase {
    debug?: boolean;
    limit?: number;
    locale?: string;
    point?: string;
    provider?: string;
    q?: string;
    reverse?: boolean;
}
export declare class GetGeocodeRequest extends SpeakeasyBase {
    queryParams: GetGeocodeQueryParams;
}
export declare class GetGeocodeResponse extends SpeakeasyBase {
    contentType: string;
    ghError?: shared.GhError;
    geocodingResponse?: any;
    headers: Map<string, string[]>;
    statusCode: number;
}
