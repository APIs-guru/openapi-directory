import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudChannelV1CustomerConstraints } from "./googlecloudchannelv1customerconstraints";


// GoogleCloudChannelV1Constraints
/** 
 * Represents the constraints for buying the Offer.
**/
export class GoogleCloudChannelV1Constraints extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerConstraints" })
  customerConstraints?: GoogleCloudChannelV1CustomerConstraints;
}
