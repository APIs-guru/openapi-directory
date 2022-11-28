import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://osdb.openlinksw.com/osdb"];
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
     * actionHelp - Action help
     *
     * Returns the help text for a given service action
    **/
    actionHelp(req: operations.ActionHelpRequest, config?: AxiosRequestConfig): Promise<operations.ActionHelpResponse>;
    /**
     * describeAction - Describe action
     *
     * Returns a description of a given service action.
    **/
    describeAction(req: operations.DescribeActionRequest, config?: AxiosRequestConfig): Promise<operations.DescribeActionResponse>;
    /**
     * describeService - Describe service
     *
     * Returns a description of a given service
    **/
    describeService(req: operations.DescribeServiceRequest, config?: AxiosRequestConfig): Promise<operations.DescribeServiceResponse>;
    /**
     * executeAction - Execute action
     *
     * Executes a registered service action and returns any output from the action.
     * The data returned in the POST response body may be:
     * * the raw action output,
     * * a URL encapsulating the action request which executes the action when dereferenced  (only for actions using GET),
     * * RDF generated from the action output,
     * * a URL to an RDF viewer's display of the generated RDF.
     *
     * Any parameters required by the action are supplied as a JSON object in the POST body. The parameter types supported are: "query", "header", "uri", "path" and "body".  The parameter type determines where a supplied parameter value is inserted into the HTTP request constructed by OSDB to invoke the target service action. In addition to native parameters required by the service action, 'Execute action' accepts some OSDB-specific parameters.<br/><br/>
     *
     * **Examples**
     * * ```curl -ik -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec```
     * * ```curl -ikL -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"generate_rdf", "osdb:response_format":"application/rdf+xml" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec```
     * * ```curl -ikL -X POST -d '{ "latitude":"37.7759792", "longitude":"-122.41823", "osdb:output_type":"display_rdf" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/uber/products/exec```
     * * ```curl -ik -X POST -d '{ "q":"skiing", "osdb:response_format": "application/rdf+xml" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec```
     * * ```curl -ik -X POST -d '{ "q":"skiing", "osdb:output_type": "url_only" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/facet/search/exec```
     * * ```curl -ik -X POST -d '{ "Content-Location": "http://demo.openlinksw.co.uk/pubs", "osdb:body_data_src_url": "http://ods-qa.openlinksw.com/DAV/home/osdb/pubs.csv", "extractor": "csv", "osdb:response_format": "application/rdf+xml", "osdb:body_data_encoding": "text/csv" }' -H 'Content-Type: application/json' https://osdb.openlinksw.com/osdb/api/v1/actions/csv_transformer/transform/exec```
    **/
    executeAction(req: operations.ExecuteActionRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteActionResponse>;
    /**
     * listActions - List actions
     *
     * Returns an array of action descriptions for the actions supported by the given service
    **/
    listActions(req: operations.ListActionsRequest, config?: AxiosRequestConfig): Promise<operations.ListActionsResponse>;
    /**
     * listServices - List services
     *
     * Returns descriptions of all services registered with the OSDB server.
    **/
    listServices(config?: AxiosRequestConfig): Promise<operations.ListServicesResponse>;
    /**
     * loadService - Load service
     *
     * Loads a service description into the OSDB Service Registry
    **/
    loadService(req: operations.LoadServiceRequest, config?: AxiosRequestConfig): Promise<operations.LoadServiceResponse>;
    /**
     * login - Login
     *
     * Logs a user into the OSDB server, authenticating them by their WebID and returning an OSDB session ID in cookie osdb.sid
    **/
    login(config?: AxiosRequestConfig): Promise<operations.LoginResponse>;
    /**
     * logout - Logout
     *
     * Logs a user out of the OSDB server, ending their OSDB session
    **/
    logout(config?: AxiosRequestConfig): Promise<operations.LogoutResponse>;
    /**
     * unloadService - Unload service
     *
     * Removes a service description from the OSDB Service Registry
    **/
    unloadService(req: operations.UnloadServiceRequest, config?: AxiosRequestConfig): Promise<operations.UnloadServiceResponse>;
}
export {};
