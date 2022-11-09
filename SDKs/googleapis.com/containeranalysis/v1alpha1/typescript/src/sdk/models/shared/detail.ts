import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VulnerabilityLocation } from "./vulnerabilitylocation";
import { Version } from "./version";
import { Version } from "./version";


// Detail
/** 
 * Identifies all occurrences of this vulnerability in the package for a specific distro/location For example: glibc in cpe:/o:debian:debian_linux:8 for versions 2.1 - 2.2
**/
export class Detail extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fixedLocation" })
  fixedLocation?: VulnerabilityLocation;

  @Metadata({ data: "json, name=isObsolete" })
  isObsolete?: boolean;

  @Metadata({ data: "json, name=maxAffectedVersion" })
  maxAffectedVersion?: Version;

  @Metadata({ data: "json, name=minAffectedVersion" })
  minAffectedVersion?: Version;

  @Metadata({ data: "json, name=package" })
  package?: string;

  @Metadata({ data: "json, name=packageType" })
  packageType?: string;

  @Metadata({ data: "json, name=severityName" })
  severityName?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=vendor" })
  vendor?: string;
}
