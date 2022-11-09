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
var GetMostviewedSectionTimePeriodJsonPathParams = /** @class */ (function (_super) {
    __extends(GetMostviewedSectionTimePeriodJsonPathParams, _super);
    function GetMostviewedSectionTimePeriodJsonPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=section" }),
        __metadata("design:type", String)
    ], GetMostviewedSectionTimePeriodJsonPathParams.prototype, "section", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=time-period" }),
        __metadata("design:type", String)
    ], GetMostviewedSectionTimePeriodJsonPathParams.prototype, "timePeriod", void 0);
    return GetMostviewedSectionTimePeriodJsonPathParams;
}(SpeakeasyBase));
export { GetMostviewedSectionTimePeriodJsonPathParams };
var GetMostviewedSectionTimePeriodJsonSecurity = /** @class */ (function (_super) {
    __extends(GetMostviewedSectionTimePeriodJsonSecurity, _super);
    function GetMostviewedSectionTimePeriodJsonSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeApiKey)
    ], GetMostviewedSectionTimePeriodJsonSecurity.prototype, "apiKey", void 0);
    return GetMostviewedSectionTimePeriodJsonSecurity;
}(SpeakeasyBase));
export { GetMostviewedSectionTimePeriodJsonSecurity };
var GetMostviewedSectionTimePeriodJsonRequest = /** @class */ (function (_super) {
    __extends(GetMostviewedSectionTimePeriodJsonRequest, _super);
    function GetMostviewedSectionTimePeriodJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetMostviewedSectionTimePeriodJsonPathParams)
    ], GetMostviewedSectionTimePeriodJsonRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetMostviewedSectionTimePeriodJsonSecurity)
    ], GetMostviewedSectionTimePeriodJsonRequest.prototype, "security", void 0);
    return GetMostviewedSectionTimePeriodJsonRequest;
}(SpeakeasyBase));
export { GetMostviewedSectionTimePeriodJsonRequest };
var GetMostviewedSectionTimePeriodJson200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetMostviewedSectionTimePeriodJson200ApplicationJson, _super);
    function GetMostviewedSectionTimePeriodJson200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=copyright" }),
        __metadata("design:type", String)
    ], GetMostviewedSectionTimePeriodJson200ApplicationJson.prototype, "copyright", void 0);
    __decorate([
        Metadata({ data: "json, name=num_results" }),
        __metadata("design:type", Number)
    ], GetMostviewedSectionTimePeriodJson200ApplicationJson.prototype, "numResults", void 0);
    __decorate([
        Metadata({ data: "json, name=results", elemType: shared.Article }),
        __metadata("design:type", Array)
    ], GetMostviewedSectionTimePeriodJson200ApplicationJson.prototype, "results", void 0);
    __decorate([
        Metadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetMostviewedSectionTimePeriodJson200ApplicationJson.prototype, "status", void 0);
    return GetMostviewedSectionTimePeriodJson200ApplicationJson;
}(SpeakeasyBase));
export { GetMostviewedSectionTimePeriodJson200ApplicationJson };
var GetMostviewedSectionTimePeriodJsonResponse = /** @class */ (function (_super) {
    __extends(GetMostviewedSectionTimePeriodJsonResponse, _super);
    function GetMostviewedSectionTimePeriodJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetMostviewedSectionTimePeriodJsonResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetMostviewedSectionTimePeriodJson200ApplicationJson)
    ], GetMostviewedSectionTimePeriodJsonResponse.prototype, "getMostviewedSectionTimePeriodJson200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetMostviewedSectionTimePeriodJsonResponse.prototype, "statusCode", void 0);
    return GetMostviewedSectionTimePeriodJsonResponse;
}(SpeakeasyBase));
export { GetMostviewedSectionTimePeriodJsonResponse };
