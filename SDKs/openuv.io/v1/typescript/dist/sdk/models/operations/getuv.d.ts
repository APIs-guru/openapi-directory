import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetUvQueryParams extends SpeakeasyBase {
    alt?: number;
    dt?: Date;
    lat: number;
    lng: number;
    ozone?: number;
}
export declare class GetUvHeaders extends SpeakeasyBase {
    xAccessToken: string;
}
export declare class GetUvRequest extends SpeakeasyBase {
    queryParams: GetUvQueryParams;
    headers: GetUvHeaders;
}
export declare class GetUvResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    uvIndexResult?: shared.UvIndexResult;
}
