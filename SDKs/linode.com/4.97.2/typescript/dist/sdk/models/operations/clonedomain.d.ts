import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloneDomainPathParams extends SpeakeasyBase {
    domainId: string;
}
export declare class CloneDomainRequestBody extends SpeakeasyBase {
    domain: string;
}
export declare class CloneDomainSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CloneDomainDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CloneDomainRequest extends SpeakeasyBase {
    pathParams: CloneDomainPathParams;
    request: CloneDomainRequestBody;
    security: CloneDomainSecurity;
}
export declare class CloneDomainResponse extends SpeakeasyBase {
    contentType: string;
    domain?: shared.Domain;
    statusCode: number;
    cloneDomainDefaultApplicationJsonObject?: CloneDomainDefaultApplicationJson;
}
