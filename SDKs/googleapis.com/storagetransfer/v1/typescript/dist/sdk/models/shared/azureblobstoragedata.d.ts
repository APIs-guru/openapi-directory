import { SpeakeasyBase } from "../../../internal/utils";
import { AzureCredentials } from "./azurecredentials";
/**
 * An AzureBlobStorageData resource can be a data source, but not a data sink. An AzureBlobStorageData resource represents one Azure container. The storage account determines the [Azure endpoint](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints). In an AzureBlobStorageData resource, a blobs's name is the [Azure Blob Storage blob's key name](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names).
**/
export declare class AzureBlobStorageData extends SpeakeasyBase {
    azureCredentials?: AzureCredentials;
    container?: string;
    path?: string;
    storageAccount?: string;
}
