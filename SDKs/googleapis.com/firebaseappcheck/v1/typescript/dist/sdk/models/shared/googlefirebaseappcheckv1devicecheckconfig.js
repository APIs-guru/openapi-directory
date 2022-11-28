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
// GoogleFirebaseAppcheckV1DeviceCheckConfig
/**
 * An app's DeviceCheck configuration object. This configuration is used by ExchangeDeviceCheckToken to validate device tokens issued to apps by DeviceCheck. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.iosApps/patch).
**/
var GoogleFirebaseAppcheckV1DeviceCheckConfig = /** @class */ (function (_super) {
    __extends(GoogleFirebaseAppcheckV1DeviceCheckConfig, _super);
    function GoogleFirebaseAppcheckV1DeviceCheckConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=keyId" }),
        __metadata("design:type", String)
    ], GoogleFirebaseAppcheckV1DeviceCheckConfig.prototype, "keyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleFirebaseAppcheckV1DeviceCheckConfig.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateKey" }),
        __metadata("design:type", String)
    ], GoogleFirebaseAppcheckV1DeviceCheckConfig.prototype, "privateKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=privateKeySet" }),
        __metadata("design:type", Boolean)
    ], GoogleFirebaseAppcheckV1DeviceCheckConfig.prototype, "privateKeySet", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tokenTtl" }),
        __metadata("design:type", String)
    ], GoogleFirebaseAppcheckV1DeviceCheckConfig.prototype, "tokenTtl", void 0);
    return GoogleFirebaseAppcheckV1DeviceCheckConfig;
}(SpeakeasyBase));
export { GoogleFirebaseAppcheckV1DeviceCheckConfig };
