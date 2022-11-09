import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Identity
/** 
 * Represents an email address, a profile on networks like github and twitter, or a record in another system.
**/
export class Identity extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=source" })
  source: string;

  @Metadata({ data: "json, name=source_host" })
  sourceHost?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
