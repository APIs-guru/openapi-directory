import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PackageData } from "./packagedata";



// AnalyzePackagesRequest
/** 
 * AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.
**/
export class AnalyzePackagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=packages", elemType: PackageData })
  packages?: PackageData[];

  @SpeakeasyMetadata({ data: "json, name=resourceUri" })
  resourceUri?: string;
}
