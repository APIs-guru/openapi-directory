import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPatientsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPatientsIdQueryParams extends SpeakeasyBase {
    full?: boolean;
    short?: boolean;
}
export declare class GetPatientsIdRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdPathParams;
    queryParams: GetPatientsIdQueryParams;
}
export declare class GetPatientsIdResponse extends SpeakeasyBase {
    contentType: string;
    getPatientsId200ApplicationJsonAny?: any;
    statusCode: number;
}
