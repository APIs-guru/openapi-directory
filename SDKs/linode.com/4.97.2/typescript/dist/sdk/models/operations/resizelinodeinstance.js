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
var ResizeLinodeInstancePathParams = /** @class */ (function (_super) {
    __extends(ResizeLinodeInstancePathParams, _super);
    function ResizeLinodeInstancePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" }),
        __metadata("design:type", Number)
    ], ResizeLinodeInstancePathParams.prototype, "linodeId", void 0);
    return ResizeLinodeInstancePathParams;
}(SpeakeasyBase));
export { ResizeLinodeInstancePathParams };
var ResizeLinodeInstanceRequestBody = /** @class */ (function (_super) {
    __extends(ResizeLinodeInstanceRequestBody, _super);
    function ResizeLinodeInstanceRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_auto_disk_resize" }),
        __metadata("design:type", Boolean)
    ], ResizeLinodeInstanceRequestBody.prototype, "allowAutoDiskResize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ResizeLinodeInstanceRequestBody.prototype, "type", void 0);
    return ResizeLinodeInstanceRequestBody;
}(SpeakeasyBase));
export { ResizeLinodeInstanceRequestBody };
var ResizeLinodeInstanceSecurity = /** @class */ (function (_super) {
    __extends(ResizeLinodeInstanceSecurity, _super);
    function ResizeLinodeInstanceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], ResizeLinodeInstanceSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], ResizeLinodeInstanceSecurity.prototype, "oauth", void 0);
    return ResizeLinodeInstanceSecurity;
}(SpeakeasyBase));
export { ResizeLinodeInstanceSecurity };
var ResizeLinodeInstanceDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(ResizeLinodeInstanceDefaultApplicationJson, _super);
    function ResizeLinodeInstanceDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], ResizeLinodeInstanceDefaultApplicationJson.prototype, "errors", void 0);
    return ResizeLinodeInstanceDefaultApplicationJson;
}(SpeakeasyBase));
export { ResizeLinodeInstanceDefaultApplicationJson };
var ResizeLinodeInstanceRequest = /** @class */ (function (_super) {
    __extends(ResizeLinodeInstanceRequest, _super);
    function ResizeLinodeInstanceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResizeLinodeInstancePathParams)
    ], ResizeLinodeInstanceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ResizeLinodeInstanceRequestBody)
    ], ResizeLinodeInstanceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResizeLinodeInstanceSecurity)
    ], ResizeLinodeInstanceRequest.prototype, "security", void 0);
    return ResizeLinodeInstanceRequest;
}(SpeakeasyBase));
export { ResizeLinodeInstanceRequest };
var ResizeLinodeInstanceResponse = /** @class */ (function (_super) {
    __extends(ResizeLinodeInstanceResponse, _super);
    function ResizeLinodeInstanceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ResizeLinodeInstanceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ResizeLinodeInstanceResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ResizeLinodeInstanceResponse.prototype, "resizeLinodeInstance200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ResizeLinodeInstanceDefaultApplicationJson)
    ], ResizeLinodeInstanceResponse.prototype, "resizeLinodeInstanceDefaultApplicationJsonObject", void 0);
    return ResizeLinodeInstanceResponse;
}(SpeakeasyBase));
export { ResizeLinodeInstanceResponse };
