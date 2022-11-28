import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CisBenchmarkSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Minimal = "MINIMAL",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}


// CisBenchmark
/** 
 * A compliance check that is a CIS benchmark.
**/
export class CisBenchmark extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profileLevel" })
  profileLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: CisBenchmarkSeverityEnum;
}
