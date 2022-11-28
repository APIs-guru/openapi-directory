import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteDomainPathParams extends SpeakeasyBase {
    domainId: number;
}
export declare class DeleteDomainSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteDomainDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteDomainRequest extends SpeakeasyBase {
    pathParams: DeleteDomainPathParams;
    security: DeleteDomainSecurity;
}
export declare class DeleteDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteDomain200ApplicationJsonObject?: Map<string, any>;
    deleteDomainDefaultApplicationJsonObject?: DeleteDomainDefaultApplicationJson;
}
