import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CisBenchmarkSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Minimal = "MINIMAL"
,    Low = "LOW"
,    Medium = "MEDIUM"
,    High = "HIGH"
,    Critical = "CRITICAL"
}


// CisBenchmark
/** 
 * A compliance check that is a CIS benchmark.
**/
export class CisBenchmark extends SpeakeasyBase {
  @Metadata({ data: "json, name=profileLevel" })
  profileLevel?: number;

  @Metadata({ data: "json, name=severity" })
  severity?: CisBenchmarkSeverityEnum;
}
