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
import * as shared from "../shared";
export var GetContentSourceSectionJsonSourceEnum;
(function (GetContentSourceSectionJsonSourceEnum) {
    GetContentSourceSectionJsonSourceEnum["All"] = "all";
    GetContentSourceSectionJsonSourceEnum["Nyt"] = "nyt";
    GetContentSourceSectionJsonSourceEnum["Iht"] = "iht";
})(GetContentSourceSectionJsonSourceEnum || (GetContentSourceSectionJsonSourceEnum = {}));
var GetContentSourceSectionJsonPathParams = /** @class */ (function (_super) {
    __extends(GetContentSourceSectionJsonPathParams, _super);
    function GetContentSourceSectionJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=section" }),
        __metadata("design:type", String)
    ], GetContentSourceSectionJsonPathParams.prototype, "section", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=source" }),
        __metadata("design:type", String)
    ], GetContentSourceSectionJsonPathParams.prototype, "source", void 0);
    return GetContentSourceSectionJsonPathParams;
}(SpeakeasyBase));
export { GetContentSourceSectionJsonPathParams };
var GetContentSourceSectionJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetContentSourceSectionJsonQueryParams, _super);
    function GetContentSourceSectionJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetContentSourceSectionJsonQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetContentSourceSectionJsonQueryParams.prototype, "offset", void 0);
    return GetContentSourceSectionJsonQueryParams;
}(SpeakeasyBase));
export { GetContentSourceSectionJsonQueryParams };
var GetContentSourceSectionJsonRequest = /** @class */ (function (_super) {
    __extends(GetContentSourceSectionJsonRequest, _super);
    function GetContentSourceSectionJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetContentSourceSectionJsonPathParams)
    ], GetContentSourceSectionJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetContentSourceSectionJsonQueryParams)
    ], GetContentSourceSectionJsonRequest.prototype, "queryParams", void 0);
    return GetContentSourceSectionJsonRequest;
}(SpeakeasyBase));
export { GetContentSourceSectionJsonRequest };
var GetContentSourceSectionJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetContentSourceSectionJson200ApplicationJson, _super);
    function GetContentSourceSectionJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetContentSourceSectionJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        Metadata({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetContentSourceSectionJson200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.Article }),
        __metadata("design:type", Array)
    ], GetContentSourceSectionJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetContentSourceSectionJson200ApplicationJson.prototype, "status", void 0);
    return GetContentSourceSectionJson200ApplicationJson;
}(SpeakeasyBase));
export { GetContentSourceSectionJson200ApplicationJson };
var GetContentSourceSectionJsonResponse = /** @class */ (function (_super) {
    __extends(GetContentSourceSectionJsonResponse, _super);
    function GetContentSourceSectionJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetContentSourceSectionJsonResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetContentSourceSectionJson200ApplicationJson)
    ], GetContentSourceSectionJsonResponse.prototype, "getContentSourceSectionJson200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetContentSourceSectionJsonResponse.prototype, "statusCode", void 0);
    return GetContentSourceSectionJsonResponse;
}(SpeakeasyBase));
export { GetContentSourceSectionJsonResponse };
