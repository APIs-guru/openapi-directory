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
var GetManagedServicesSecurity = /** @class */ (function (_super) {
    __extends(GetManagedServicesSecurity, _super);
    function GetManagedServicesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetManagedServicesSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetManagedServicesSecurity.prototype, "oauth", void 0);
    return GetManagedServicesSecurity;
}(SpeakeasyBase));
export { GetManagedServicesSecurity };
var GetManagedServices200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetManagedServices200ApplicationJson, _super);
    function GetManagedServices200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ManagedService }),
        __metadata("design:type", Array)
    ], GetManagedServices200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetManagedServices200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetManagedServices200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetManagedServices200ApplicationJson.prototype, "results", void 0);
    return GetManagedServices200ApplicationJson;
}(SpeakeasyBase));
export { GetManagedServices200ApplicationJson };
var GetManagedServicesDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetManagedServicesDefaultApplicationJson, _super);
    function GetManagedServicesDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetManagedServicesDefaultApplicationJson.prototype, "errors", void 0);
    return GetManagedServicesDefaultApplicationJson;
}(SpeakeasyBase));
export { GetManagedServicesDefaultApplicationJson };
var GetManagedServicesRequest = /** @class */ (function (_super) {
    __extends(GetManagedServicesRequest, _super);
    function GetManagedServicesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedServicesSecurity)
    ], GetManagedServicesRequest.prototype, "security", void 0);
    return GetManagedServicesRequest;
}(SpeakeasyBase));
export { GetManagedServicesRequest };
var GetManagedServicesResponse = /** @class */ (function (_super) {
    __extends(GetManagedServicesResponse, _super);
    function GetManagedServicesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetManagedServicesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetManagedServicesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedServices200ApplicationJson)
    ], GetManagedServicesResponse.prototype, "getManagedServices200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedServicesDefaultApplicationJson)
    ], GetManagedServicesResponse.prototype, "getManagedServicesDefaultApplicationJsonObject", void 0);
    return GetManagedServicesResponse;
}(SpeakeasyBase));
export { GetManagedServicesResponse };
