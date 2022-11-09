import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Replication } from "./replication";
import { Rotation } from "./rotation";
import { Topic } from "./topic";


// Secret
/** 
 * A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
**/
export class Secret extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=replication" })
  replication?: Replication;

  @Metadata({ data: "json, name=rotation" })
  rotation?: Rotation;

  @Metadata({ data: "json, name=topics", elemType: shared.Topic })
  topics?: Topic[];

  @Metadata({ data: "json, name=ttl" })
  ttl?: string;

  @Metadata({ data: "json, name=versionAliases" })
  versionAliases?: Map<string, string>;
}
