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
import { Folder } from "./folder";
// SecurityCenterProperties
/**
 * Security Command Center managed properties. These properties are managed by Security Command Center and cannot be modified by the user.
**/
var SecurityCenterProperties = /** @class */ (function (_super) {
    __extends(SecurityCenterProperties, _super);
    function SecurityCenterProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folders", elemType: Folder }),
        __metadata("design:type", Array)
    ], SecurityCenterProperties.prototype, "folders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceDisplayName" }),
        __metadata("design:type", String)
    ], SecurityCenterProperties.prototype, "resourceDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceName" }),
        __metadata("design:type", String)
    ], SecurityCenterProperties.prototype, "resourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceOwners" }),
        __metadata("design:type", Array)
    ], SecurityCenterProperties.prototype, "resourceOwners", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceParent" }),
        __metadata("design:type", String)
    ], SecurityCenterProperties.prototype, "resourceParent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceParentDisplayName" }),
        __metadata("design:type", String)
    ], SecurityCenterProperties.prototype, "resourceParentDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceProject" }),
        __metadata("design:type", String)
    ], SecurityCenterProperties.prototype, "resourceProject", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceProjectDisplayName" }),
        __metadata("design:type", String)
    ], SecurityCenterProperties.prototype, "resourceProjectDisplayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceType" }),
        __metadata("design:type", String)
    ], SecurityCenterProperties.prototype, "resourceType", void 0);
    return SecurityCenterProperties;
}(SpeakeasyBase));
export { SecurityCenterProperties };
