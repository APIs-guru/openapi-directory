import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";



// AppDevExperienceFeatureState
/** 
 * State for App Dev Exp Feature.
**/
export class AppDevExperienceFeatureState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=networkingInstallSucceeded" })
  networkingInstallSucceeded?: Status;
}
