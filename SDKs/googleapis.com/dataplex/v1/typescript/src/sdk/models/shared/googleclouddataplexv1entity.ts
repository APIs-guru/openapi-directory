import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1EntityCompatibilityStatus } from "./googleclouddataplexv1entitycompatibilitystatus";
import { GoogleCloudDataplexV1StorageFormat } from "./googleclouddataplexv1storageformat";
import { GoogleCloudDataplexV1Schema } from "./googleclouddataplexv1schema";
import { GoogleCloudDataplexV1StorageFormatInput } from "./googleclouddataplexv1storageformat";


export enum GoogleCloudDataplexV1EntitySystemEnum {
    StorageSystemUnspecified = "STORAGE_SYSTEM_UNSPECIFIED",
    CloudStorage = "CLOUD_STORAGE",
    Bigquery = "BIGQUERY"
}

export enum GoogleCloudDataplexV1EntityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Table = "TABLE",
    Fileset = "FILESET"
}


// GoogleCloudDataplexV1Entity
/** 
 * Represents tables and fileset metadata contained within a zone.
**/
export class GoogleCloudDataplexV1Entity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset" })
  asset?: string;

  @SpeakeasyMetadata({ data: "json, name=catalogEntry" })
  catalogEntry?: string;

  @SpeakeasyMetadata({ data: "json, name=compatibility" })
  compatibility?: GoogleCloudDataplexV1EntityCompatibilityStatus;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=dataPath" })
  dataPath?: string;

  @SpeakeasyMetadata({ data: "json, name=dataPathPattern" })
  dataPathPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: GoogleCloudDataplexV1StorageFormat;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: GoogleCloudDataplexV1Schema;

  @SpeakeasyMetadata({ data: "json, name=system" })
  system?: GoogleCloudDataplexV1EntitySystemEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDataplexV1EntityTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// GoogleCloudDataplexV1EntityInput
/** 
 * Represents tables and fileset metadata contained within a zone.
**/
export class GoogleCloudDataplexV1EntityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=asset" })
  asset?: string;

  @SpeakeasyMetadata({ data: "json, name=compatibility" })
  compatibility?: GoogleCloudDataplexV1EntityCompatibilityStatus;

  @SpeakeasyMetadata({ data: "json, name=dataPath" })
  dataPath?: string;

  @SpeakeasyMetadata({ data: "json, name=dataPathPattern" })
  dataPathPattern?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: GoogleCloudDataplexV1StorageFormatInput;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: GoogleCloudDataplexV1Schema;

  @SpeakeasyMetadata({ data: "json, name=system" })
  system?: GoogleCloudDataplexV1EntitySystemEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDataplexV1EntityTypeEnum;
}
