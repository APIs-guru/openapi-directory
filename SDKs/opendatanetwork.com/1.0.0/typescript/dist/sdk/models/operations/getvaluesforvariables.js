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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var GetValuesForVariablesFormatEnum;
(function (GetValuesForVariablesFormatEnum) {
    GetValuesForVariablesFormatEnum["Google"] = "google";
})(GetValuesForVariablesFormatEnum || (GetValuesForVariablesFormatEnum = {}));
var GetValuesForVariablesQueryParams = /** @class */ (function (_super) {
    __extends(GetValuesForVariablesQueryParams, _super);
    function GetValuesForVariablesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=app_token" }),
        __metadata("design:type", String)
    ], GetValuesForVariablesQueryParams.prototype, "appToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=describe" }),
        __metadata("design:type", Boolean)
    ], GetValuesForVariablesQueryParams.prototype, "describe", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=entity_id" }),
        __metadata("design:type", String)
    ], GetValuesForVariablesQueryParams.prototype, "entityId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=forecast" }),
        __metadata("design:type", Number)
    ], GetValuesForVariablesQueryParams.prototype, "forecast", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=format" }),
        __metadata("design:type", String)
    ], GetValuesForVariablesQueryParams.prototype, "format", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=variable" }),
        __metadata("design:type", String)
    ], GetValuesForVariablesQueryParams.prototype, "variable", void 0);
    return GetValuesForVariablesQueryParams;
}(SpeakeasyBase));
export { GetValuesForVariablesQueryParams };
var GetValuesForVariablesHeaders = /** @class */ (function (_super) {
    __extends(GetValuesForVariablesHeaders, _super);
    function GetValuesForVariablesHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-App-Token" }),
        __metadata("design:type", String)
    ], GetValuesForVariablesHeaders.prototype, "xAppToken", void 0);
    return GetValuesForVariablesHeaders;
}(SpeakeasyBase));
export { GetValuesForVariablesHeaders };
var GetValuesForVariablesRequest = /** @class */ (function (_super) {
    __extends(GetValuesForVariablesRequest, _super);
    function GetValuesForVariablesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetValuesForVariablesQueryParams)
    ], GetValuesForVariablesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetValuesForVariablesHeaders)
    ], GetValuesForVariablesRequest.prototype, "headers", void 0);
    return GetValuesForVariablesRequest;
}(SpeakeasyBase));
export { GetValuesForVariablesRequest };
var GetValuesForVariablesResponse = /** @class */ (function (_super) {
    __extends(GetValuesForVariablesResponse, _super);
    function GetValuesForVariablesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetValuesForVariablesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetValuesForVariablesResponse.prototype, "statusCode", void 0);
    return GetValuesForVariablesResponse;
}(SpeakeasyBase));
export { GetValuesForVariablesResponse };
