import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OutdatedLibrary } from "./outdatedlibrary";
import { ViolatingResource } from "./violatingresource";
import { VulnerableHeaders } from "./vulnerableheaders";
import { VulnerableParameters } from "./vulnerableparameters";
import { Xss } from "./xss";

export enum FindingFindingTypeEnum {
    FindingTypeUnspecified = "FINDING_TYPE_UNSPECIFIED"
,    MixedContent = "MIXED_CONTENT"
,    OutdatedLibrary = "OUTDATED_LIBRARY"
,    RosettaFlash = "ROSETTA_FLASH"
,    XssCallback = "XSS_CALLBACK"
,    XssError = "XSS_ERROR"
,    ClearTextPassword = "CLEAR_TEXT_PASSWORD"
,    InvalidContentType = "INVALID_CONTENT_TYPE"
,    XssAngularCallback = "XSS_ANGULAR_CALLBACK"
,    InvalidHeader = "INVALID_HEADER"
,    MisspelledSecurityHeaderName = "MISSPELLED_SECURITY_HEADER_NAME"
,    MismatchingSecurityHeaderValues = "MISMATCHING_SECURITY_HEADER_VALUES"
}


// Finding
/** 
 * A Finding resource represents a vulnerability instance identified during a ScanRun.
**/
export class Finding extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=finalUrl" })
  finalUrl?: string;

  @Metadata({ data: "json, name=findingType" })
  findingType?: FindingFindingTypeEnum;

  @Metadata({ data: "json, name=frameUrl" })
  frameUrl?: string;

  @Metadata({ data: "json, name=fuzzedUrl" })
  fuzzedUrl?: string;

  @Metadata({ data: "json, name=httpMethod" })
  httpMethod?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=outdatedLibrary" })
  outdatedLibrary?: OutdatedLibrary;

  @Metadata({ data: "json, name=reproductionUrl" })
  reproductionUrl?: string;

  @Metadata({ data: "json, name=trackingId" })
  trackingId?: string;

  @Metadata({ data: "json, name=violatingResource" })
  violatingResource?: ViolatingResource;

  @Metadata({ data: "json, name=vulnerableHeaders" })
  vulnerableHeaders?: VulnerableHeaders;

  @Metadata({ data: "json, name=vulnerableParameters" })
  vulnerableParameters?: VulnerableParameters;

  @Metadata({ data: "json, name=xss" })
  xss?: Xss;
}
