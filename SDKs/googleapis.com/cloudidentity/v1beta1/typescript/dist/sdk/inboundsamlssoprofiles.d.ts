import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InboundSamlSsoProfiles {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudidentityInboundSamlSsoProfilesCreate - Creates an InboundSamlSsoProfile for a customer.
    **/
    cloudidentityInboundSamlSsoProfilesCreate(req: operations.CloudidentityInboundSamlSsoProfilesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityInboundSamlSsoProfilesCreateResponse>;
    /**
     * cloudidentityInboundSamlSsoProfilesIdpCredentialsAdd - Adds an IdpCredential. Up to 2 credentials are allowed.
    **/
    cloudidentityInboundSamlSsoProfilesIdpCredentialsAdd(req: operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsAddResponse>;
    /**
     * cloudidentityInboundSamlSsoProfilesIdpCredentialsList - Returns a list of IdpCredentials in an InboundSamlSsoProfile.
    **/
    cloudidentityInboundSamlSsoProfilesIdpCredentialsList(req: operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityInboundSamlSsoProfilesIdpCredentialsListResponse>;
    /**
     * cloudidentityInboundSamlSsoProfilesList - Lists InboundSamlSsoProfiles for a customer.
    **/
    cloudidentityInboundSamlSsoProfilesList(req: operations.CloudidentityInboundSamlSsoProfilesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudidentityInboundSamlSsoProfilesListResponse>;
}
