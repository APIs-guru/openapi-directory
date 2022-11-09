import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageStoragePolicy } from "./messagestoragepolicy";
import { SchemaSettings } from "./schemasettings";


// Topic
/** 
 * A topic resource.
**/
export class Topic extends SpeakeasyBase {
  @Metadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=messageRetentionDuration" })
  messageRetentionDuration?: string;

  @Metadata({ data: "json, name=messageStoragePolicy" })
  messageStoragePolicy?: MessageStoragePolicy;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=satisfiesPzs" })
  satisfiesPzs?: boolean;

  @Metadata({ data: "json, name=schemaSettings" })
  schemaSettings?: SchemaSettings;
}
