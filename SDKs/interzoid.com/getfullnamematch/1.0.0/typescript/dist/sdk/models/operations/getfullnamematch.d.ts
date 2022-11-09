import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetfullnamematchQueryParams extends SpeakeasyBase {
    fullname: string;
    license: string;
}
export declare class GetfullnamematchRequest extends SpeakeasyBase {
    queryParams: GetfullnamematchQueryParams;
}
export declare class Getfullnamematch200ApplicationJson extends SpeakeasyBase {
    code?: string;
    credits?: string;
    simkey?: string;
}
export declare class GetfullnamematchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getfullnamematch200ApplicationJsonObject?: Getfullnamematch200ApplicationJson;
}
