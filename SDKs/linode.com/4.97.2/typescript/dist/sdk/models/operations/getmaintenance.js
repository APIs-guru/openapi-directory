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
export var GetMaintenanceServerList = [
    "https://api.linode.com/v4beta",
];
var GetMaintenanceSecurity = /** @class */ (function (_super) {
    __extends(GetMaintenanceSecurity, _super);
    function GetMaintenanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetMaintenanceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetMaintenanceSecurity.prototype, "oauth", void 0);
    return GetMaintenanceSecurity;
}(SpeakeasyBase));
export { GetMaintenanceSecurity };
var GetMaintenance200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetMaintenance200ApplicationJson, _super);
    function GetMaintenance200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Maintenance }),
        __metadata("design:type", Array)
    ], GetMaintenance200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetMaintenance200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetMaintenance200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetMaintenance200ApplicationJson.prototype, "results", void 0);
    return GetMaintenance200ApplicationJson;
}(SpeakeasyBase));
export { GetMaintenance200ApplicationJson };
var GetMaintenanceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetMaintenanceDefaultApplicationJson, _super);
    function GetMaintenanceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetMaintenanceDefaultApplicationJson.prototype, "errors", void 0);
    return GetMaintenanceDefaultApplicationJson;
}(SpeakeasyBase));
export { GetMaintenanceDefaultApplicationJson };
var GetMaintenanceRequest = /** @class */ (function (_super) {
    __extends(GetMaintenanceRequest, _super);
    function GetMaintenanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMaintenanceRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMaintenanceSecurity)
    ], GetMaintenanceRequest.prototype, "security", void 0);
    return GetMaintenanceRequest;
}(SpeakeasyBase));
export { GetMaintenanceRequest };
var GetMaintenanceResponse = /** @class */ (function (_super) {
    __extends(GetMaintenanceResponse, _super);
    function GetMaintenanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMaintenanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMaintenanceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMaintenance200ApplicationJson)
    ], GetMaintenanceResponse.prototype, "getMaintenance200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMaintenanceDefaultApplicationJson)
    ], GetMaintenanceResponse.prototype, "getMaintenanceDefaultApplicationJsonObject", void 0);
    return GetMaintenanceResponse;
}(SpeakeasyBase));
export { GetMaintenanceResponse };
