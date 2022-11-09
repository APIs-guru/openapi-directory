import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SecretVersion } from "./secretversion";


// SecretVolume
/** 
 * Configuration for a secret volume. It has the information necessary to fetch the secret value from secret manager and make it available as files mounted at the requested paths within the application container.
**/
export class SecretVolume extends SpeakeasyBase {
  @Metadata({ data: "json, name=mountPath" })
  mountPath?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=secret" })
  secret?: string;

  @Metadata({ data: "json, name=versions", elemType: shared.SecretVersion })
  versions?: SecretVersion[];
}
