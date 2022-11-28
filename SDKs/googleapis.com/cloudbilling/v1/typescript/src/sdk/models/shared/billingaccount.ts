import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BillingAccount
/** 
 * A billing account in the [Google Cloud Console](https://console.cloud.google.com/). You can assign a billing account to one or more projects.
**/
export class BillingAccount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=masterBillingAccount" })
  masterBillingAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=open" })
  open?: boolean;
}


// BillingAccountInput
/** 
 * A billing account in the [Google Cloud Console](https://console.cloud.google.com/). You can assign a billing account to one or more projects.
**/
export class BillingAccountInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=masterBillingAccount" })
  masterBillingAccount?: string;
}
