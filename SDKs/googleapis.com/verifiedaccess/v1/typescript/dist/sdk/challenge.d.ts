import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Challenge {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * verifiedaccessChallengeCreate - CreateChallenge API
    **/
    verifiedaccessChallengeCreate(req: operations.VerifiedaccessChallengeCreateRequest, config?: AxiosRequestConfig): Promise<operations.VerifiedaccessChallengeCreateResponse>;
    /**
     * verifiedaccessChallengeVerify - VerifyChallengeResponse API
    **/
    verifiedaccessChallengeVerify(req: operations.VerifiedaccessChallengeVerifyRequest, config?: AxiosRequestConfig): Promise<operations.VerifiedaccessChallengeVerifyResponse>;
}
