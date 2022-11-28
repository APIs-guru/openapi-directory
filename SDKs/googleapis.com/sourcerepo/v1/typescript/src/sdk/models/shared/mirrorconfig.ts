import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MirrorConfig
/** 
 * Configuration to automatically mirror a repository from another hosting service, for example GitHub or Bitbucket.
**/
export class MirrorConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deployKeyId" })
  deployKeyId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookId" })
  webhookId?: string;
}
