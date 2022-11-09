import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrustedDevice
/** 
 * A trusted device object represents an active Remember Me session with <a target="_top" href="https://login.linode.com">login.linode.com</a>.
 * 
**/
export class TrustedDevice extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=expiry" })
  expiry?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_authenticated" })
  lastAuthenticated?: Date;

  @Metadata({ data: "json, name=last_remote_addr" })
  lastRemoteAddr?: string;

  @Metadata({ data: "json, name=user_agent" })
  userAgent?: string;
}
