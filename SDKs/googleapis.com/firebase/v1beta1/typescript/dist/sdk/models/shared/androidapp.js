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
export var AndroidAppStateEnum;
(function (AndroidAppStateEnum) {
    AndroidAppStateEnum["StateUnspecified"] = "STATE_UNSPECIFIED";
    AndroidAppStateEnum["Active"] = "ACTIVE";
    AndroidAppStateEnum["Deleted"] = "DELETED";
})(AndroidAppStateEnum || (AndroidAppStateEnum = {}));
// AndroidApp
/**
 * Details of a Firebase App for Android.
**/
var AndroidApp = /** @class */ (function (_super) {
    __extends(AndroidApp, _super);
    function AndroidApp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiKeyId" }),
        __metadata("design:type", String)
    ], AndroidApp.prototype, "apiKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], AndroidApp.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], AndroidApp.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AndroidApp.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageName" }),
        __metadata("design:type", String)
    ], AndroidApp.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], AndroidApp.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha1Hashes" }),
        __metadata("design:type", Array)
    ], AndroidApp.prototype, "sha1Hashes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha256Hashes" }),
        __metadata("design:type", Array)
    ], AndroidApp.prototype, "sha256Hashes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], AndroidApp.prototype, "state", void 0);
    return AndroidApp;
}(SpeakeasyBase));
export { AndroidApp };
// AndroidAppInput
/**
 * Details of a Firebase App for Android.
**/
var AndroidAppInput = /** @class */ (function (_super) {
    __extends(AndroidAppInput, _super);
    function AndroidAppInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiKeyId" }),
        __metadata("design:type", String)
    ], AndroidAppInput.prototype, "apiKeyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], AndroidAppInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AndroidAppInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=packageName" }),
        __metadata("design:type", String)
    ], AndroidAppInput.prototype, "packageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha1Hashes" }),
        __metadata("design:type", Array)
    ], AndroidAppInput.prototype, "sha1Hashes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sha256Hashes" }),
        __metadata("design:type", Array)
    ], AndroidAppInput.prototype, "sha256Hashes", void 0);
    return AndroidAppInput;
}(SpeakeasyBase));
export { AndroidAppInput };
