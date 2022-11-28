import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Installation } from "./installation";
import { InstallationInput } from "./installation";



// GrafeasV1beta1PackageDetails
/** 
 * Details of a package occurrence.
**/
export class GrafeasV1beta1PackageDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=installation" })
  installation?: Installation;
}


// GrafeasV1beta1PackageDetailsInput
/** 
 * Details of a package occurrence.
**/
export class GrafeasV1beta1PackageDetailsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=installation" })
  installation?: InstallationInput;
}
