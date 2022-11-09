import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Version } from "./version";
import { GrafeasV1FileLocation } from "./grafeasv1filelocation";
import { Version } from "./version";

export enum PackageIssueEffectiveSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Minimal = "MINIMAL"
,    Low = "LOW"
,    Medium = "MEDIUM"
,    High = "HIGH"
,    Critical = "CRITICAL"
}


// PackageIssue
/** 
 * A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).
**/
export class PackageIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=affectedCpeUri" })
  affectedCpeUri?: string;

  @Metadata({ data: "json, name=affectedPackage" })
  affectedPackage?: string;

  @Metadata({ data: "json, name=affectedVersion" })
  affectedVersion?: Version;

  @Metadata({ data: "json, name=effectiveSeverity" })
  effectiveSeverity?: PackageIssueEffectiveSeverityEnum;

  @Metadata({ data: "json, name=fileLocation", elemType: shared.GrafeasV1FileLocation })
  fileLocation?: GrafeasV1FileLocation[];

  @Metadata({ data: "json, name=fixAvailable" })
  fixAvailable?: boolean;

  @Metadata({ data: "json, name=fixedCpeUri" })
  fixedCpeUri?: string;

  @Metadata({ data: "json, name=fixedPackage" })
  fixedPackage?: string;

  @Metadata({ data: "json, name=fixedVersion" })
  fixedVersion?: Version;

  @Metadata({ data: "json, name=packageType" })
  packageType?: string;
}
