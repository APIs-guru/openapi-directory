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
var GetMostemailedSectionTimePeriodJsonPathParams = /** @class */ (function (_super) {
    __extends(GetMostemailedSectionTimePeriodJsonPathParams, _super);
    function GetMostemailedSectionTimePeriodJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=section" }),
        __metadata("design:type", String)
    ], GetMostemailedSectionTimePeriodJsonPathParams.prototype, "section", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=time-period" }),
        __metadata("design:type", String)
    ], GetMostemailedSectionTimePeriodJsonPathParams.prototype, "timePeriod", void 0);
    return GetMostemailedSectionTimePeriodJsonPathParams;
}(SpeakeasyBase));
export { GetMostemailedSectionTimePeriodJsonPathParams };
var GetMostemailedSectionTimePeriodJsonSecurity = /** @class */ (function (_super) {
    __extends(GetMostemailedSectionTimePeriodJsonSecurity, _super);
    function GetMostemailedSectionTimePeriodJsonSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetMostemailedSectionTimePeriodJsonSecurity.prototype, "apiKey", void 0);
    return GetMostemailedSectionTimePeriodJsonSecurity;
}(SpeakeasyBase));
export { GetMostemailedSectionTimePeriodJsonSecurity };
var GetMostemailedSectionTimePeriodJsonRequest = /** @class */ (function (_super) {
    __extends(GetMostemailedSectionTimePeriodJsonRequest, _super);
    function GetMostemailedSectionTimePeriodJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetMostemailedSectionTimePeriodJsonPathParams)
    ], GetMostemailedSectionTimePeriodJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetMostemailedSectionTimePeriodJsonSecurity)
    ], GetMostemailedSectionTimePeriodJsonRequest.prototype, "security", void 0);
    return GetMostemailedSectionTimePeriodJsonRequest;
}(SpeakeasyBase));
export { GetMostemailedSectionTimePeriodJsonRequest };
var GetMostemailedSectionTimePeriodJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetMostemailedSectionTimePeriodJson200ApplicationJson, _super);
    function GetMostemailedSectionTimePeriodJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetMostemailedSectionTimePeriodJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        Metadata({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetMostemailedSectionTimePeriodJson200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.ArticleWithCountType }),
        __metadata("design:type", Array)
    ], GetMostemailedSectionTimePeriodJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetMostemailedSectionTimePeriodJson200ApplicationJson.prototype, "status", void 0);
    return GetMostemailedSectionTimePeriodJson200ApplicationJson;
}(SpeakeasyBase));
export { GetMostemailedSectionTimePeriodJson200ApplicationJson };
var GetMostemailedSectionTimePeriodJson400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetMostemailedSectionTimePeriodJson400ApplicationJson, _super);
    function GetMostemailedSectionTimePeriodJson400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetMostemailedSectionTimePeriodJson400ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        Metadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], GetMostemailedSectionTimePeriodJson400ApplicationJson.prototype, "errors", void 0);
    __decorate([
        Metadata({ data: "json, name=results" }),
        __metadata("design:type", Array)
    ], GetMostemailedSectionTimePeriodJson400ApplicationJson.prototype, "results", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetMostemailedSectionTimePeriodJson400ApplicationJson.prototype, "status", void 0);
    return GetMostemailedSectionTimePeriodJson400ApplicationJson;
}(SpeakeasyBase));
export { GetMostemailedSectionTimePeriodJson400ApplicationJson };
var GetMostemailedSectionTimePeriodJsonResponse = /** @class */ (function (_super) {
    __extends(GetMostemailedSectionTimePeriodJsonResponse, _super);
    function GetMostemailedSectionTimePeriodJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetMostemailedSectionTimePeriodJsonResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetMostemailedSectionTimePeriodJsonResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetMostemailedSectionTimePeriodJson200ApplicationJson)
    ], GetMostemailedSectionTimePeriodJsonResponse.prototype, "getMostemailedSectionTimePeriodJson200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetMostemailedSectionTimePeriodJson400ApplicationJson)
    ], GetMostemailedSectionTimePeriodJsonResponse.prototype, "getMostemailedSectionTimePeriodJson400ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], GetMostemailedSectionTimePeriodJsonResponse.prototype, "getMostemailedSectionTimePeriodJson403ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetMostemailedSectionTimePeriodJsonResponse.prototype, "statusCode", void 0);
    return GetMostemailedSectionTimePeriodJsonResponse;
}(SpeakeasyBase));
export { GetMostemailedSectionTimePeriodJsonResponse };
