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
var GetQuestionsQueryParams = /** @class */ (function (_super) {
    __extends(GetQuestionsQueryParams, _super);
    function GetQuestionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=app_token" }),
        __metadata("design:type", String)
    ], GetQuestionsQueryParams.prototype, "appToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetQuestionsQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetQuestionsQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], GetQuestionsQueryParams.prototype, "query", void 0);
    return GetQuestionsQueryParams;
}(SpeakeasyBase));
export { GetQuestionsQueryParams };
var GetQuestionsHeaders = /** @class */ (function (_super) {
    __extends(GetQuestionsHeaders, _super);
    function GetQuestionsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-App-Token" }),
        __metadata("design:type", String)
    ], GetQuestionsHeaders.prototype, "xAppToken", void 0);
    return GetQuestionsHeaders;
}(SpeakeasyBase));
export { GetQuestionsHeaders };
var GetQuestionsRequest = /** @class */ (function (_super) {
    __extends(GetQuestionsRequest, _super);
    function GetQuestionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuestionsQueryParams)
    ], GetQuestionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQuestionsHeaders)
    ], GetQuestionsRequest.prototype, "headers", void 0);
    return GetQuestionsRequest;
}(SpeakeasyBase));
export { GetQuestionsRequest };
var GetQuestionsResponse = /** @class */ (function (_super) {
    __extends(GetQuestionsResponse, _super);
    function GetQuestionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetQuestionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetQuestionsResponse.prototype, "statusCode", void 0);
    return GetQuestionsResponse;
}(SpeakeasyBase));
export { GetQuestionsResponse };
