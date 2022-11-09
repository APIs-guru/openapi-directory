import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudChannelV1ContactInfo
/** 
 * Contact information for a customer account.
**/
export class GoogleCloudChannelV1ContactInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
