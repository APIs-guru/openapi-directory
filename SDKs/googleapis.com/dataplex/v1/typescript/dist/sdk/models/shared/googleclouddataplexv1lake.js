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
import { GoogleCloudDataplexV1AssetStatus } from "./googleclouddataplexv1assetstatus";
import { GoogleCloudDataplexV1LakeMetastore } from "./googleclouddataplexv1lakemetastore";
import { GoogleCloudDataplexV1LakeMetastoreStatus } from "./googleclouddataplexv1lakemetastorestatus";
export var GoogleCloudDataplexV1LakeStateEnum;
(function (GoogleCloudDataplexV1LakeStateEnum) {
    GoogleCloudDataplexV1LakeStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDataplexV1LakeStateEnum["Active"] = "ACTIVE";
    GoogleCloudDataplexV1LakeStateEnum["Creating"] = "CREATING";
    GoogleCloudDataplexV1LakeStateEnum["Deleting"] = "DELETING";
    GoogleCloudDataplexV1LakeStateEnum["ActionRequired"] = "ACTION_REQUIRED";
})(GoogleCloudDataplexV1LakeStateEnum || (GoogleCloudDataplexV1LakeStateEnum = {}));
// GoogleCloudDataplexV1LakeInput
/**
 * A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.
**/
var GoogleCloudDataplexV1LakeInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1LakeInput, _super);
    function GoogleCloudDataplexV1LakeInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetStatus" }),
        __metadata("design:type", GoogleCloudDataplexV1AssetStatus)
    ], GoogleCloudDataplexV1LakeInput.prototype, "assetStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1LakeInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1LakeInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudDataplexV1LakeInput.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metastore" }),
        __metadata("design:type", GoogleCloudDataplexV1LakeMetastore)
    ], GoogleCloudDataplexV1LakeInput.prototype, "metastore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metastoreStatus" }),
        __metadata("design:type", GoogleCloudDataplexV1LakeMetastoreStatus)
    ], GoogleCloudDataplexV1LakeInput.prototype, "metastoreStatus", void 0);
    return GoogleCloudDataplexV1LakeInput;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1LakeInput };
// GoogleCloudDataplexV1Lake
/**
 * A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.
**/
var GoogleCloudDataplexV1Lake = /** @class */ (function (_super) {
    __extends(GoogleCloudDataplexV1Lake, _super);
    function GoogleCloudDataplexV1Lake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetStatus" }),
        __metadata("design:type", GoogleCloudDataplexV1AssetStatus)
    ], GoogleCloudDataplexV1Lake.prototype, "assetStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Lake.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Lake.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Lake.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GoogleCloudDataplexV1Lake.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metastore" }),
        __metadata("design:type", GoogleCloudDataplexV1LakeMetastore)
    ], GoogleCloudDataplexV1Lake.prototype, "metastore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metastoreStatus" }),
        __metadata("design:type", GoogleCloudDataplexV1LakeMetastoreStatus)
    ], GoogleCloudDataplexV1Lake.prototype, "metastoreStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Lake.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=serviceAccount" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Lake.prototype, "serviceAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Lake.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uid" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Lake.prototype, "uid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDataplexV1Lake.prototype, "updateTime", void 0);
    return GoogleCloudDataplexV1Lake;
}(SpeakeasyBase));
export { GoogleCloudDataplexV1Lake };
