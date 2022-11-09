import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum {
    CompressionTypeUnspecified = "COMPRESSION_TYPE_UNSPECIFIED"
,    Raw = "RAW"
,    Rice = "RICE"
}

export enum WebriskThreatListsComputeDiffThreatTypeEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED"
,    Malware = "MALWARE"
,    SocialEngineering = "SOCIAL_ENGINEERING"
,    UnwantedSoftware = "UNWANTED_SOFTWARE"
,    SocialEngineeringExtendedCoverage = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
}


export class WebriskThreatListsComputeDiffQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=constraints.maxDatabaseEntries" })
  constraintsMaxDatabaseEntries?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=constraints.maxDiffEntries" })
  constraintsMaxDiffEntries?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=constraints.supportedCompressions" })
  constraintsSupportedCompressions?: WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=threatType" })
  threatType?: WebriskThreatListsComputeDiffThreatTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=versionToken" })
  versionToken?: string;
}


export class WebriskThreatListsComputeDiffSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class WebriskThreatListsComputeDiffRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: WebriskThreatListsComputeDiffQueryParams;

  @Metadata()
  security: WebriskThreatListsComputeDiffSecurity;
}


export class WebriskThreatListsComputeDiffResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  googleCloudWebriskV1ComputeThreatListDiffResponse?: shared.GoogleCloudWebriskV1ComputeThreatListDiffResponse;

  @Metadata()
  statusCode: number;
}
