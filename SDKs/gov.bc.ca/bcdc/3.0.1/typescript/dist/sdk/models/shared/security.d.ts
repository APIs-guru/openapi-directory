import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class SchemeGithubAccessCode extends SpeakeasyBase {
    authorization: string;
}
export declare class SchemeInternalApiKey extends SpeakeasyBase {
    apiKey: string;
}
export declare class SecurityOption1 extends SpeakeasyBase {
    githubAccessCode: SchemeGithubAccessCode;
}
export declare class SecurityOption2 extends SpeakeasyBase {
    internalApiKey: SchemeInternalApiKey;
}
export declare class Security extends SpeakeasyBase {
    option1?: SecurityOption1;
    option2?: SecurityOption2;
}
