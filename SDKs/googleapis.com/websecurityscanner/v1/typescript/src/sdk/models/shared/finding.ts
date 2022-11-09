import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Form } from "./form";
import { OutdatedLibrary } from "./outdatedlibrary";
import { ViolatingResource } from "./violatingresource";
import { VulnerableHeaders } from "./vulnerableheaders";
import { VulnerableParameters } from "./vulnerableparameters";
import { Xss } from "./xss";
import { Xxe } from "./xxe";

export enum FindingSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Critical = "CRITICAL"
,    High = "HIGH"
,    Medium = "MEDIUM"
,    Low = "LOW"
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
  findingType?: string;

  @Metadata({ data: "json, name=form" })
  form?: Form;

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

  @Metadata({ data: "json, name=severity" })
  severity?: FindingSeverityEnum;

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

  @Metadata({ data: "json, name=xxe" })
  xxe?: Xxe;
}
