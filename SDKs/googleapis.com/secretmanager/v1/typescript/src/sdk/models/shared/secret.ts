import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Replication } from "./replication";
import { Rotation } from "./rotation";
import { Topic } from "./topic";



// Secret
/** 
 * A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
**/
export class Secret extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=replication" })
  replication?: Replication;

  @SpeakeasyMetadata({ data: "json, name=rotation" })
  rotation?: Rotation;

  @SpeakeasyMetadata({ data: "json, name=topics", elemType: Topic })
  topics?: Topic[];

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;

  @SpeakeasyMetadata({ data: "json, name=versionAliases" })
  versionAliases?: Map<string, string>;
}


// SecretInput
/** 
 * A Secret is a logical secret whose value and versions can be accessed. A Secret is made up of zero or more SecretVersions that represent the secret data.
**/
export class SecretInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=replication" })
  replication?: Replication;

  @SpeakeasyMetadata({ data: "json, name=rotation" })
  rotation?: Rotation;

  @SpeakeasyMetadata({ data: "json, name=topics", elemType: Topic })
  topics?: Topic[];

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;

  @SpeakeasyMetadata({ data: "json, name=versionAliases" })
  versionAliases?: Map<string, string>;
}
