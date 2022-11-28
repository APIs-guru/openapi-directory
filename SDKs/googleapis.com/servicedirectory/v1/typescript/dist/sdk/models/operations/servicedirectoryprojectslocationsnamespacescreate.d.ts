import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicedirectoryProjectsLocationsNamespacesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ServicedirectoryProjectsLocationsNamespacesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    namespaceId?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServicedirectoryProjectsLocationsNamespacesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicedirectoryProjectsLocationsNamespacesCreateRequest extends SpeakeasyBase {
    pathParams: ServicedirectoryProjectsLocationsNamespacesCreatePathParams;
    queryParams: ServicedirectoryProjectsLocationsNamespacesCreateQueryParams;
    request?: shared.NamespaceInput;
    security: ServicedirectoryProjectsLocationsNamespacesCreateSecurity;
}
export declare class ServicedirectoryProjectsLocationsNamespacesCreateResponse extends SpeakeasyBase {
    contentType: string;
    namespace?: shared.Namespace;
    statusCode: number;
}
