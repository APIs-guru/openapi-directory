import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Version } from "./version";
import { Version } from "./version";
import { Version } from "./version";


// Detail
/** 
 * A detail for a distro and package affected by this vulnerability and its associated fix (if one is available).
**/
export class Detail extends SpeakeasyBase {
  @Metadata({ data: "json, name=affectedCpeUri" })
  affectedCpeUri?: string;

  @Metadata({ data: "json, name=affectedPackage" })
  affectedPackage?: string;

  @Metadata({ data: "json, name=affectedVersionEnd" })
  affectedVersionEnd?: Version;

  @Metadata({ data: "json, name=affectedVersionStart" })
  affectedVersionStart?: Version;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fixedCpeUri" })
  fixedCpeUri?: string;

  @Metadata({ data: "json, name=fixedPackage" })
  fixedPackage?: string;

  @Metadata({ data: "json, name=fixedVersion" })
  fixedVersion?: Version;

  @Metadata({ data: "json, name=isObsolete" })
  isObsolete?: boolean;

  @Metadata({ data: "json, name=packageType" })
  packageType?: string;

  @Metadata({ data: "json, name=severityName" })
  severityName?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=sourceUpdateTime" })
  sourceUpdateTime?: string;

  @Metadata({ data: "json, name=vendor" })
  vendor?: string;
}
