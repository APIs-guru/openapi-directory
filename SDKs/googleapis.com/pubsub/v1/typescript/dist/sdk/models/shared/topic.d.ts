import { SpeakeasyBase } from "../../../internal/utils/utils";
import { MessageStoragePolicy } from "./messagestoragepolicy";
import { SchemaSettings } from "./schemasettings";
/**
 * A topic resource.
**/
export declare class Topic extends SpeakeasyBase {
    kmsKeyName?: string;
    labels?: Map<string, string>;
    messageRetentionDuration?: string;
    messageStoragePolicy?: MessageStoragePolicy;
    name?: string;
    satisfiesPzs?: boolean;
    schemaSettings?: SchemaSettings;
}
