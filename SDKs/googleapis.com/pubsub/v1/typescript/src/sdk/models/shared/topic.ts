import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MessageStoragePolicy } from "./messagestoragepolicy";
import { SchemaSettings } from "./schemasettings";



// Topic
/** 
 * A topic resource.
**/
export class Topic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kmsKeyName" })
  kmsKeyName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=messageRetentionDuration" })
  messageRetentionDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=messageStoragePolicy" })
  messageStoragePolicy?: MessageStoragePolicy;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=satisfiesPzs" })
  satisfiesPzs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=schemaSettings" })
  schemaSettings?: SchemaSettings;
}
