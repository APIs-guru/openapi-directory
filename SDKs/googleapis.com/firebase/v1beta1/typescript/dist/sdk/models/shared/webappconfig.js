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
// WebAppConfig
/**
 * Configuration metadata of a single Firebase App for the web.
**/
var WebAppConfig = /** @class */ (function (_super) {
    __extends(WebAppConfig, _super);
    function WebAppConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=apiKey" }),
        __metadata("design:type", String)
    ], WebAppConfig.prototype, "apiKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appId" }),
        __metadata("design:type", String)
    ], WebAppConfig.prototype, "appId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authDomain" }),
        __metadata("design:type", String)
    ], WebAppConfig.prototype, "authDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=databaseURL" }),
        __metadata("design:type", String)
    ], WebAppConfig.prototype, "databaseUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=locationId" }),
        __metadata("design:type", String)
    ], WebAppConfig.prototype, "locationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=measurementId" }),
        __metadata("design:type", String)
    ], WebAppConfig.prototype, "measurementId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=messagingSenderId" }),
        __metadata("design:type", String)
    ], WebAppConfig.prototype, "messagingSenderId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=projectId" }),
        __metadata("design:type", String)
    ], WebAppConfig.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=storageBucket" }),
        __metadata("design:type", String)
    ], WebAppConfig.prototype, "storageBucket", void 0);
    return WebAppConfig;
}(SpeakeasyBase));
export { WebAppConfig };
