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
var GetMostsharedSectionTimePeriodJsonPathParams = /** @class */ (function (_super) {
    __extends(GetMostsharedSectionTimePeriodJsonPathParams, _super);
    function GetMostsharedSectionTimePeriodJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=section" }),
        __metadata("design:type", String)
    ], GetMostsharedSectionTimePeriodJsonPathParams.prototype, "section", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=time-period" }),
        __metadata("design:type", String)
    ], GetMostsharedSectionTimePeriodJsonPathParams.prototype, "timePeriod", void 0);
    return GetMostsharedSectionTimePeriodJsonPathParams;
}(SpeakeasyBase));
export { GetMostsharedSectionTimePeriodJsonPathParams };
var GetMostsharedSectionTimePeriodJsonSecurity = /** @class */ (function (_super) {
    __extends(GetMostsharedSectionTimePeriodJsonSecurity, _super);
    function GetMostsharedSectionTimePeriodJsonSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetMostsharedSectionTimePeriodJsonSecurity.prototype, "apiKey", void 0);
    return GetMostsharedSectionTimePeriodJsonSecurity;
}(SpeakeasyBase));
export { GetMostsharedSectionTimePeriodJsonSecurity };
var GetMostsharedSectionTimePeriodJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetMostsharedSectionTimePeriodJson200ApplicationJson, _super);
    function GetMostsharedSectionTimePeriodJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetMostsharedSectionTimePeriodJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetMostsharedSectionTimePeriodJson200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Article }),
        __metadata("design:type", Array)
    ], GetMostsharedSectionTimePeriodJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetMostsharedSectionTimePeriodJson200ApplicationJson.prototype, "status", void 0);
    return GetMostsharedSectionTimePeriodJson200ApplicationJson;
}(SpeakeasyBase));
export { GetMostsharedSectionTimePeriodJson200ApplicationJson };
var GetMostsharedSectionTimePeriodJson400ApplicationJson = /** @class */ (function (_super) {
    __extends(GetMostsharedSectionTimePeriodJson400ApplicationJson, _super);
    function GetMostsharedSectionTimePeriodJson400ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetMostsharedSectionTimePeriodJson400ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], GetMostsharedSectionTimePeriodJson400ApplicationJson.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Array)
    ], GetMostsharedSectionTimePeriodJson400ApplicationJson.prototype, "results", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetMostsharedSectionTimePeriodJson400ApplicationJson.prototype, "status", void 0);
    return GetMostsharedSectionTimePeriodJson400ApplicationJson;
}(SpeakeasyBase));
export { GetMostsharedSectionTimePeriodJson400ApplicationJson };
var GetMostsharedSectionTimePeriodJsonRequest = /** @class */ (function (_super) {
    __extends(GetMostsharedSectionTimePeriodJsonRequest, _super);
    function GetMostsharedSectionTimePeriodJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMostsharedSectionTimePeriodJsonPathParams)
    ], GetMostsharedSectionTimePeriodJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMostsharedSectionTimePeriodJsonSecurity)
    ], GetMostsharedSectionTimePeriodJsonRequest.prototype, "security", void 0);
    return GetMostsharedSectionTimePeriodJsonRequest;
}(SpeakeasyBase));
export { GetMostsharedSectionTimePeriodJsonRequest };
var GetMostsharedSectionTimePeriodJsonResponse = /** @class */ (function (_super) {
    __extends(GetMostsharedSectionTimePeriodJsonResponse, _super);
    function GetMostsharedSectionTimePeriodJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMostsharedSectionTimePeriodJsonResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMostsharedSectionTimePeriodJson200ApplicationJson)
    ], GetMostsharedSectionTimePeriodJsonResponse.prototype, "getMostsharedSectionTimePeriodJson200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMostsharedSectionTimePeriodJson400ApplicationJson)
    ], GetMostsharedSectionTimePeriodJsonResponse.prototype, "getMostsharedSectionTimePeriodJson400ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMostsharedSectionTimePeriodJsonResponse.prototype, "statusCode", void 0);
    return GetMostsharedSectionTimePeriodJsonResponse;
}(SpeakeasyBase));
export { GetMostsharedSectionTimePeriodJsonResponse };
