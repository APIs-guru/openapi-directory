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
var GetContentJsonQueryParams = /** @class */ (function (_super) {
    __extends(GetContentJsonQueryParams, _super);
    function GetContentJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=url" }),
        __metadata("design:type", String)
    ], GetContentJsonQueryParams.prototype, "url", void 0);
    return GetContentJsonQueryParams;
}(SpeakeasyBase));
export { GetContentJsonQueryParams };
var GetContentJsonRequest = /** @class */ (function (_super) {
    __extends(GetContentJsonRequest, _super);
    function GetContentJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetContentJsonQueryParams)
    ], GetContentJsonRequest.prototype, "queryParams", void 0);
    return GetContentJsonRequest;
}(SpeakeasyBase));
export { GetContentJsonRequest };
var GetContentJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetContentJson200ApplicationJson, _super);
    function GetContentJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetContentJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        Metadata({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetContentJson200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.Article }),
        __metadata("design:type", Array)
    ], GetContentJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetContentJson200ApplicationJson.prototype, "status", void 0);
    return GetContentJson200ApplicationJson;
}(SpeakeasyBase));
export { GetContentJson200ApplicationJson };
var GetContentJsonResponse = /** @class */ (function (_super) {
    __extends(GetContentJsonResponse, _super);
    function GetContentJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetContentJsonResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetContentJson200ApplicationJson)
    ], GetContentJsonResponse.prototype, "getContentJson200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetContentJsonResponse.prototype, "statusCode", void 0);
    return GetContentJsonResponse;
}(SpeakeasyBase));
export { GetContentJsonResponse };
