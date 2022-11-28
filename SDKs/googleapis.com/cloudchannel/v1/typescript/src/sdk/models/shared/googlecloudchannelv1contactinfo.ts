import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudChannelV1ContactInfo
/** 
 * Contact information for a customer account.
**/
export class GoogleCloudChannelV1ContactInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}


// GoogleCloudChannelV1ContactInfoInput
/** 
 * Contact information for a customer account.
**/
export class GoogleCloudChannelV1ContactInfoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
