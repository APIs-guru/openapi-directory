import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkehubProjectsLocationsMembershipsGenerateConnectManifestPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    imagePullSecretContent?: string;
    isUpgrade?: boolean;
    key?: string;
    namespace?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    proxy?: string;
    quotaUser?: string;
    registry?: string;
    uploadType?: string;
    uploadProtocol?: string;
    version?: string;
}
export declare class GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest extends SpeakeasyBase {
    pathParams: GkehubProjectsLocationsMembershipsGenerateConnectManifestPathParams;
    queryParams: GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams;
    security: GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity;
}
export declare class GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse extends SpeakeasyBase {
    contentType: string;
    generateConnectManifestResponse?: shared.GenerateConnectManifestResponse;
    statusCode: number;
}
