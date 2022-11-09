import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetTimestagsFilterEnum {
    Des = "Des",
    Geo = "Geo",
    Org = "Org",
    Per = "Per"
}
export declare class GetTimestagsQueryParams extends SpeakeasyBase {
    filter?: GetTimestagsFilterEnum;
    max?: number;
    query: string;
}
export declare class GetTimestagsRequest extends SpeakeasyBase {
    queryParams: GetTimestagsQueryParams;
}
export declare class GetTimestagsResponse extends SpeakeasyBase {
    contentType: string;
    getTimestags200ApplicationJsonArrays?: string[][];
    statusCode: number;
}
