var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AzureCredentials } from "./azurecredentials";
// AzureBlobStorageData
/**
 * An AzureBlobStorageData resource can be a data source, but not a data sink. An AzureBlobStorageData resource represents one Azure container. The storage account determines the [Azure endpoint](https://docs.microsoft.com/en-us/azure/storage/common/storage-create-storage-account#storage-account-endpoints). In an AzureBlobStorageData resource, a blobs's name is the [Azure Blob Storage blob's key name](https://docs.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata#blob-names).
**/
var AzureBlobStorageData = /** @class */ (function (_super) {
    __extends(AzureBlobStorageData, _super);
    function AzureBlobStorageData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=azureCredentials" }),
        __metadata("design:type", AzureCredentials)
    ], AzureBlobStorageData.prototype, "azureCredentials", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=container" }),
        __metadata("design:type", String)
    ], AzureBlobStorageData.prototype, "container", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=path" }),
        __metadata("design:type", String)
    ], AzureBlobStorageData.prototype, "path", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageAccount" }),
        __metadata("design:type", String)
    ], AzureBlobStorageData.prototype, "storageAccount", void 0);
    return AzureBlobStorageData;
}(SpeakeasyBase));
export { AzureBlobStorageData };
