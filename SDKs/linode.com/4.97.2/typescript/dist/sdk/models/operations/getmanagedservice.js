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
var GetManagedServicePathParams = /** @class */ (function (_super) {
    __extends(GetManagedServicePathParams, _super);
    function GetManagedServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=serviceId" }),
        __metadata("design:type", Number)
    ], GetManagedServicePathParams.prototype, "serviceId", void 0);
    return GetManagedServicePathParams;
}(SpeakeasyBase));
export { GetManagedServicePathParams };
var GetManagedServiceSecurity = /** @class */ (function (_super) {
    __extends(GetManagedServiceSecurity, _super);
    function GetManagedServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetManagedServiceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetManagedServiceSecurity.prototype, "oauth", void 0);
    return GetManagedServiceSecurity;
}(SpeakeasyBase));
export { GetManagedServiceSecurity };
var GetManagedServiceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetManagedServiceDefaultApplicationJson, _super);
    function GetManagedServiceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetManagedServiceDefaultApplicationJson.prototype, "errors", void 0);
    return GetManagedServiceDefaultApplicationJson;
}(SpeakeasyBase));
export { GetManagedServiceDefaultApplicationJson };
var GetManagedServiceRequest = /** @class */ (function (_super) {
    __extends(GetManagedServiceRequest, _super);
    function GetManagedServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedServicePathParams)
    ], GetManagedServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedServiceSecurity)
    ], GetManagedServiceRequest.prototype, "security", void 0);
    return GetManagedServiceRequest;
}(SpeakeasyBase));
export { GetManagedServiceRequest };
var GetManagedServiceResponse = /** @class */ (function (_super) {
    __extends(GetManagedServiceResponse, _super);
    function GetManagedServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetManagedServiceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagedService)
    ], GetManagedServiceResponse.prototype, "managedService", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetManagedServiceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedServiceDefaultApplicationJson)
    ], GetManagedServiceResponse.prototype, "getManagedServiceDefaultApplicationJsonObject", void 0);
    return GetManagedServiceResponse;
}(SpeakeasyBase));
export { GetManagedServiceResponse };
