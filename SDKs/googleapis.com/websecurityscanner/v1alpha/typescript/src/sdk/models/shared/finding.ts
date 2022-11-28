import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OutdatedLibrary } from "./outdatedlibrary";
import { ViolatingResource } from "./violatingresource";
import { VulnerableHeaders } from "./vulnerableheaders";
import { VulnerableParameters } from "./vulnerableparameters";
import { Xss } from "./xss";


export enum FindingFindingTypeEnum {
    FindingTypeUnspecified = "FINDING_TYPE_UNSPECIFIED",
    MixedContent = "MIXED_CONTENT",
    OutdatedLibrary = "OUTDATED_LIBRARY",
    RosettaFlash = "ROSETTA_FLASH",
    XssCallback = "XSS_CALLBACK",
    XssError = "XSS_ERROR",
    ClearTextPassword = "CLEAR_TEXT_PASSWORD",
    InvalidContentType = "INVALID_CONTENT_TYPE",
    XssAngularCallback = "XSS_ANGULAR_CALLBACK",
    InvalidHeader = "INVALID_HEADER",
    MisspelledSecurityHeaderName = "MISSPELLED_SECURITY_HEADER_NAME",
    MismatchingSecurityHeaderValues = "MISMATCHING_SECURITY_HEADER_VALUES"
}


// Finding
/** 
 * A Finding resource represents a vulnerability instance identified during a ScanRun.
**/
export class Finding extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=finalUrl" })
  finalUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=findingType" })
  findingType?: FindingFindingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=frameUrl" })
  frameUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=fuzzedUrl" })
  fuzzedUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=httpMethod" })
  httpMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=outdatedLibrary" })
  outdatedLibrary?: OutdatedLibrary;

  @SpeakeasyMetadata({ data: "json, name=reproductionUrl" })
  reproductionUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingId" })
  trackingId?: string;

  @SpeakeasyMetadata({ data: "json, name=violatingResource" })
  violatingResource?: ViolatingResource;

  @SpeakeasyMetadata({ data: "json, name=vulnerableHeaders" })
  vulnerableHeaders?: VulnerableHeaders;

  @SpeakeasyMetadata({ data: "json, name=vulnerableParameters" })
  vulnerableParameters?: VulnerableParameters;

  @SpeakeasyMetadata({ data: "json, name=xss" })
  xss?: Xss;
}
