import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContaineranalysisProjectsOccurrencesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum ContaineranalysisProjectsOccurrencesListKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED",
    PackageVulnerability = "PACKAGE_VULNERABILITY",
    BuildDetails = "BUILD_DETAILS",
    ImageBasis = "IMAGE_BASIS",
    PackageManager = "PACKAGE_MANAGER",
    Deployable = "DEPLOYABLE",
    Discovery = "DISCOVERY",
    AttestationAuthority = "ATTESTATION_AUTHORITY",
    Upgrade = "UPGRADE",
    Compliance = "COMPLIANCE",
    Sbom = "SBOM",
    SpdxPackage = "SPDX_PACKAGE",
    SpdxFile = "SPDX_FILE",
    SpdxRelationship = "SPDX_RELATIONSHIP",
    DsseAttestation = "DSSE_ATTESTATION"
}
export declare class ContaineranalysisProjectsOccurrencesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    kind?: ContaineranalysisProjectsOccurrencesListKindEnum;
    name?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContaineranalysisProjectsOccurrencesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContaineranalysisProjectsOccurrencesListRequest extends SpeakeasyBase {
    pathParams: ContaineranalysisProjectsOccurrencesListPathParams;
    queryParams: ContaineranalysisProjectsOccurrencesListQueryParams;
    security: ContaineranalysisProjectsOccurrencesListSecurity;
}
export declare class ContaineranalysisProjectsOccurrencesListResponse extends SpeakeasyBase {
    contentType: string;
    listOccurrencesResponse?: shared.ListOccurrencesResponse;
    statusCode: number;
}
