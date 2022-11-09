import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BillingAccount
/** 
 * A billing account in the [Google Cloud Console](https://console.cloud.google.com/). You can assign a billing account to one or more projects.
**/
export class BillingAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=masterBillingAccount" })
  masterBillingAccount?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=open" })
  open?: boolean;
}
