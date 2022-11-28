import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Person {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deletePersonLoginTokenId - Delete a token of a person.
     *
     * Delete a token of the specified person.
    **/
    deletePersonLoginTokenId(req: operations.DeletePersonLoginTokenIdRequest, config?: AxiosRequestConfig): Promise<operations.DeletePersonLoginTokenIdResponse>;
    /**
     * getPerson - List all people.
     *
     * List all people.
     *
    **/
    getPerson(req: operations.GetPersonRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonResponse>;
    /**
     * getPersonLogin - Get details about a person
    **/
    getPersonLogin(req: operations.GetPersonLoginRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonLoginResponse>;
    /**
     * getPersonLoginGroup - List the groups of a person
     *
     * List the groups the person belongs to.
    **/
    getPersonLoginGroup(req: operations.GetPersonLoginGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonLoginGroupResponse>;
    /**
     * getPersonLoginToken - List the authentication tokens of a person.
     *
     * List the authentication tokens of a person.
    **/
    getPersonLoginToken(req: operations.GetPersonLoginTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetPersonLoginTokenResponse>;
    /**
     * postPerson - Executes a command on the person endpoint.
     *
     * Allows executing command on the person endpoint.
     *
     * As of now, the only command allowed is 'register'.
     *
    **/
    postPerson(req: operations.PostPersonRequest, config?: AxiosRequestConfig): Promise<operations.PostPersonResponse>;
    /**
     * postPersonLogin - Perform changes on a registered person
    **/
    postPersonLogin(req: operations.PostPersonLoginRequest, config?: AxiosRequestConfig): Promise<operations.PostPersonLoginResponse>;
    /**
     * postPersonLoginToken - Create a new authentication token for a person.
     *
     * Create a new authentication token for a person.
     *
     * The token may be limited to a specific package. In this case the query parameters
     * `project` and `package` should be provided.
     *
     * With an empty request body, a token of the default kind 'runservice' is created.
     *
    **/
    postPersonLoginToken(req: operations.PostPersonLoginTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostPersonLoginTokenResponse>;
    /**
     * postPersonRegister - Registers a new person
    **/
    postPersonRegister(req: operations.PostPersonRegisterRequest, config?: AxiosRequestConfig): Promise<operations.PostPersonRegisterResponse>;
    /**
     * putPersonLogin - Update person
    **/
    putPersonLogin(req: operations.PutPersonLoginRequest, config?: AxiosRequestConfig): Promise<operations.PutPersonLoginResponse>;
}
