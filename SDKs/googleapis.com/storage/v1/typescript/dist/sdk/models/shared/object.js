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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
// ObjectCustomerEncryption
/**
 * Metadata of customer-supplied encryption key, if the object is encrypted by such a key.
**/
var ObjectCustomerEncryption = /** @class */ (function (_super) {
    __extends(ObjectCustomerEncryption, _super);
    function ObjectCustomerEncryption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=encryptionAlgorithm" }),
        __metadata("design:type", String)
    ], ObjectCustomerEncryption.prototype, "encryptionAlgorithm", void 0);
    __decorate([
        Metadata({ data: "json, name=keySha256" }),
        __metadata("design:type", String)
    ], ObjectCustomerEncryption.prototype, "keySha256", void 0);
    return ObjectCustomerEncryption;
}(SpeakeasyBase));
export { ObjectCustomerEncryption };
// ObjectOwner
/**
 * The owner of the object. This will always be the uploader of the object.
**/
var ObjectOwner = /** @class */ (function (_super) {
    __extends(ObjectOwner, _super);
    function ObjectOwner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=entity" }),
        __metadata("design:type", String)
    ], ObjectOwner.prototype, "entity", void 0);
    __decorate([
        Metadata({ data: "json, name=entityId" }),
        __metadata("design:type", String)
    ], ObjectOwner.prototype, "entityId", void 0);
    return ObjectOwner;
}(SpeakeasyBase));
export { ObjectOwner };
// Object
/**
 * An object.
**/
var Object = /** @class */ (function (_super) {
    __extends(Object, _super);
    function Object() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=acl", elemType: shared.ObjectAccessControl }),
        __metadata("design:type", Array)
    ], Object.prototype, "acl", void 0);
    __decorate([
        Metadata({ data: "json, name=bucket" }),
        __metadata("design:type", String)
    ], Object.prototype, "bucket", void 0);
    __decorate([
        Metadata({ data: "json, name=cacheControl" }),
        __metadata("design:type", String)
    ], Object.prototype, "cacheControl", void 0);
    __decorate([
        Metadata({ data: "json, name=componentCount" }),
        __metadata("design:type", Number)
    ], Object.prototype, "componentCount", void 0);
    __decorate([
        Metadata({ data: "json, name=contentDisposition" }),
        __metadata("design:type", String)
    ], Object.prototype, "contentDisposition", void 0);
    __decorate([
        Metadata({ data: "json, name=contentEncoding" }),
        __metadata("design:type", String)
    ], Object.prototype, "contentEncoding", void 0);
    __decorate([
        Metadata({ data: "json, name=contentLanguage" }),
        __metadata("design:type", String)
    ], Object.prototype, "contentLanguage", void 0);
    __decorate([
        Metadata({ data: "json, name=contentType" }),
        __metadata("design:type", String)
    ], Object.prototype, "contentType", void 0);
    __decorate([
        Metadata({ data: "json, name=crc32c" }),
        __metadata("design:type", String)
    ], Object.prototype, "crc32c", void 0);
    __decorate([
        Metadata({ data: "json, name=customTime" }),
        __metadata("design:type", Date)
    ], Object.prototype, "customTime", void 0);
    __decorate([
        Metadata({ data: "json, name=customerEncryption" }),
        __metadata("design:type", ObjectCustomerEncryption)
    ], Object.prototype, "customerEncryption", void 0);
    __decorate([
        Metadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], Object.prototype, "etag", void 0);
    __decorate([
        Metadata({ data: "json, name=eventBasedHold" }),
        __metadata("design:type", Boolean)
    ], Object.prototype, "eventBasedHold", void 0);
    __decorate([
        Metadata({ data: "json, name=generation" }),
        __metadata("design:type", String)
    ], Object.prototype, "generation", void 0);
    __decorate([
        Metadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Object.prototype, "id", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], Object.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=kmsKeyName" }),
        __metadata("design:type", String)
    ], Object.prototype, "kmsKeyName", void 0);
    __decorate([
        Metadata({ data: "json, name=md5Hash" }),
        __metadata("design:type", String)
    ], Object.prototype, "md5Hash", void 0);
    __decorate([
        Metadata({ data: "json, name=mediaLink" }),
        __metadata("design:type", String)
    ], Object.prototype, "mediaLink", void 0);
    __decorate([
        Metadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], Object.prototype, "metadata", void 0);
    __decorate([
        Metadata({ data: "json, name=metageneration" }),
        __metadata("design:type", String)
    ], Object.prototype, "metageneration", void 0);
    __decorate([
        Metadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Object.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "json, name=owner" }),
        __metadata("design:type", ObjectOwner)
    ], Object.prototype, "owner", void 0);
    __decorate([
        Metadata({ data: "json, name=retentionExpirationTime" }),
        __metadata("design:type", Date)
    ], Object.prototype, "retentionExpirationTime", void 0);
    __decorate([
        Metadata({ data: "json, name=selfLink" }),
        __metadata("design:type", String)
    ], Object.prototype, "selfLink", void 0);
    __decorate([
        Metadata({ data: "json, name=size" }),
        __metadata("design:type", String)
    ], Object.prototype, "size", void 0);
    __decorate([
        Metadata({ data: "json, name=storageClass" }),
        __metadata("design:type", String)
    ], Object.prototype, "storageClass", void 0);
    __decorate([
        Metadata({ data: "json, name=temporaryHold" }),
        __metadata("design:type", Boolean)
    ], Object.prototype, "temporaryHold", void 0);
    __decorate([
        Metadata({ data: "json, name=timeCreated" }),
        __metadata("design:type", Date)
    ], Object.prototype, "timeCreated", void 0);
    __decorate([
        Metadata({ data: "json, name=timeDeleted" }),
        __metadata("design:type", Date)
    ], Object.prototype, "timeDeleted", void 0);
    __decorate([
        Metadata({ data: "json, name=timeStorageClassUpdated" }),
        __metadata("design:type", Date)
    ], Object.prototype, "timeStorageClassUpdated", void 0);
    __decorate([
        Metadata({ data: "json, name=updated" }),
        __metadata("design:type", Date)
    ], Object.prototype, "updated", void 0);
    return Object;
}(SpeakeasyBase));
export { Object };
