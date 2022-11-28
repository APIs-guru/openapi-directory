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
var GetDevicesSecurity = /** @class */ (function (_super) {
    __extends(GetDevicesSecurity, _super);
    function GetDevicesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetDevicesSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetDevicesSecurity.prototype, "oauth", void 0);
    return GetDevicesSecurity;
}(SpeakeasyBase));
export { GetDevicesSecurity };
var GetDevices200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetDevices200ApplicationJson, _super);
    function GetDevices200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.TrustedDevice }),
        __metadata("design:type", Array)
    ], GetDevices200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetDevices200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetDevices200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetDevices200ApplicationJson.prototype, "results", void 0);
    return GetDevices200ApplicationJson;
}(SpeakeasyBase));
export { GetDevices200ApplicationJson };
var GetDevicesDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetDevicesDefaultApplicationJson, _super);
    function GetDevicesDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetDevicesDefaultApplicationJson.prototype, "errors", void 0);
    return GetDevicesDefaultApplicationJson;
}(SpeakeasyBase));
export { GetDevicesDefaultApplicationJson };
var GetDevicesRequest = /** @class */ (function (_super) {
    __extends(GetDevicesRequest, _super);
    function GetDevicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDevicesSecurity)
    ], GetDevicesRequest.prototype, "security", void 0);
    return GetDevicesRequest;
}(SpeakeasyBase));
export { GetDevicesRequest };
var GetDevicesResponse = /** @class */ (function (_super) {
    __extends(GetDevicesResponse, _super);
    function GetDevicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetDevicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetDevicesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDevices200ApplicationJson)
    ], GetDevicesResponse.prototype, "getDevices200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetDevicesDefaultApplicationJson)
    ], GetDevicesResponse.prototype, "getDevicesDefaultApplicationJsonObject", void 0);
    return GetDevicesResponse;
}(SpeakeasyBase));
export { GetDevicesResponse };
