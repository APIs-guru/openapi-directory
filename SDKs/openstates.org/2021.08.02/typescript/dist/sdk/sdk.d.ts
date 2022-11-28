import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://openstates.org"];
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
     * billDetailBillsJurisdictionSessionBillIdGet - Bill Detail
     *
     * Obtain bill information based on (state, session, bill_id).
    **/
    billDetailBillsJurisdictionSessionBillIdGet(req: operations.BillDetailBillsJurisdictionSessionBillIdGetRequest, config?: AxiosRequestConfig): Promise<operations.BillDetailBillsJurisdictionSessionBillIdGetResponse>;
    /**
     * billDetailByIdBillsOcdBillOpenstatesBillIdGet - Bill Detail By Id
     *
     * Obtain bill information by internal ID in the format ocd-bill/*uuid*.
    **/
    billDetailByIdBillsOcdBillOpenstatesBillIdGet(req: operations.BillDetailByIdBillsOcdBillOpenstatesBillIdGetRequest, config?: AxiosRequestConfig): Promise<operations.BillDetailByIdBillsOcdBillOpenstatesBillIdGetResponse>;
    /**
     * billsSearchBillsGet - Bills Search
     *
     * Search for bills matching given criteria.
     *
     * Must either specify a jurisdiction or a full text query (q).  Additional parameters will
     * futher restrict bills returned.
    **/
    billsSearchBillsGet(req: operations.BillsSearchBillsGetRequest, config?: AxiosRequestConfig): Promise<operations.BillsSearchBillsGetResponse>;
    /**
     * committeeDetailCommitteesCommitteeIdGet - Committee Detail
     *
     * Get details on a single committee by ID.
    **/
    committeeDetailCommitteesCommitteeIdGet(req: operations.CommitteeDetailCommitteesCommitteeIdGetRequest, config?: AxiosRequestConfig): Promise<operations.CommitteeDetailCommitteesCommitteeIdGetResponse>;
    /**
     * committeeListCommitteesGet - Committee List
    **/
    committeeListCommitteesGet(req: operations.CommitteeListCommitteesGetRequest, config?: AxiosRequestConfig): Promise<operations.CommitteeListCommitteesGetResponse>;
    /**
     * jurisdictionDetailJurisdictionsJurisdictionIdGet - Jurisdiction Detail
     *
     * Get details on a single Jurisdiction (e.g. state or municipality).
    **/
    jurisdictionDetailJurisdictionsJurisdictionIdGet(req: operations.JurisdictionDetailJurisdictionsJurisdictionIdGetRequest, config?: AxiosRequestConfig): Promise<operations.JurisdictionDetailJurisdictionsJurisdictionIdGetResponse>;
    /**
     * jurisdictionListJurisdictionsGet - Jurisdiction List
     *
     * Get list of supported Jurisdictions, a Jurisdiction is a state or municipality.
    **/
    jurisdictionListJurisdictionsGet(req: operations.JurisdictionListJurisdictionsGetRequest, config?: AxiosRequestConfig): Promise<operations.JurisdictionListJurisdictionsGetResponse>;
    /**
     * peopleGeoPeopleGeoGet - People Geo
     *
     * Get list of people currently representing a given location.
     *
     * **Note:** Currently limited to state legislators.  Governors & mayors are not included.
    **/
    peopleGeoPeopleGeoGet(req: operations.PeopleGeoPeopleGeoGetRequest, config?: AxiosRequestConfig): Promise<operations.PeopleGeoPeopleGeoGetResponse>;
    /**
     * peopleSearchPeopleGet - People Search
     *
     * Get list of people matching selected criteria.
     *
     * Must provide either **jurisdiction**, **name**, or one or more **id** parameters.
    **/
    peopleSearchPeopleGet(req: operations.PeopleSearchPeopleGetRequest, config?: AxiosRequestConfig): Promise<operations.PeopleSearchPeopleGetResponse>;
}
export {};
