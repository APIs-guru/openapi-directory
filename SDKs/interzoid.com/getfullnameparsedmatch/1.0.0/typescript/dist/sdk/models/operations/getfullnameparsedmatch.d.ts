import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetfullnameparsedmatchQueryParams extends SpeakeasyBase {
    firstname: string;
    lastname: string;
    license: string;
}
export declare class GetfullnameparsedmatchRequest extends SpeakeasyBase {
    queryParams: GetfullnameparsedmatchQueryParams;
}
export declare class Getfullnameparsedmatch200ApplicationJson extends SpeakeasyBase {
    code?: string;
    credits?: string;
    simkey?: string;
}
export declare class GetfullnameparsedmatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getfullnameparsedmatch200ApplicationJsonObject?: Getfullnameparsedmatch200ApplicationJson;
}
