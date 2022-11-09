import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Status } from "./status";


// AppDevExperienceFeatureState
/** 
 * State for App Dev Exp Feature.
**/
export class AppDevExperienceFeatureState extends SpeakeasyBase {
  @Metadata({ data: "json, name=networkingInstallSucceeded" })
  networkingInstallSucceeded?: Status;
}
