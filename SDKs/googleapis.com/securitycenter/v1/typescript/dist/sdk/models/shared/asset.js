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
import { IamPolicy } from "./iampolicy";
import { SecurityCenterProperties } from "./securitycenterproperties";
import { SecurityMarks } from "./securitymarks";
// Asset
/**
 * Security Command Center representation of a Google Cloud resource. The Asset is a Security Command Center resource that captures information about a single Google Cloud resource. All modifications to an Asset are only within the context of Security Command Center and don't affect the referenced Google Cloud resource.
**/
var Asset = /** @class */ (function (_super) {
    __extends(Asset, _super);
    function Asset() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=canonicalName" }),
        __metadata("design:type", String)
    ], Asset.prototype, "canonicalName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], Asset.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iamPolicy" }),
        __metadata("design:type", IamPolicy)
    ], Asset.prototype, "iamPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Asset.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resourceProperties" }),
        __metadata("design:type", Map)
    ], Asset.prototype, "resourceProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityCenterProperties" }),
        __metadata("design:type", SecurityCenterProperties)
    ], Asset.prototype, "securityCenterProperties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=securityMarks" }),
        __metadata("design:type", SecurityMarks)
    ], Asset.prototype, "securityMarks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updateTime" }),
        __metadata("design:type", String)
    ], Asset.prototype, "updateTime", void 0);
    return Asset;
}(SpeakeasyBase));
export { Asset };
