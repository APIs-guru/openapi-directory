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
import { GoogleCloudResourcesettingsV1Value } from "./googlecloudresourcesettingsv1value";
import { GoogleCloudResourcesettingsV1SettingMetadata } from "./googlecloudresourcesettingsv1settingmetadata";
// GoogleCloudResourcesettingsV1Setting
/**
 * The schema for settings.
**/
var GoogleCloudResourcesettingsV1Setting = /** @class */ (function (_super) {
    __extends(GoogleCloudResourcesettingsV1Setting, _super);
    function GoogleCloudResourcesettingsV1Setting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=effectiveValue" }),
        __metadata("design:type", GoogleCloudResourcesettingsV1Value)
    ], GoogleCloudResourcesettingsV1Setting.prototype, "effectiveValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], GoogleCloudResourcesettingsV1Setting.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=localValue" }),
        __metadata("design:type", GoogleCloudResourcesettingsV1Value)
    ], GoogleCloudResourcesettingsV1Setting.prototype, "localValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", GoogleCloudResourcesettingsV1SettingMetadata)
    ], GoogleCloudResourcesettingsV1Setting.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudResourcesettingsV1Setting.prototype, "name", void 0);
    return GoogleCloudResourcesettingsV1Setting;
}(SpeakeasyBase));
export { GoogleCloudResourcesettingsV1Setting };
