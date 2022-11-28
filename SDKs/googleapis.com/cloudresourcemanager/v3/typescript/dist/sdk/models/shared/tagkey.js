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
export var TagKeyPurposeEnum;
(function (TagKeyPurposeEnum) {
    TagKeyPurposeEnum["PurposeUnspecified"] = "PURPOSE_UNSPECIFIED";
    TagKeyPurposeEnum["GceFirewall"] = "GCE_FIREWALL";
})(TagKeyPurposeEnum || (TagKeyPurposeEnum = {}));
// TagKeyInput
/**
 * A TagKey, used to group a set of TagValues.
**/
var TagKeyInput = /** @class */ (function (_super) {
    __extends(TagKeyInput, _super);
    function TagKeyInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TagKeyInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], TagKeyInput.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TagKeyInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], TagKeyInput.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purpose" }),
        __metadata("design:type", String)
    ], TagKeyInput.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purposeData" }),
        __metadata("design:type", Map)
    ], TagKeyInput.prototype, "purposeData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortName" }),
        __metadata("design:type", String)
    ], TagKeyInput.prototype, "shortName", void 0);
    return TagKeyInput;
}(SpeakeasyBase));
export { TagKeyInput };
// TagKey
/**
 * A TagKey, used to group a set of TagValues.
**/
var TagKey = /** @class */ (function (_super) {
    __extends(TagKey, _super);
    function TagKey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], TagKey.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], TagKey.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], TagKey.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], TagKey.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=namespacedName" }),
        __metadata("design:type", String)
    ], TagKey.prototype, "namespacedName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parent" }),
        __metadata("design:type", String)
    ], TagKey.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purpose" }),
        __metadata("design:type", String)
    ], TagKey.prototype, "purpose", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=purposeData" }),
        __metadata("design:type", Map)
    ], TagKey.prototype, "purposeData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shortName" }),
        __metadata("design:type", String)
    ], TagKey.prototype, "shortName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], TagKey.prototype, "updateTime", void 0);
    return TagKey;
}(SpeakeasyBase));
export { TagKey };
