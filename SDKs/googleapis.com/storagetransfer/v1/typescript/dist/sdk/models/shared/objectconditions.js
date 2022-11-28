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
// ObjectConditions
/**
 * Conditions that determine which objects are transferred. Applies only to Cloud Data Sources such as S3, Azure, and Cloud Storage. The "last modification time" refers to the time of the last change to the object's content or metadata — specifically, this is the `updated` property of Cloud Storage objects, the `LastModified` field of S3 objects, and the `Last-Modified` header of Azure blobs. Transfers with a PosixFilesystem source or destination don't support `ObjectConditions`.
**/
var ObjectConditions = /** @class */ (function (_super) {
    __extends(ObjectConditions, _super);
    function ObjectConditions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=excludePrefixes" }),
        __metadata("design:type", Array)
    ], ObjectConditions.prototype, "excludePrefixes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=includePrefixes" }),
        __metadata("design:type", Array)
    ], ObjectConditions.prototype, "includePrefixes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedBefore" }),
        __metadata("design:type", String)
    ], ObjectConditions.prototype, "lastModifiedBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedSince" }),
        __metadata("design:type", String)
    ], ObjectConditions.prototype, "lastModifiedSince", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxTimeElapsedSinceLastModification" }),
        __metadata("design:type", String)
    ], ObjectConditions.prototype, "maxTimeElapsedSinceLastModification", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minTimeElapsedSinceLastModification" }),
        __metadata("design:type", String)
    ], ObjectConditions.prototype, "minTimeElapsedSinceLastModification", void 0);
    return ObjectConditions;
}(SpeakeasyBase));
export { ObjectConditions };
