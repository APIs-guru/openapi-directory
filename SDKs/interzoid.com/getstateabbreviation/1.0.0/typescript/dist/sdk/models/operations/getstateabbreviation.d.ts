import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetstateabbreviationQueryParams extends SpeakeasyBase {
    license: string;
    state: string;
}
export declare class GetstateabbreviationRequest extends SpeakeasyBase {
    queryParams: GetstateabbreviationQueryParams;
}
export declare class Getstateabbreviation200ApplicationJson extends SpeakeasyBase {
    abbreviation?: string;
    code?: string;
    credits?: string;
    state?: string;
}
export declare class GetstateabbreviationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getstateabbreviation200ApplicationJsonObject?: Getstateabbreviation200ApplicationJson;
}
