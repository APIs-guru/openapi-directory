import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPatientsQueryParams extends SpeakeasyBase {
    expand?: string;
    full?: boolean;
    limit?: number;
    short?: boolean;
    since?: number;
}
export declare class GetPatientsRequest extends SpeakeasyBase {
    queryParams: GetPatientsQueryParams;
}
export declare class GetPatientsResponse extends SpeakeasyBase {
    contentType: string;
    getPatients200ApplicationJsonAny?: any;
    statusCode: number;
}
