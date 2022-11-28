import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ContaineranalysisProjectsOccurrencesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum ContaineranalysisProjectsOccurrencesListKindEnum {
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


export class ContaineranalysisProjectsOccurrencesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=kind" })
  kind?: ContaineranalysisProjectsOccurrencesListKindEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ContaineranalysisProjectsOccurrencesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ContaineranalysisProjectsOccurrencesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContaineranalysisProjectsOccurrencesListPathParams;

  @SpeakeasyMetadata()
  queryParams: ContaineranalysisProjectsOccurrencesListQueryParams;

  @SpeakeasyMetadata()
  security: ContaineranalysisProjectsOccurrencesListSecurity;
}


export class ContaineranalysisProjectsOccurrencesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listOccurrencesResponse?: shared.ListOccurrencesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
