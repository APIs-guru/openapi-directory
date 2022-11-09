import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Installation } from "./installation";


// GrafeasV1beta1PackageDetails
/** 
 * Details of a package occurrence.
**/
export class GrafeasV1beta1PackageDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=installation" })
  installation?: Installation;
}
