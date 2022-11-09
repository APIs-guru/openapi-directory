import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PackageData } from "./packagedata";


// AnalyzePackagesRequestV1
/** 
 * AnalyzePackagesRequest is the request to analyze a list of packages and create Vulnerability Occurrences for it.
**/
export class AnalyzePackagesRequestV1 extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeOsvData" })
  includeOsvData?: boolean;

  @Metadata({ data: "json, name=packages", elemType: shared.PackageData })
  packages?: PackageData[];

  @Metadata({ data: "json, name=resourceUri" })
  resourceUri?: string;
}
