import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PackageData } from "./packagedata";



// AnalyzePackagesRequestV1
/** 
 * AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.
**/
export class AnalyzePackagesRequestV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeOsvData" })
  includeOsvData?: boolean;

  @SpeakeasyMetadata({ data: "json, name=packages", elemType: PackageData })
  packages?: PackageData[];

  @SpeakeasyMetadata({ data: "json, name=resourceUri" })
  resourceUri?: string;
}
