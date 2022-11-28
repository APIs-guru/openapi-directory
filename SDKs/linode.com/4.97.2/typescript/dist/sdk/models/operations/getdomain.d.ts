import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDomainPathParams extends SpeakeasyBase {
    domainId: number;
}
export declare class GetDomainSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetDomainDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetDomainRequest extends SpeakeasyBase {
    pathParams: GetDomainPathParams;
    security: GetDomainSecurity;
}
export declare class GetDomainResponse extends SpeakeasyBase {
    contentType: string;
    domain?: shared.Domain;
    statusCode: number;
    getDomainDefaultApplicationJsonObject?: GetDomainDefaultApplicationJson;
}
