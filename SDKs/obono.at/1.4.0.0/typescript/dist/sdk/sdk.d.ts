import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://obono.at/api/v1"];
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
     * getAuth - Request a JWT access token using your obono username and password.
    **/
    getAuth(req: operations.GetAuthRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthResponse>;
    /**
     * getBelegeBelegUuid - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
    **/
    getBelegeBelegUuid(req: operations.GetBelegeBelegUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetBelegeBelegUuidResponse>;
    getExportCsvRegistrierkassenRegistrierkasseUuidBelege(req: operations.GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeRequest, config?: AxiosRequestConfig): Promise<operations.GetExportCsvRegistrierkassenRegistrierkasseUuidBelegeResponse>;
    getExportDep131RegistrierkassenRegistrierkasseUuidBelege(req: operations.GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeRequest, config?: AxiosRequestConfig): Promise<operations.GetExportDep131RegistrierkassenRegistrierkasseUuidBelegeResponse>;
    getExportDep7RegistrierkassenRegistrierkasseUuidBelege(req: operations.GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeRequest, config?: AxiosRequestConfig): Promise<operations.GetExportDep7RegistrierkassenRegistrierkasseUuidBelegeResponse>;
    getExportGobdRegistrierkassenRegistrierkasseUuid(req: operations.GetExportGobdRegistrierkassenRegistrierkasseUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetExportGobdRegistrierkassenRegistrierkasseUuidResponse>;
    getExportHtmlBelegeBelegUuid(req: operations.GetExportHtmlBelegeBelegUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetExportHtmlBelegeBelegUuidResponse>;
    getExportPdfBelegeBelegUuid(req: operations.GetExportPdfBelegeBelegUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetExportPdfBelegeBelegUuidResponse>;
    getExportQrBelegeBelegUuid(req: operations.GetExportQrBelegeBelegUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetExportQrBelegeBelegUuidResponse>;
    getExportThermalPrintBelegeBelegUuid(req: operations.GetExportThermalPrintBelegeBelegUuidRequest, config?: AxiosRequestConfig): Promise<operations.GetExportThermalPrintBelegeBelegUuidResponse>;
    getExportXlsRegistrierkassenRegistrierkasseUuidBelege(req: operations.GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeRequest, config?: AxiosRequestConfig): Promise<operations.GetExportXlsRegistrierkassenRegistrierkasseUuidBelegeResponse>;
    /**
     * addBeleg - Signs a receipt and stores it in the "Datenerfassungsprotokoll".
    **/
    addBeleg(req: operations.AddBelegRequest, config?: AxiosRequestConfig): Promise<operations.AddBelegResponse>;
    /**
     * createAbschluss - Generates an `Abschlussbeleg`.
    **/
    createAbschluss(req: operations.CreateAbschlussRequest, config?: AxiosRequestConfig): Promise<operations.CreateAbschlussResponse>;
    /**
     * getBeleg - Retrieves a particular `Beleg` from the "Datenerfassungsprotokoll".
    **/
    getBeleg(req: operations.GetBelegRequest, config?: AxiosRequestConfig): Promise<operations.GetBelegResponse>;
    /**
     * getBelege - Retrieves the `Beleg` collection from the "Datenerfassungsprotokoll".
    **/
    getBelege(req: operations.GetBelegeRequest, config?: AxiosRequestConfig): Promise<operations.GetBelegeResponse>;
    /**
     * getDep - Generates a DEP file.
    **/
    getDep(req: operations.GetDepRequest, config?: AxiosRequestConfig): Promise<operations.GetDepResponse>;
    /**
     * getMonatsbelege - Returns a list of `Monatsbelege`.
    **/
    getMonatsbelege(req: operations.GetMonatsbelegeRequest, config?: AxiosRequestConfig): Promise<operations.GetMonatsbelegeResponse>;
    /**
     * getRegistrierkasse - Returns information about a particular `Registrierkasse`.
    **/
    getRegistrierkasse(req: operations.GetRegistrierkasseRequest, config?: AxiosRequestConfig): Promise<operations.GetRegistrierkasseResponse>;
}
export {};
