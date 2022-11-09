import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetWellKnownMercureQueryParams extends SpeakeasyBase {
    lastEventId?: string;
    topic: string[];
}
export declare class GetWellKnownMercureHeaders extends SpeakeasyBase {
    lastEventId?: string;
}
export declare class GetWellKnownMercureRequest extends SpeakeasyBase {
    queryParams: GetWellKnownMercureQueryParams;
    headers: GetWellKnownMercureHeaders;
}
export declare class GetWellKnownMercureResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
