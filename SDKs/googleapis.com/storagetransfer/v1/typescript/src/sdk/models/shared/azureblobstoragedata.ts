import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AzureCredentials } from "./azurecredentials";


// AzureBlobStorageData
/** 
 * An AzureBlobStorageData resource can be a data source, but not a data sink. An AzureBlobStorageData resource represents one Azure container. The storage account determines the [Azure endpoint](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints). In an AzureBlobStorageData resource, a blobs's name is the [Azure Blob Storage blob's key name](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names).
**/
export class AzureBlobStorageData extends SpeakeasyBase {
  @Metadata({ data: "json, name=azureCredentials" })
  azureCredentials?: AzureCredentials;

  @Metadata({ data: "json, name=container" })
  container?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=storageAccount" })
  storageAccount?: string;
}
