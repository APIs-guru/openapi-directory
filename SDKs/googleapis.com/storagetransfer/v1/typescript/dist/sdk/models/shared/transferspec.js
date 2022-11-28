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
import { AwsS3CompatibleData } from "./awss3compatibledata";
import { AwsS3Data } from "./awss3data";
import { AzureBlobStorageData } from "./azureblobstoragedata";
import { GcsData } from "./gcsdata";
import { HttpData } from "./httpdata";
import { ObjectConditions } from "./objectconditions";
import { PosixFilesystem } from "./posixfilesystem";
import { TransferManifest } from "./transfermanifest";
import { TransferOptions } from "./transferoptions";
// TransferSpec
/**
 * Configuration for running a transfer.
**/
var TransferSpec = /** @class */ (function (_super) {
    __extends(TransferSpec, _super);
    function TransferSpec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsS3CompatibleDataSource" }),
        __metadata("design:type", AwsS3CompatibleData)
    ], TransferSpec.prototype, "awsS3CompatibleDataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=awsS3DataSource" }),
        __metadata("design:type", AwsS3Data)
    ], TransferSpec.prototype, "awsS3DataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=azureBlobStorageDataSource" }),
        __metadata("design:type", AzureBlobStorageData)
    ], TransferSpec.prototype, "azureBlobStorageDataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcsDataSink" }),
        __metadata("design:type", GcsData)
    ], TransferSpec.prototype, "gcsDataSink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcsDataSource" }),
        __metadata("design:type", GcsData)
    ], TransferSpec.prototype, "gcsDataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=gcsIntermediateDataLocation" }),
        __metadata("design:type", GcsData)
    ], TransferSpec.prototype, "gcsIntermediateDataLocation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=httpDataSource" }),
        __metadata("design:type", HttpData)
    ], TransferSpec.prototype, "httpDataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=objectConditions" }),
        __metadata("design:type", ObjectConditions)
    ], TransferSpec.prototype, "objectConditions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posixDataSink" }),
        __metadata("design:type", PosixFilesystem)
    ], TransferSpec.prototype, "posixDataSink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=posixDataSource" }),
        __metadata("design:type", PosixFilesystem)
    ], TransferSpec.prototype, "posixDataSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sinkAgentPoolName" }),
        __metadata("design:type", String)
    ], TransferSpec.prototype, "sinkAgentPoolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sourceAgentPoolName" }),
        __metadata("design:type", String)
    ], TransferSpec.prototype, "sourceAgentPoolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferManifest" }),
        __metadata("design:type", TransferManifest)
    ], TransferSpec.prototype, "transferManifest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=transferOptions" }),
        __metadata("design:type", TransferOptions)
    ], TransferSpec.prototype, "transferOptions", void 0);
    return TransferSpec;
}(SpeakeasyBase));
export { TransferSpec };
