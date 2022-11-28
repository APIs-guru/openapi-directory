import { SpeakeasyBase } from "../../../internal/utils";
export declare class SchemeGithubAccessCode extends SpeakeasyBase {
    authorization: string;
}
export declare class SchemeInternalApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class Security extends SpeakeasyBase {
    githubAccessCode?: SchemeGithubAccessCode;
    internalApiKey?: SchemeInternalApiKey;
}
