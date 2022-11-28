import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1EntityCompatibilityStatus } from "./googleclouddataplexv1entitycompatibilitystatus";
import { GoogleCloudDataplexV1StorageFormat } from "./googleclouddataplexv1storageformat";
import { GoogleCloudDataplexV1Schema } from "./googleclouddataplexv1schema";
import { GoogleCloudDataplexV1StorageFormatInput } from "./googleclouddataplexv1storageformat";
export declare enum GoogleCloudDataplexV1EntitySystemEnum {
    StorageSystemUnspecified = "STORAGE_SYSTEM_UNSPECIFIED",
    CloudStorage = "CLOUD_STORAGE",
    Bigquery = "BIGQUERY"
}
export declare enum GoogleCloudDataplexV1EntityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Table = "TABLE",
    Fileset = "FILESET"
}
/**
 * Represents tables and fileset metadata contained within a zone.
**/
export declare class GoogleCloudDataplexV1Entity extends SpeakeasyBase {
    asset?: string;
    catalogEntry?: string;
    compatibility?: GoogleCloudDataplexV1EntityCompatibilityStatus;
    createTime?: string;
    dataPath?: string;
    dataPathPattern?: string;
    description?: string;
    displayName?: string;
    etag?: string;
    format?: GoogleCloudDataplexV1StorageFormat;
    id?: string;
    name?: string;
    schema?: GoogleCloudDataplexV1Schema;
    system?: GoogleCloudDataplexV1EntitySystemEnum;
    type?: GoogleCloudDataplexV1EntityTypeEnum;
    updateTime?: string;
}
/**
 * Represents tables and fileset metadata contained within a zone.
**/
export declare class GoogleCloudDataplexV1EntityInput extends SpeakeasyBase {
    asset?: string;
    compatibility?: GoogleCloudDataplexV1EntityCompatibilityStatus;
    dataPath?: string;
    dataPathPattern?: string;
    description?: string;
    displayName?: string;
    etag?: string;
    format?: GoogleCloudDataplexV1StorageFormatInput;
    id?: string;
    schema?: GoogleCloudDataplexV1Schema;
    system?: GoogleCloudDataplexV1EntitySystemEnum;
    type?: GoogleCloudDataplexV1EntityTypeEnum;
}
