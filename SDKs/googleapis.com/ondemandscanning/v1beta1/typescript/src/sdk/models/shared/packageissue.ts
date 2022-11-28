import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";
import { GrafeasV1FileLocation } from "./grafeasv1filelocation";


export enum PackageIssueEffectiveSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Minimal = "MINIMAL",
    Low = "LOW",
    Medium = "MEDIUM",
    High = "HIGH",
    Critical = "CRITICAL"
}


// PackageIssue
/** 
 * A detail for a distro and package this vulnerability occurrence was found in and its associated fix (if one is available).
**/
export class PackageIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=affectedCpeUri" })
  affectedCpeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=affectedPackage" })
  affectedPackage?: string;

  @SpeakeasyMetadata({ data: "json, name=affectedVersion" })
  affectedVersion?: Version;

  @SpeakeasyMetadata({ data: "json, name=effectiveSeverity" })
  effectiveSeverity?: PackageIssueEffectiveSeverityEnum;

  @SpeakeasyMetadata({ data: "json, name=fileLocation", elemType: GrafeasV1FileLocation })
  fileLocation?: GrafeasV1FileLocation[];

  @SpeakeasyMetadata({ data: "json, name=fixAvailable" })
  fixAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=fixedCpeUri" })
  fixedCpeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=fixedPackage" })
  fixedPackage?: string;

  @SpeakeasyMetadata({ data: "json, name=fixedVersion" })
  fixedVersion?: Version;

  @SpeakeasyMetadata({ data: "json, name=packageType" })
  packageType?: string;
}
