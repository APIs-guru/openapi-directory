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
import { Format } from "./format";
import { PresentationParams } from "./presentationparams";
import { RemixInfo } from "./remixinfo";
import { File } from "./file";
export var AssetLicenseEnum;
(function (AssetLicenseEnum) {
    AssetLicenseEnum["Unknown"] = "UNKNOWN";
    AssetLicenseEnum["CreativeCommonsBy"] = "CREATIVE_COMMONS_BY";
    AssetLicenseEnum["AllRightsReserved"] = "ALL_RIGHTS_RESERVED";
})(AssetLicenseEnum || (AssetLicenseEnum = {}));
export var AssetVisibilityEnum;
(function (AssetVisibilityEnum) {
    AssetVisibilityEnum["VisibilityUnspecified"] = "VISIBILITY_UNSPECIFIED";
    AssetVisibilityEnum["Private"] = "PRIVATE";
    AssetVisibilityEnum["Unlisted"] = "UNLISTED";
    AssetVisibilityEnum["Public"] = "PUBLIC";
})(AssetVisibilityEnum || (AssetVisibilityEnum = {}));
// Asset
/**
 * Represents and describes an asset in the Poly library. An asset is a 3D model or scene created using [Tilt Brush](//www.tiltbrush.com), [Blocks](//vr.google.com/blocks/), or any 3D program that produces a file that can be upload to Poly.
**/
var Asset = /** @class */ (function (_super) {
    __extends(Asset, _super);
    function Asset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authorName" }),
        __metadata("design:type", String)
    ], Asset.prototype, "authorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Asset.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], Asset.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], Asset.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formats", elemType: Format }),
        __metadata("design:type", Array)
    ], Asset.prototype, "formats", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isCurated" }),
        __metadata("design:type", Boolean)
    ], Asset.prototype, "isCurated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=license" }),
        __metadata("design:type", String)
    ], Asset.prototype, "license", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", String)
    ], Asset.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Asset.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=presentationParams" }),
        __metadata("design:type", PresentationParams)
    ], Asset.prototype, "presentationParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=remixInfo" }),
        __metadata("design:type", RemixInfo)
    ], Asset.prototype, "remixInfo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnail" }),
        __metadata("design:type", File)
    ], Asset.prototype, "thumbnail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Asset.prototype, "updateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=visibility" }),
        __metadata("design:type", String)
    ], Asset.prototype, "visibility", void 0);
    return Asset;
}(SpeakeasyBase));
export { Asset };
