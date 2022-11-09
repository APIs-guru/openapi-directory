import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    CompareStation(req: operations.CompareStationRequest, config?: AxiosRequestConfig): Promise<operations.CompareStationResponse>;
    GetAemetStation(req: operations.GetAemetStationRequest, config?: AxiosRequestConfig): Promise<operations.GetAemetStationResponse>;
    GetEasywind(req: operations.GetEasywindRequest, config?: AxiosRequestConfig): Promise<operations.GetEasywindResponse>;
    GetEventStations(req: operations.GetEventStationsRequest, config?: AxiosRequestConfig): Promise<operations.GetEventStationsResponse>;
    GetForecastPoints(req: operations.GetForecastPointsRequest, config?: AxiosRequestConfig): Promise<operations.GetForecastPointsResponse>;
    GetForecastTimeSeries(req: operations.GetForecastTimeSeriesRequest, config?: AxiosRequestConfig): Promise<operations.GetForecastTimeSeriesResponse>;
    GetForecastTimeSeriesWrf(req: operations.GetForecastTimeSeriesWrfRequest, config?: AxiosRequestConfig): Promise<operations.GetForecastTimeSeriesWrfResponse>;
    GetSocibWeatherStation(req: operations.GetSocibWeatherStationRequest, config?: AxiosRequestConfig): Promise<operations.GetSocibWeatherStationResponse>;
    GetWeatherDisplay(req: operations.GetWeatherDisplayRequest, config?: AxiosRequestConfig): Promise<operations.GetWeatherDisplayResponse>;
    GetWebCams(config?: AxiosRequestConfig): Promise<operations.GetWebCamsResponse>;
}
export {};
