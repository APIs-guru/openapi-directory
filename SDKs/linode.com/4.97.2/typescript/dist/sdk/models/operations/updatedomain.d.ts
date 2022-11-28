import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateDomainPathParams extends SpeakeasyBase {
    domainId: number;
}
export declare class UpdateDomainSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateDomainDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateDomainRequest extends SpeakeasyBase {
    pathParams: UpdateDomainPathParams;
    request: shared.DomainInput;
    security: UpdateDomainSecurity;
}
export declare class UpdateDomainResponse extends SpeakeasyBase {
    contentType: string;
    domain?: shared.Domain;
    statusCode: number;
    updateDomainDefaultApplicationJsonObject?: UpdateDomainDefaultApplicationJson;
}
