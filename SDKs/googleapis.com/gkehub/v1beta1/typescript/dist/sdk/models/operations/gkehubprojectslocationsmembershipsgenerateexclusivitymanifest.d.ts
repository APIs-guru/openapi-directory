import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GkehubProjectsLocationsMembershipsGenerateExclusivityManifestPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    crManifest?: string;
    crdManifest?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GkehubProjectsLocationsMembershipsGenerateExclusivityManifestSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GkehubProjectsLocationsMembershipsGenerateExclusivityManifestRequest extends SpeakeasyBase {
    pathParams: GkehubProjectsLocationsMembershipsGenerateExclusivityManifestPathParams;
    queryParams: GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams;
    security: GkehubProjectsLocationsMembershipsGenerateExclusivityManifestSecurity;
}
export declare class GkehubProjectsLocationsMembershipsGenerateExclusivityManifestResponse extends SpeakeasyBase {
    contentType: string;
    generateExclusivityManifestResponse?: shared.GenerateExclusivityManifestResponse;
    statusCode: number;
}
