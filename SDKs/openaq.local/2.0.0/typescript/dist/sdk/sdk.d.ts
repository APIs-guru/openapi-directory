import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://openaq.local"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * averagesV2GetV2AveragesGet - Averages V2 Get
    **/
    averagesV2GetV2AveragesGet(req: operations.AveragesV2GetV2AveragesGetRequest, config?: AxiosRequestConfig): Promise<operations.AveragesV2GetV2AveragesGetResponse>;
    /**
     * citiesGetV2CitiesGet - Provides a simple listing of cities within the platform
    **/
    citiesGetV2CitiesGet(req: operations.CitiesGetV2CitiesGetRequest, config?: AxiosRequestConfig): Promise<operations.CitiesGetV2CitiesGetResponse>;
    /**
     * citiesGetv1V1CitiesGet - Provides a simple listing of cities within the platform
    **/
    citiesGetv1V1CitiesGet(req: operations.CitiesGetv1V1CitiesGetRequest, config?: AxiosRequestConfig): Promise<operations.CitiesGetv1V1CitiesGetResponse>;
    /**
     * countriesGetV1CountriesCountryIdGet - Countries Get
    **/
    countriesGetV1CountriesCountryIdGet(req: operations.CountriesGetV1CountriesCountryIdGetRequest, config?: AxiosRequestConfig): Promise<operations.CountriesGetV1CountriesCountryIdGetResponse>;
    /**
     * countriesGetV2CountriesCountryIdGet - Countries Get
    **/
    countriesGetV2CountriesCountryIdGet(req: operations.CountriesGetV2CountriesCountryIdGetRequest, config?: AxiosRequestConfig): Promise<operations.CountriesGetV2CountriesCountryIdGetResponse>;
    /**
     * countriesGetV2CountriesGet - Countries Get
    **/
    countriesGetV2CountriesGet(req: operations.CountriesGetV2CountriesGetRequest, config?: AxiosRequestConfig): Promise<operations.CountriesGetV2CountriesGetResponse>;
    /**
     * countriesGetv1V1CountriesGet - Countries Getv1
    **/
    countriesGetv1V1CountriesGet(req: operations.CountriesGetv1V1CountriesGetRequest, config?: AxiosRequestConfig): Promise<operations.CountriesGetv1V1CountriesGetResponse>;
    /**
     * demoV2LocationsTilesViewerGet - Demo
    **/
    demoV2LocationsTilesViewerGet(config?: AxiosRequestConfig): Promise<operations.DemoV2LocationsTilesViewerGetResponse>;
    /**
     * favicoFaviconIcoGet - Favico
    **/
    favicoFaviconIcoGet(config?: AxiosRequestConfig): Promise<operations.FavicoFaviconIcoGetResponse>;
    /**
     * getMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet - Get Mobilegentile
    **/
    getMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGet(req: operations.GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMobilegentileV2LocationsTilesMobileGeneralizedZXYPbfGetResponse>;
    /**
     * getMobiletileV2LocationsTilesMobileZXYPbfGet - Get Mobiletile
    **/
    getMobiletileV2LocationsTilesMobileZXYPbfGet(req: operations.GetMobiletileV2LocationsTilesMobileZXYPbfGetRequest, config?: AxiosRequestConfig): Promise<operations.GetMobiletileV2LocationsTilesMobileZXYPbfGetResponse>;
    /**
     * getTileV2LocationsTilesZXYPbfGet - Get Tile
    **/
    getTileV2LocationsTilesZXYPbfGet(req: operations.GetTileV2LocationsTilesZXYPbfGetRequest, config?: AxiosRequestConfig): Promise<operations.GetTileV2LocationsTilesZXYPbfGetResponse>;
    /**
     * latestGetV2LatestLocationIdGet - Latest Get
    **/
    latestGetV2LatestLocationIdGet(req: operations.LatestGetV2LatestLocationIdGetRequest, config?: AxiosRequestConfig): Promise<operations.LatestGetV2LatestLocationIdGetResponse>;
    /**
     * latestGetV2LatestGet - Latest Get
    **/
    latestGetV2LatestGet(req: operations.LatestGetV2LatestGetRequest, config?: AxiosRequestConfig): Promise<operations.LatestGetV2LatestGetResponse>;
    /**
     * latestV1GetV1LatestLocationIdGet - Latest V1 Get
    **/
    latestV1GetV1LatestLocationIdGet(req: operations.LatestV1GetV1LatestLocationIdGetRequest, config?: AxiosRequestConfig): Promise<operations.LatestV1GetV1LatestLocationIdGetResponse>;
    /**
     * latestV1GetV1LatestGet - Latest V1 Get
    **/
    latestV1GetV1LatestGet(req: operations.LatestV1GetV1LatestGetRequest, config?: AxiosRequestConfig): Promise<operations.LatestV1GetV1LatestGetResponse>;
    /**
     * locationsGetV2LocationsLocationIdGet - Locations Get
    **/
    locationsGetV2LocationsLocationIdGet(req: operations.LocationsGetV2LocationsLocationIdGetRequest, config?: AxiosRequestConfig): Promise<operations.LocationsGetV2LocationsLocationIdGetResponse>;
    /**
     * locationsGetV2LocationsGet - Locations Get
    **/
    locationsGetV2LocationsGet(req: operations.LocationsGetV2LocationsGetRequest, config?: AxiosRequestConfig): Promise<operations.LocationsGetV2LocationsGetResponse>;
    /**
     * locationsv1GetV1LocationsLocationIdGet - Locationsv1 Get
    **/
    locationsv1GetV1LocationsLocationIdGet(req: operations.Locationsv1GetV1LocationsLocationIdGetRequest, config?: AxiosRequestConfig): Promise<operations.Locationsv1GetV1LocationsLocationIdGetResponse>;
    /**
     * locationsv1GetV1LocationsGet - Locationsv1 Get
    **/
    locationsv1GetV1LocationsGet(req: operations.Locationsv1GetV1LocationsGetRequest, config?: AxiosRequestConfig): Promise<operations.Locationsv1GetV1LocationsGetResponse>;
    /**
     * measurementsGetV1V1MeasurementsGet - Measurements Get V1
    **/
    measurementsGetV1V1MeasurementsGet(req: operations.MeasurementsGetV1V1MeasurementsGetRequest, config?: AxiosRequestConfig): Promise<operations.MeasurementsGetV1V1MeasurementsGetResponse>;
    /**
     * measurementsGetV2MeasurementsGet - Measurements Get
    **/
    measurementsGetV2MeasurementsGet(req: operations.MeasurementsGetV2MeasurementsGetRequest, config?: AxiosRequestConfig): Promise<operations.MeasurementsGetV2MeasurementsGetResponse>;
    /**
     * mfrGetV2ManufacturersGet - Mfr Get
    **/
    mfrGetV2ManufacturersGet(config?: AxiosRequestConfig): Promise<operations.MfrGetV2ManufacturersGetResponse>;
    /**
     * mobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGet - Mobilegentilejson
    **/
    mobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGet(config?: AxiosRequestConfig): Promise<operations.MobilegentilejsonV2LocationsTilesMobileGeneralizedTilesJsonGetResponse>;
    /**
     * mobiletilejsonV2LocationsTilesMobileTilesJsonGet - Mobiletilejson
    **/
    mobiletilejsonV2LocationsTilesMobileTilesJsonGet(config?: AxiosRequestConfig): Promise<operations.MobiletilejsonV2LocationsTilesMobileTilesJsonGetResponse>;
    /**
     * modelGetV2ModelsGet - Model Get
    **/
    modelGetV2ModelsGet(config?: AxiosRequestConfig): Promise<operations.ModelGetV2ModelsGetResponse>;
    /**
     * parametersGetV2ParametersGet - Parameters Get
    **/
    parametersGetV2ParametersGet(req: operations.ParametersGetV2ParametersGetRequest, config?: AxiosRequestConfig): Promise<operations.ParametersGetV2ParametersGetResponse>;
    /**
     * parametersGetv1V1ParametersGet - Parameters Getv1
    **/
    parametersGetv1V1ParametersGet(req: operations.ParametersGetv1V1ParametersGetRequest, config?: AxiosRequestConfig): Promise<operations.ParametersGetv1V1ParametersGetResponse>;
    /**
     * pongPingGet - Pong
     *
     * Sanity check.
     * This will let the user know that the service is operational.
     * And this path operation will:
     * * show a lifesign
    **/
    pongPingGet(config?: AxiosRequestConfig): Promise<operations.PongPingGetResponse>;
    /**
     * projectsGetV2ProjectsProjectIdGet - Projects Get
    **/
    projectsGetV2ProjectsProjectIdGet(req: operations.ProjectsGetV2ProjectsProjectIdGetRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetV2ProjectsProjectIdGetResponse>;
    /**
     * projectsGetV2ProjectsGet - Projects Get
    **/
    projectsGetV2ProjectsGet(req: operations.ProjectsGetV2ProjectsGetRequest, config?: AxiosRequestConfig): Promise<operations.ProjectsGetV2ProjectsGetResponse>;
    /**
     * readmeGetV2SourcesReadmeSlugGet - Readme Get
    **/
    readmeGetV2SourcesReadmeSlugGet(req: operations.ReadmeGetV2SourcesReadmeSlugGetRequest, config?: AxiosRequestConfig): Promise<operations.ReadmeGetV2SourcesReadmeSlugGetResponse>;
    /**
     * sourcesGetV2SourcesGet - Sources Get
    **/
    sourcesGetV2SourcesGet(req: operations.SourcesGetV2SourcesGetRequest, config?: AxiosRequestConfig): Promise<operations.SourcesGetV2SourcesGetResponse>;
    /**
     * sourcesV1GetV1SourcesGet - Sources V1 Get
    **/
    sourcesV1GetV1SourcesGet(req: operations.SourcesV1GetV1SourcesGetRequest, config?: AxiosRequestConfig): Promise<operations.SourcesV1GetV1SourcesGetResponse>;
    /**
     * summaryGetV2SummaryGet - Summary Get
    **/
    summaryGetV2SummaryGet(config?: AxiosRequestConfig): Promise<operations.SummaryGetV2SummaryGetResponse>;
    /**
     * tilejsonV2LocationsTilesTilesJsonGet - Tilejson
    **/
    tilejsonV2LocationsTilesTilesJsonGet(config?: AxiosRequestConfig): Promise<operations.TilejsonV2LocationsTilesTilesJsonGetResponse>;
}
export {};
