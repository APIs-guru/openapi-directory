import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Form } from "./form";
import { OutdatedLibrary } from "./outdatedlibrary";
import { ViolatingResource } from "./violatingresource";
import { VulnerableHeaders } from "./vulnerableheaders";
import { VulnerableParameters } from "./vulnerableparameters";
import { Xss } from "./xss";
import { Xxe } from "./xxe";


export enum FindingSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Critical = "CRITICAL",
    High = "HIGH",
    Medium = "MEDIUM",
    Low = "LOW"
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
  findingType?: string;

  @SpeakeasyMetadata({ data: "json, name=form" })
  form?: Form;

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

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: FindingSeverityEnum;

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

  @SpeakeasyMetadata({ data: "json, name=xxe" })
  xxe?: Xxe;
}
