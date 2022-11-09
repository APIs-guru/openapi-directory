import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Replication } from "./replication";


// Secret
/** 
 * A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
**/
export class Secret extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=replication" })
  replication?: Replication;
}
