import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPatientsIdStatisticsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPatientsIdStatisticsRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdStatisticsPathParams;
}
export declare class GetPatientsIdStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    getPatientsIdStatistics200ApplicationJsonAny?: any;
    statusCode: number;
}
