import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DomainsProjectsLocationsRegistrationsTransferPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DomainsProjectsLocationsRegistrationsTransferQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DomainsProjectsLocationsRegistrationsTransferSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DomainsProjectsLocationsRegistrationsTransferRequest extends SpeakeasyBase {
    pathParams: DomainsProjectsLocationsRegistrationsTransferPathParams;
    queryParams: DomainsProjectsLocationsRegistrationsTransferQueryParams;
    request?: shared.TransferDomainRequestInput;
    security: DomainsProjectsLocationsRegistrationsTransferSecurity;
}
export declare class DomainsProjectsLocationsRegistrationsTransferResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
