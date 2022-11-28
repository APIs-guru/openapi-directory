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
var GetJsappsCodeJsonPathParams = /** @class */ (function (_super) {
    __extends(GetJsappsCodeJsonPathParams, _super);
    function GetJsappsCodeJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=code" }),
        __metadata("design:type", String)
    ], GetJsappsCodeJsonPathParams.prototype, "code", void 0);
    return GetJsappsCodeJsonPathParams;
}(SpeakeasyBase));
export { GetJsappsCodeJsonPathParams };
var GetJsappsCodeJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetJsappsCodeJsonQueryParams, _super);
    function GetJsappsCodeJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=authtoken" }),
        __metadata("design:type", String)
    ], GetJsappsCodeJsonQueryParams.prototype, "authtoken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=login" }),
        __metadata("design:type", String)
    ], GetJsappsCodeJsonQueryParams.prototype, "login", void 0);
    return GetJsappsCodeJsonQueryParams;
}(SpeakeasyBase));
export { GetJsappsCodeJsonQueryParams };
var GetJsappsCodeJsonRequest = /** @class */ (function (_super) {
    __extends(GetJsappsCodeJsonRequest, _super);
    function GetJsappsCodeJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJsappsCodeJsonPathParams)
    ], GetJsappsCodeJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetJsappsCodeJsonQueryParams)
    ], GetJsappsCodeJsonRequest.prototype, "queryParams", void 0);
    return GetJsappsCodeJsonRequest;
}(SpeakeasyBase));
export { GetJsappsCodeJsonRequest };
var GetJsappsCodeJsonResponse = /** @class */ (function (_super) {
    __extends(GetJsappsCodeJsonResponse, _super);
    function GetJsappsCodeJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetJsappsCodeJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.JsApp)
    ], GetJsappsCodeJsonResponse.prototype, "jsApp", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetJsappsCodeJsonResponse.prototype, "statusCode", void 0);
    return GetJsappsCodeJsonResponse;
}(SpeakeasyBase));
export { GetJsappsCodeJsonResponse };
