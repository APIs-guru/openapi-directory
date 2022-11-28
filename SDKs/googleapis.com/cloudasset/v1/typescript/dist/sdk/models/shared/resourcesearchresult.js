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
import { AttachedResource } from "./attachedresource";
import { RelatedResources } from "./relatedresources";
import { VersionedResource } from "./versionedresource";
// ResourceSearchResult
/**
 * A result of Resource Search, containing information of a cloud resource. Next ID: 31
**/
var ResourceSearchResult = /** @class */ (function (_super) {
    __extends(ResourceSearchResult, _super);
    function ResourceSearchResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=additionalAttributes" }),
        __metadata("design:type", Map)
    ], ResourceSearchResult.prototype, "additionalAttributes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=assetType" }),
        __metadata("design:type", String)
    ], ResourceSearchResult.prototype, "assetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachedResources", elemType: AttachedResource }),
        __metadata("design:type", Array)
    ], ResourceSearchResult.prototype, "attachedResources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], ResourceSearchResult.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], ResourceSearchResult.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], ResourceSearchResult.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folders" }),
        __metadata("design:type", Array)
    ], ResourceSearchResult.prototype, "folders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsKey" }),
        __metadata("design:type", String)
    ], ResourceSearchResult.prototype, "kmsKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kmsKeys" }),
        __metadata("design:type", Array)
    ], ResourceSearchResult.prototype, "kmsKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], ResourceSearchResult.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=location" }),
        __metadata("design:type", String)
    ], ResourceSearchResult.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ResourceSearchResult.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkTags" }),
        __metadata("design:type", Array)
    ], ResourceSearchResult.prototype, "networkTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization" }),
        __metadata("design:type", String)
    ], ResourceSearchResult.prototype, "organization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentAssetType" }),
        __metadata("design:type", String)
    ], ResourceSearchResult.prototype, "parentAssetType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parentFullResourceName" }),
        __metadata("design:type", String)
    ], ResourceSearchResult.prototype, "parentFullResourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=project" }),
        __metadata("design:type", String)
    ], ResourceSearchResult.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=relationships", elemType: RelatedResources }),
        __metadata("design:type", Map)
    ], ResourceSearchResult.prototype, "relationships", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], ResourceSearchResult.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagKeys" }),
        __metadata("design:type", Array)
    ], ResourceSearchResult.prototype, "tagKeys", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagValueIds" }),
        __metadata("design:type", Array)
    ], ResourceSearchResult.prototype, "tagValueIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tagValues" }),
        __metadata("design:type", Array)
    ], ResourceSearchResult.prototype, "tagValues", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], ResourceSearchResult.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=versionedResources", elemType: VersionedResource }),
        __metadata("design:type", Array)
    ], ResourceSearchResult.prototype, "versionedResources", void 0);
    return ResourceSearchResult;
}(SpeakeasyBase));
export { ResourceSearchResult };
