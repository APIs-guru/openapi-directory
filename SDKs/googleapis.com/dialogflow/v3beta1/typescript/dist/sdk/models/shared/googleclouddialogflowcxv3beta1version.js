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
import { GoogleCloudDialogflowCxV3beta1NluSettings } from "./googleclouddialogflowcxv3beta1nlusettings";
export var GoogleCloudDialogflowCxV3beta1VersionStateEnum;
(function (GoogleCloudDialogflowCxV3beta1VersionStateEnum) {
    GoogleCloudDialogflowCxV3beta1VersionStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    GoogleCloudDialogflowCxV3beta1VersionStateEnum["Running"] = "RUNNING";
    GoogleCloudDialogflowCxV3beta1VersionStateEnum["Succeeded"] = "SUCCEEDED";
    GoogleCloudDialogflowCxV3beta1VersionStateEnum["Failed"] = "FAILED";
})(GoogleCloudDialogflowCxV3beta1VersionStateEnum || (GoogleCloudDialogflowCxV3beta1VersionStateEnum = {}));
// GoogleCloudDialogflowCxV3beta1VersionInput
/**
 * Represents a version of a flow.
**/
var GoogleCloudDialogflowCxV3beta1VersionInput = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1VersionInput, _super);
    function GoogleCloudDialogflowCxV3beta1VersionInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1VersionInput.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1VersionInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1VersionInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nluSettings" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1NluSettings)
    ], GoogleCloudDialogflowCxV3beta1VersionInput.prototype, "nluSettings", void 0);
    return GoogleCloudDialogflowCxV3beta1VersionInput;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1VersionInput };
// GoogleCloudDialogflowCxV3beta1Version
/**
 * Represents a version of a flow.
**/
var GoogleCloudDialogflowCxV3beta1Version = /** @class */ (function (_super) {
    __extends(GoogleCloudDialogflowCxV3beta1Version, _super);
    function GoogleCloudDialogflowCxV3beta1Version() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Version.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Version.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Version.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Version.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=nluSettings" }),
        __metadata("design:type", GoogleCloudDialogflowCxV3beta1NluSettings)
    ], GoogleCloudDialogflowCxV3beta1Version.prototype, "nluSettings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], GoogleCloudDialogflowCxV3beta1Version.prototype, "state", void 0);
    return GoogleCloudDialogflowCxV3beta1Version;
}(SpeakeasyBase));
export { GoogleCloudDialogflowCxV3beta1Version };
