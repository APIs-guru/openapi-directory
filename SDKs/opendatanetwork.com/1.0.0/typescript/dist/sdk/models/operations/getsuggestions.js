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
export var GetSuggestionsTypeEnum;
(function (GetSuggestionsTypeEnum) {
    GetSuggestionsTypeEnum["Entity"] = "entity";
    GetSuggestionsTypeEnum["Category"] = "category";
    GetSuggestionsTypeEnum["Publisher"] = "publisher";
    GetSuggestionsTypeEnum["Dataset"] = "dataset";
    GetSuggestionsTypeEnum["Question"] = "question";
})(GetSuggestionsTypeEnum || (GetSuggestionsTypeEnum = {}));
var GetSuggestionsPathParams = /** @class */ (function (_super) {
    __extends(GetSuggestionsPathParams, _super);
    function GetSuggestionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], GetSuggestionsPathParams.prototype, "type", void 0);
    return GetSuggestionsPathParams;
}(SpeakeasyBase));
export { GetSuggestionsPathParams };
var GetSuggestionsQueryParams = /** @class */ (function (_super) {
    __extends(GetSuggestionsQueryParams, _super);
    function GetSuggestionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=app_token" }),
        __metadata("design:type", String)
    ], GetSuggestionsQueryParams.prototype, "appToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSuggestionsQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetSuggestionsQueryParams.prototype, "query", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=variable_id" }),
        __metadata("design:type", String)
    ], GetSuggestionsQueryParams.prototype, "variableId", void 0);
    return GetSuggestionsQueryParams;
}(SpeakeasyBase));
export { GetSuggestionsQueryParams };
var GetSuggestionsHeaders = /** @class */ (function (_super) {
    __extends(GetSuggestionsHeaders, _super);
    function GetSuggestionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=X-App-Token" }),
        __metadata("design:type", String)
    ], GetSuggestionsHeaders.prototype, "xAppToken", void 0);
    return GetSuggestionsHeaders;
}(SpeakeasyBase));
export { GetSuggestionsHeaders };
var GetSuggestionsRequest = /** @class */ (function (_super) {
    __extends(GetSuggestionsRequest, _super);
    function GetSuggestionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetSuggestionsPathParams)
    ], GetSuggestionsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSuggestionsQueryParams)
    ], GetSuggestionsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetSuggestionsHeaders)
    ], GetSuggestionsRequest.prototype, "headers", void 0);
    return GetSuggestionsRequest;
}(SpeakeasyBase));
export { GetSuggestionsRequest };
var GetSuggestionsResponse = /** @class */ (function (_super) {
    __extends(GetSuggestionsResponse, _super);
    function GetSuggestionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetSuggestionsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetSuggestionsResponse.prototype, "statusCode", void 0);
    return GetSuggestionsResponse;
}(SpeakeasyBase));
export { GetSuggestionsResponse };
