import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VulnerabilityLocation } from "./vulnerabilitylocation";
import { Version } from "./version";



// Detail
/** 
 * Identifies all occurrences of this vulnerability in the package for a specific distro/location For example: glibc in cpe:/o:debian:debian_linux:8 for versions 2.1 - 2.2
**/
export class Detail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fixedLocation" })
  fixedLocation?: VulnerabilityLocation;

  @SpeakeasyMetadata({ data: "json, name=isObsolete" })
  isObsolete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxAffectedVersion" })
  maxAffectedVersion?: Version;

  @SpeakeasyMetadata({ data: "json, name=minAffectedVersion" })
  minAffectedVersion?: Version;

  @SpeakeasyMetadata({ data: "json, name=package" })
  package?: string;

  @SpeakeasyMetadata({ data: "json, name=packageType" })
  packageType?: string;

  @SpeakeasyMetadata({ data: "json, name=severityName" })
  severityName?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=vendor" })
  vendor?: string;
}
