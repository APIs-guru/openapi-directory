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
export var ExternalRefCategoryEnum;
(function (ExternalRefCategoryEnum) {
    ExternalRefCategoryEnum["CategoryUnspecified"] = "CATEGORY_UNSPECIFIED";
    ExternalRefCategoryEnum["Security"] = "SECURITY";
    ExternalRefCategoryEnum["PackageManager"] = "PACKAGE_MANAGER";
    ExternalRefCategoryEnum["PersistentId"] = "PERSISTENT_ID";
    ExternalRefCategoryEnum["Other"] = "OTHER";
})(ExternalRefCategoryEnum || (ExternalRefCategoryEnum = {}));
// ExternalRef
/**
 * An External Reference allows a Package to reference an external source of additional information, metadata, enumerations, asset identifiers, or downloadable content believed to be relevant to the Package
**/
var ExternalRef = /** @class */ (function (_super) {
    __extends(ExternalRef, _super);
    function ExternalRef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], ExternalRef.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comment" }),
        __metadata("design:type", String)
    ], ExternalRef.prototype, "comment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locator" }),
        __metadata("design:type", String)
    ], ExternalRef.prototype, "locator", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ExternalRef.prototype, "type", void 0);
    return ExternalRef;
}(SpeakeasyBase));
export { ExternalRef };
