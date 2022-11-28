import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Identity
/** 
 * Represents an email address, a profile on networks like github and twitter, or a record in another system.
**/
export class Identity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: string;

  @SpeakeasyMetadata({ data: "json, name=source_host" })
  sourceHost?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
