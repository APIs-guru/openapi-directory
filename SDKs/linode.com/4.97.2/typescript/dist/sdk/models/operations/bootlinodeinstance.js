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
var BootLinodeInstancePathParams = /** @class */ (function (_super) {
    __extends(BootLinodeInstancePathParams, _super);
    function BootLinodeInstancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], BootLinodeInstancePathParams.prototype, "linodeId", void 0);
    return BootLinodeInstancePathParams;
}(SpeakeasyBase));
export { BootLinodeInstancePathParams };
var BootLinodeInstanceRequestBody = /** @class */ (function (_super) {
    __extends(BootLinodeInstanceRequestBody, _super);
    function BootLinodeInstanceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=config_id" }),
        __metadata("design:type", Number)
    ], BootLinodeInstanceRequestBody.prototype, "configId", void 0);
    return BootLinodeInstanceRequestBody;
}(SpeakeasyBase));
export { BootLinodeInstanceRequestBody };
var BootLinodeInstanceSecurity = /** @class */ (function (_super) {
    __extends(BootLinodeInstanceSecurity, _super);
    function BootLinodeInstanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], BootLinodeInstanceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], BootLinodeInstanceSecurity.prototype, "oauth", void 0);
    return BootLinodeInstanceSecurity;
}(SpeakeasyBase));
export { BootLinodeInstanceSecurity };
var BootLinodeInstanceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(BootLinodeInstanceDefaultApplicationJson, _super);
    function BootLinodeInstanceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], BootLinodeInstanceDefaultApplicationJson.prototype, "errors", void 0);
    return BootLinodeInstanceDefaultApplicationJson;
}(SpeakeasyBase));
export { BootLinodeInstanceDefaultApplicationJson };
var BootLinodeInstanceRequest = /** @class */ (function (_super) {
    __extends(BootLinodeInstanceRequest, _super);
    function BootLinodeInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BootLinodeInstancePathParams)
    ], BootLinodeInstanceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", BootLinodeInstanceRequestBody)
    ], BootLinodeInstanceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BootLinodeInstanceSecurity)
    ], BootLinodeInstanceRequest.prototype, "security", void 0);
    return BootLinodeInstanceRequest;
}(SpeakeasyBase));
export { BootLinodeInstanceRequest };
var BootLinodeInstanceResponse = /** @class */ (function (_super) {
    __extends(BootLinodeInstanceResponse, _super);
    function BootLinodeInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BootLinodeInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BootLinodeInstanceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], BootLinodeInstanceResponse.prototype, "bootLinodeInstance200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BootLinodeInstanceDefaultApplicationJson)
    ], BootLinodeInstanceResponse.prototype, "bootLinodeInstanceDefaultApplicationJsonObject", void 0);
    return BootLinodeInstanceResponse;
}(SpeakeasyBase));
export { BootLinodeInstanceResponse };
