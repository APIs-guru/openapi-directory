import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apps.nrs.gov.bc.ca/gwells/api/v1/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * aquiferCodesDemandList - return a list of aquifer demand codes
    **/
    aquiferCodesDemandList(req: operations.AquiferCodesDemandListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesDemandListResponse>;
    /**
     * aquiferCodesMaterialsList - return a list of aquifer material codes
    **/
    aquiferCodesMaterialsList(req: operations.AquiferCodesMaterialsListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesMaterialsListResponse>;
    /**
     * aquiferCodesProductivityList - return a list of aquifer productivity codes
    **/
    aquiferCodesProductivityList(req: operations.AquiferCodesProductivityListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesProductivityListResponse>;
    /**
     * aquiferCodesQualityConcernsList - return a list of quality concern codes
    **/
    aquiferCodesQualityConcernsList(req: operations.AquiferCodesQualityConcernsListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesQualityConcernsListResponse>;
    /**
     * aquiferCodesSubtypesList - return a list of aquifer subtype codes
    **/
    aquiferCodesSubtypesList(req: operations.AquiferCodesSubtypesListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesSubtypesListResponse>;
    /**
     * aquiferCodesVulnerabilityList - return a list of aquifer vulnerability codes
    **/
    aquiferCodesVulnerabilityList(req: operations.AquiferCodesVulnerabilityListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesVulnerabilityListResponse>;
    /**
     * aquiferCodesWaterUseList - return a list of water use codes
    **/
    aquiferCodesWaterUseList(req: operations.AquiferCodesWaterUseListRequest, config?: AxiosRequestConfig): Promise<operations.AquiferCodesWaterUseListResponse>;
    /**
     * aquifersFilesList - list files found for the aquifer identified in the uri
    **/
    aquifersFilesList(req: operations.AquifersFilesListRequest, config?: AxiosRequestConfig): Promise<operations.AquifersFilesListResponse>;
    /**
     * aquifersList - return a list of aquifers
    **/
    aquifersList(req: operations.AquifersListRequest, config?: AxiosRequestConfig): Promise<operations.AquifersListResponse>;
    /**
     * aquifersNamesList - List all aquifers in a simplified format
    **/
    aquifersNamesList(req: operations.AquifersNamesListRequest, config?: AxiosRequestConfig): Promise<operations.AquifersNamesListResponse>;
    /**
     * aquifersRead - return details of aquifers
    **/
    aquifersRead(req: operations.AquifersReadRequest, config?: AxiosRequestConfig): Promise<operations.AquifersReadResponse>;
    /**
     * citiesDrillersList - returns a list of cities with a qualified, registered operator (driller or installer)
    **/
    citiesDrillersList(config?: AxiosRequestConfig): Promise<operations.CitiesDrillersListResponse>;
    /**
     * citiesInstallersList - returns a list of cities with a qualified, registered operator (driller or installer)
    **/
    citiesInstallersList(config?: AxiosRequestConfig): Promise<operations.CitiesInstallersListResponse>;
    /**
     * configList - serves general configuration
    **/
    configList(config?: AxiosRequestConfig): Promise<operations.ConfigListResponse>;
    /**
     * drillersFilesList - list files found for the aquifer identified in the uri
    **/
    drillersFilesList(req: operations.DrillersFilesListRequest, config?: AxiosRequestConfig): Promise<operations.DrillersFilesListResponse>;
    /**
     * drillersList - Returns a list of all person records
    **/
    drillersList(req: operations.DrillersListRequest, config?: AxiosRequestConfig): Promise<operations.DrillersListResponse>;
    /**
     * drillersNamesList - Search for a person in the Register
    **/
    drillersNamesList(req: operations.DrillersNamesListRequest, config?: AxiosRequestConfig): Promise<operations.DrillersNamesListResponse>;
    /**
     * keycloakList - serves keycloak config
    **/
    keycloakList(config?: AxiosRequestConfig): Promise<operations.KeycloakListResponse>;
    /**
     * submissionsOptionsList - Options required for submitting activity report forms
    **/
    submissionsOptionsList(config?: AxiosRequestConfig): Promise<operations.SubmissionsOptionsListResponse>;
    /**
     * surveysList - returns a list of active surveys
    **/
    surveysList(config?: AxiosRequestConfig): Promise<operations.SurveysListResponse>;
    /**
     * wellsFilesList - list files found for the well identified in the uri
    **/
    wellsFilesList(req: operations.WellsFilesListRequest, config?: AxiosRequestConfig): Promise<operations.WellsFilesListResponse>;
    /**
     * wellsList - returns a list of wells
    **/
    wellsList(req: operations.WellsListRequest, config?: AxiosRequestConfig): Promise<operations.WellsListResponse>;
    /**
     * wellsRead - Return well detail.
     * This view is open to all, and has no permissions.
    **/
    wellsRead(req: operations.WellsReadRequest, config?: AxiosRequestConfig): Promise<operations.WellsReadResponse>;
    /**
     * wellsTagsList - seach for wells by tag or owner
    **/
    wellsTagsList(req: operations.WellsTagsListRequest, config?: AxiosRequestConfig): Promise<operations.WellsTagsListResponse>;
}
export {};
