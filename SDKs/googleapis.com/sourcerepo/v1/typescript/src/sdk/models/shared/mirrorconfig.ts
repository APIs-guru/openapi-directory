import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MirrorConfig
/** 
 * Configuration to automatically mirror a repository from another hosting service, for example GitHub or Bitbucket.
**/
export class MirrorConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=deployKeyId" })
  deployKeyId?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=webhookId" })
  webhookId?: string;
}
