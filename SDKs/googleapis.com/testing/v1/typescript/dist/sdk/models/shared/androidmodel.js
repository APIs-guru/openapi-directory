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
export var AndroidModelFormEnum;
(function (AndroidModelFormEnum) {
    AndroidModelFormEnum["DeviceFormUnspecified"] = "DEVICE_FORM_UNSPECIFIED";
    AndroidModelFormEnum["Virtual"] = "VIRTUAL";
    AndroidModelFormEnum["Physical"] = "PHYSICAL";
    AndroidModelFormEnum["Emulator"] = "EMULATOR";
})(AndroidModelFormEnum || (AndroidModelFormEnum = {}));
export var AndroidModelFormFactorEnum;
(function (AndroidModelFormFactorEnum) {
    AndroidModelFormFactorEnum["DeviceFormFactorUnspecified"] = "DEVICE_FORM_FACTOR_UNSPECIFIED";
    AndroidModelFormFactorEnum["Phone"] = "PHONE";
    AndroidModelFormFactorEnum["Tablet"] = "TABLET";
    AndroidModelFormFactorEnum["Wearable"] = "WEARABLE";
})(AndroidModelFormFactorEnum || (AndroidModelFormFactorEnum = {}));
// AndroidModel
/**
 * A description of an Android device tests may be run on.
**/
var AndroidModel = /** @class */ (function (_super) {
    __extends(AndroidModel, _super);
    function AndroidModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=brand" }),
        __metadata("design:type", String)
    ], AndroidModel.prototype, "brand", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=codename" }),
        __metadata("design:type", String)
    ], AndroidModel.prototype, "codename", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=form" }),
        __metadata("design:type", String)
    ], AndroidModel.prototype, "form", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=formFactor" }),
        __metadata("design:type", String)
    ], AndroidModel.prototype, "formFactor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AndroidModel.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lowFpsVideoRecording" }),
        __metadata("design:type", Boolean)
    ], AndroidModel.prototype, "lowFpsVideoRecording", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manufacturer" }),
        __metadata("design:type", String)
    ], AndroidModel.prototype, "manufacturer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AndroidModel.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screenDensity" }),
        __metadata("design:type", Number)
    ], AndroidModel.prototype, "screenDensity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screenX" }),
        __metadata("design:type", Number)
    ], AndroidModel.prototype, "screenX", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=screenY" }),
        __metadata("design:type", Number)
    ], AndroidModel.prototype, "screenY", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportedAbis" }),
        __metadata("design:type", Array)
    ], AndroidModel.prototype, "supportedAbis", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=supportedVersionIds" }),
        __metadata("design:type", Array)
    ], AndroidModel.prototype, "supportedVersionIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], AndroidModel.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=thumbnailUrl" }),
        __metadata("design:type", String)
    ], AndroidModel.prototype, "thumbnailUrl", void 0);
    return AndroidModel;
}(SpeakeasyBase));
export { AndroidModel };
