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
import * as shared from "../shared";
var GetSnowMonkeyConfigSecurity = /** @class */ (function (_super) {
    __extends(GetSnowMonkeyConfigSecurity, _super);
    function GetSnowMonkeyConfigSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeOtoroshiAuth)
    ], GetSnowMonkeyConfigSecurity.prototype, "otoroshiAuth", void 0);
    return GetSnowMonkeyConfigSecurity;
}(SpeakeasyBase));
export { GetSnowMonkeyConfigSecurity };
var GetSnowMonkeyConfigRequest = /** @class */ (function (_super) {
    __extends(GetSnowMonkeyConfigRequest, _super);
    function GetSnowMonkeyConfigRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSnowMonkeyConfigSecurity)
    ], GetSnowMonkeyConfigRequest.prototype, "security", void 0);
    return GetSnowMonkeyConfigRequest;
}(SpeakeasyBase));
export { GetSnowMonkeyConfigRequest };
var GetSnowMonkeyConfigResponse = /** @class */ (function (_super) {
    __extends(GetSnowMonkeyConfigResponse, _super);
    function GetSnowMonkeyConfigResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSnowMonkeyConfigResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SnowMonkeyConfig)
    ], GetSnowMonkeyConfigResponse.prototype, "snowMonkeyConfig", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSnowMonkeyConfigResponse.prototype, "statusCode", void 0);
    return GetSnowMonkeyConfigResponse;
}(SpeakeasyBase));
export { GetSnowMonkeyConfigResponse };
