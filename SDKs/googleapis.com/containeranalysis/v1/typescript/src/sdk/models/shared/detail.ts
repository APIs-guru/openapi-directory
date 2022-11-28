import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";



// Detail
/** 
 * A detail for a distro and package affected by this vulnerability and its associated fix (if one is available).
**/
export class Detail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=affectedCpeUri" })
  affectedCpeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=affectedPackage" })
  affectedPackage?: string;

  @SpeakeasyMetadata({ data: "json, name=affectedVersionEnd" })
  affectedVersionEnd?: Version;

  @SpeakeasyMetadata({ data: "json, name=affectedVersionStart" })
  affectedVersionStart?: Version;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fixedCpeUri" })
  fixedCpeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=fixedPackage" })
  fixedPackage?: string;

  @SpeakeasyMetadata({ data: "json, name=fixedVersion" })
  fixedVersion?: Version;

  @SpeakeasyMetadata({ data: "json, name=isObsolete" })
  isObsolete?: boolean;

  @SpeakeasyMetadata({ data: "json, name=packageType" })
  packageType?: string;

  @SpeakeasyMetadata({ data: "json, name=severityName" })
  severityName?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceUpdateTime" })
  sourceUpdateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=vendor" })
  vendor?: string;
}
