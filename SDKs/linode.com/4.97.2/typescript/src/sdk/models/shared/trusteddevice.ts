import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TrustedDevice
/** 
 * A trusted device object represents an active Remember Me session with <a target="_top" href="https://login.linode.com">login.linode.com</a>.
 * 
**/
export class TrustedDevice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=last_authenticated" })
  lastAuthenticated?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_remote_addr" })
  lastRemoteAddr?: string;

  @SpeakeasyMetadata({ data: "json, name=user_agent" })
  userAgent?: string;
}
