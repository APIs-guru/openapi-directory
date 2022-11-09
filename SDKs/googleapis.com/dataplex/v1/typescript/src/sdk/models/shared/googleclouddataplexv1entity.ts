import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDataplexV1EntityCompatibilityStatus } from "./googleclouddataplexv1entitycompatibilitystatus";
import { GoogleCloudDataplexV1StorageFormat } from "./googleclouddataplexv1storageformat";
import { GoogleCloudDataplexV1Schema } from "./googleclouddataplexv1schema";

export enum GoogleCloudDataplexV1EntitySystemEnum {
    StorageSystemUnspecified = "STORAGE_SYSTEM_UNSPECIFIED"
,    CloudStorage = "CLOUD_STORAGE"
,    Bigquery = "BIGQUERY"
}

export enum GoogleCloudDataplexV1EntityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    Table = "TABLE"
,    Fileset = "FILESET"
}


// GoogleCloudDataplexV1Entity
/** 
 * Represents tables and fileset metadata contained within a zone.
**/
export class GoogleCloudDataplexV1Entity extends SpeakeasyBase {
  @Metadata({ data: "json, name=asset" })
  asset?: string;

  @Metadata({ data: "json, name=catalogEntry" })
  catalogEntry?: string;

  @Metadata({ data: "json, name=compatibility" })
  compatibility?: GoogleCloudDataplexV1EntityCompatibilityStatus;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=dataPath" })
  dataPath?: string;

  @Metadata({ data: "json, name=dataPathPattern" })
  dataPathPattern?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=format" })
  format?: GoogleCloudDataplexV1StorageFormat;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: GoogleCloudDataplexV1Schema;

  @Metadata({ data: "json, name=system" })
  system?: GoogleCloudDataplexV1EntitySystemEnum;

  @Metadata({ data: "json, name=type" })
  type?: GoogleCloudDataplexV1EntityTypeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
