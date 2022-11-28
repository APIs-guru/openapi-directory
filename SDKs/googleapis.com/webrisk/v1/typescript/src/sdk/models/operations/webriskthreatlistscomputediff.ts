import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum {
    CompressionTypeUnspecified = "COMPRESSION_TYPE_UNSPECIFIED",
    Raw = "RAW",
    Rice = "RICE"
}

export enum WebriskThreatListsComputeDiffThreatTypeEnum {
    ThreatTypeUnspecified = "THREAT_TYPE_UNSPECIFIED",
    Malware = "MALWARE",
    SocialEngineering = "SOCIAL_ENGINEERING",
    UnwantedSoftware = "UNWANTED_SOFTWARE",
    SocialEngineeringExtendedCoverage = "SOCIAL_ENGINEERING_EXTENDED_COVERAGE"
}


export class WebriskThreatListsComputeDiffQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=constraints.maxDatabaseEntries" })
  constraintsMaxDatabaseEntries?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=constraints.maxDiffEntries" })
  constraintsMaxDiffEntries?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=constraints.supportedCompressions" })
  constraintsSupportedCompressions?: WebriskThreatListsComputeDiffConstraintsSupportedCompressionsEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=threatType" })
  threatType?: WebriskThreatListsComputeDiffThreatTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=versionToken" })
  versionToken?: string;
}


export class WebriskThreatListsComputeDiffSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class WebriskThreatListsComputeDiffRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: WebriskThreatListsComputeDiffQueryParams;

  @SpeakeasyMetadata()
  security: WebriskThreatListsComputeDiffSecurity;
}


export class WebriskThreatListsComputeDiffResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudWebriskV1ComputeThreatListDiffResponse?: shared.GoogleCloudWebriskV1ComputeThreatListDiffResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
