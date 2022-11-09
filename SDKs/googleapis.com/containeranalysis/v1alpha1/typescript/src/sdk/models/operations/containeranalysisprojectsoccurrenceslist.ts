import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContaineranalysisProjectsOccurrencesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum ContaineranalysisProjectsOccurrencesListKindEnum {
    KindUnspecified = "KIND_UNSPECIFIED"
,    PackageVulnerability = "PACKAGE_VULNERABILITY"
,    BuildDetails = "BUILD_DETAILS"
,    ImageBasis = "IMAGE_BASIS"
,    PackageManager = "PACKAGE_MANAGER"
,    Deployable = "DEPLOYABLE"
,    Discovery = "DISCOVERY"
,    AttestationAuthority = "ATTESTATION_AUTHORITY"
,    Upgrade = "UPGRADE"
,    Compliance = "COMPLIANCE"
,    Sbom = "SBOM"
,    SpdxPackage = "SPDX_PACKAGE"
,    SpdxFile = "SPDX_FILE"
,    SpdxRelationship = "SPDX_RELATIONSHIP"
,    DsseAttestation = "DSSE_ATTESTATION"
}


export class ContaineranalysisProjectsOccurrencesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=kind" })
  kind?: ContaineranalysisProjectsOccurrencesListKindEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ContaineranalysisProjectsOccurrencesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ContaineranalysisProjectsOccurrencesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContaineranalysisProjectsOccurrencesListPathParams;

  @Metadata()
  queryParams: ContaineranalysisProjectsOccurrencesListQueryParams;

  @Metadata()
  security: ContaineranalysisProjectsOccurrencesListSecurity;
}


export class ContaineranalysisProjectsOccurrencesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listOccurrencesResponse?: shared.ListOccurrencesResponse;

  @Metadata()
  statusCode: number;
}
