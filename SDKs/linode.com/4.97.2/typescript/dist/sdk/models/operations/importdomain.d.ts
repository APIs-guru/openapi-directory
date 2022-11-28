import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImportDomainSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class ImportDomainDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class ImportDomainRequest extends SpeakeasyBase {
    request?: any;
    security: ImportDomainSecurity;
}
export declare class ImportDomainResponse extends SpeakeasyBase {
    contentType: string;
    domain?: shared.Domain;
    statusCode: number;
    importDomainDefaultApplicationJsonObject?: ImportDomainDefaultApplicationJson;
}
