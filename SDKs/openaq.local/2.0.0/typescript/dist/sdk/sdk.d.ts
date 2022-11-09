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
    AveragesV2GetV2AveragesGet(req: operations.AveragesV2GetV2AveragesGetRequest, config?: AxiosRequestConfig): Promise<operations.AveragesV2GetV2AveragesGetResponse>;
    CitiesGetV2CitiesGet(req: operations.CitiesGetV2CitiesGetRequest, config?: AxiosRequestConfig): Promise<operations.CitiesGetV2CitiesGetResponse>;
    CitiesGetv1V1CitiesGet(req: operations.CitiesGetv1V1CitiesGetRequest, config?: AxiosRequestConfig): Promise<operations.CitiesGetv1V1CitiesGetResponse>;
    CountriesGetV1CountriesCountryIdGet(req: operations.CountriesGetV1CountriesCountryIdGetRequest, config?: AxiosRequestConfig): Promise<operations.CountriesGetV1CountriesCountryIdGetResponse>;
    CountriesGetV2CountriesCountryIdGet(req: operations.CountriesGetV2CountriesCountryIdGetRequest, config?: AxiosRequestConfig): Promise<operations.CountriesGetV2CountriesCountryIdGetResponse>;
    CountriesGetV2CountriesGet(req: operations.CountriesGetV2CountriesGetRequest, config?: AxiosRequestConfig): Promise<operations.CountriesGetV2CountriesGetResponse>;
    CountriesGetv1V1CountriesGet(req: operations.CountriesGetv1V1CountriesGetRequest, config?: AxiosRequestConfig): Promise<operations.CountriesGetv1V1CountriesGetResponse>;
    DemoV2LocationsTilesViewerGet(config?: AxiosRequestConfig): Promise<operations.DemoV2LocationsTilesViewerGetResponse>;
    FavicoFaviconIcoGet(config?: AxiosRequestConfig): Promise<operations.FavicoFaviconIcoGetResponse>;
    GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet(req: operations.GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse>;
    GetMobiletileV2LocationsTilesMobileZXYPbfGet(req: operations.GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse>;
    GetTileV2LocationsTilesZXYPbfGet(req: operations.GetTileV2LocationsTilesZXYPbfGetRequest, config?: AxiosRequestConfig): Promise<operations.GetTileV2LocationsTilesZXYPbfGetResponse>;
    LatestGetV2LatestLocationIdGet(req: operations.LatestGetV2LatestLocationIdGetRequest, config?: AxiosRequestConfig): Promise<operations.LatestGetV2LatestLocationIdGetResponse>;
    LatestGetV2LatestGet(req: operations.LatestGetV2LatestGetRequest, config?: AxiosRequestConfig): Promise<operations.LatestGetV2LatestGetResponse>;
    LatestV1GetV1LatestLocationIdGet(req: operations.LatestV1GetV1LatestLocationIdGetRequest, config?: AxiosRequestConfig): Promise<operations.LatestV1GetV1LatestLocationIdGetResponse>;
    LatestV1GetV1LatestGet(req: operations.LatestV1GetV1LatestGetRequest, config?: AxiosRequestConfig): Promise<operations.LatestV1GetV1LatestGetResponse>;
    LocationsGetV2LocationsLocationIdGet(req: operations.LocationsGetV2LocationsLocationIdGetRequest, config?: AxiosRequestConfig): Promise<operations.LocationsGetV2LocationsLocationIdGetResponse>;
    LocationsGetV2LocationsGet(req: operations.LocationsGetV2LocationsGetRequest, config?: AxiosRequestConfig): Promise<operations.LocationsGetV2LocationsGetResponse>;
    Locationsv1GetV1LocationsLocationIdGet(req: operations.Locationsv1GetV1LocationsLocationIdGetRequest, config?: AxiosRequestConfig): Promise<operations.Locationsv1GetV1LocationsLocationIdGetResponse>;
    Locationsv1GetV1LocationsGet(req: operations.Locationsv1GetV1LocationsGetRequest, config?: AxiosRequestConfig): Promise<operations.Locationsv1GetV1LocationsGetResponse>;
    MeasurementsGetV1V1MeasurementsGet(req: operations.MeasurementsGetV1V1MeasurementsGetRequest, config?: AxiosRequestConfig): Promise<operations.MeasurementsGetV1V1MeasurementsGetResponse>;
    MeasurementsGetV2MeasurementsGet(req: operations.MeasurementsGetV2MeasurementsGetRequest, config?: AxiosRequestConfig): Promise<operations.MeasurementsGetV2MeasurementsGetResponse>;
    MfrGetV2ManufacturersGet(config?: AxiosRequestConfig): Promise<operations.MfrGetV2ManufacturersGetResponse>;
    MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGet(config?: AxiosRequestConfig): Promise<operations.MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGetResponse>;
    MobiletilejsonV2LocationsTilesMobileTilesJsonGet(config?: AxiosRequestConfig): Promise<operations.MobiletilejsonV2LocationsTilesMobileTilesJsonGetResponse>;
    ModelGetV2ModelsGet(config?: AxiosRequestConfig): Promise<operations.ModelGetV2ModelsGetResponse>;
    ParametersGetV2ParametersGet(req: operations.ParametersGetV2ParametersGetRequest, config?: AxiosRequestConfig): Promise<operations.ParametersGetV2ParametersGetResponse>;
    ParametersGetv1V1ParametersGet(req: operations.ParametersGetv1V1ParametersGetRequest, config?: AxiosRequestConfig): Promise<operations.ParametersGetv1V1ParametersGetResponse>;
    /**
     * Sanity check.
     * This will let the user know that the service is operational.
     * And this path operation will:
     * * show a lifesign
    **/
    PongPingGet(config?: AxiosRequestConfig): Promise<operations.PongPingGetResponse>;
    ProjectsGetV2ProjectsProjectIdGet(req: operations.ProjectsGetV2ProjectsProjectIdGetRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetV2ProjectsProjectIdGetResponse>;
    ProjectsGetV2ProjectsGet(req: operations.ProjectsGetV2ProjectsGetRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetV2ProjectsGetResponse>;
    ReadmeGetV2SourcesReadmeSlugGet(req: operations.ReadmeGetV2SourcesReadmeSlugGetRequest, config?: AxiosRequestConfig): Promise<operations.ReadmeGetV2SourcesReadmeSlugGetResponse>;
    SourcesGetV2SourcesGet(req: operations.SourcesGetV2SourcesGetRequest, config?: AxiosRequestConfig): Promise<operations.SourcesGetV2SourcesGetResponse>;
    SourcesV1GetV1SourcesGet(req: operations.SourcesV1GetV1SourcesGetRequest, config?: AxiosRequestConfig): Promise<operations.SourcesV1GetV1SourcesGetResponse>;
    SummaryGetV2SummaryGet(config?: AxiosRequestConfig): Promise<operations.SummaryGetV2SummaryGetResponse>;
    TilejsonV2LocationsTilesTilesJsonGet(config?: AxiosRequestConfig): Promise<operations.TilejsonV2LocationsTilesTilesJsonGetResponse>;
}
export {};
