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
     * verifiedaccessChallengeGenerate - Generates a new challenge.
    **/
    verifiedaccessChallengeGenerate(req: operations.VerifiedaccessChallengeGenerateRequest, config?: AxiosRequestConfig): Promise<operations.VerifiedaccessChallengeGenerateResponse>;
    /**
     * verifiedaccessChallengeVerify - Verifies the challenge response.
    **/
    verifiedaccessChallengeVerify(req: operations.VerifiedaccessChallengeVerifyRequest, config?: AxiosRequestConfig): Promise<operations.VerifiedaccessChallengeVerifyResponse>;
}
