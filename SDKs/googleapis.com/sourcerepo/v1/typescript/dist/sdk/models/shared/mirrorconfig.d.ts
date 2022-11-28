import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration to automatically mirror a repository from another hosting service, for example GitHub or Bitbucket.
**/
export declare class MirrorConfig extends SpeakeasyBase {
    deployKeyId?: string;
    url?: string;
    webhookId?: string;
}
