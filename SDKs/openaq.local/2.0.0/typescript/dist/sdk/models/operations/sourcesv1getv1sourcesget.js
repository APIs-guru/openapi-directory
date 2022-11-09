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
var SourcesV1GetV1SourcesGetQueryParams = /** @class */ (function (_super) {
    __extends(SourcesV1GetV1SourcesGetQueryParams, _super);
    function SourcesV1GetV1SourcesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], SourcesV1GetV1SourcesGetQueryParams.prototype, "limit", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], SourcesV1GetV1SourcesGetQueryParams.prototype, "name", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], SourcesV1GetV1SourcesGetQueryParams.prototype, "offset", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=order_by" }),
        __metadata("design:type", String)
    ], SourcesV1GetV1SourcesGetQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SourcesV1GetV1SourcesGetQueryParams.prototype, "page", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SourcesV1GetV1SourcesGetQueryParams.prototype, "sort", void 0);
    return SourcesV1GetV1SourcesGetQueryParams;
}(SpeakeasyBase));
export { SourcesV1GetV1SourcesGetQueryParams };
var SourcesV1GetV1SourcesGetRequest = /** @class */ (function (_super) {
    __extends(SourcesV1GetV1SourcesGetRequest, _super);
    function SourcesV1GetV1SourcesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", SourcesV1GetV1SourcesGetQueryParams)
    ], SourcesV1GetV1SourcesGetRequest.prototype, "queryParams", void 0);
    return SourcesV1GetV1SourcesGetRequest;
}(SpeakeasyBase));
export { SourcesV1GetV1SourcesGetRequest };
var SourcesV1GetV1SourcesGetResponse = /** @class */ (function (_super) {
    __extends(SourcesV1GetV1SourcesGetResponse, _super);
    function SourcesV1GetV1SourcesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], SourcesV1GetV1SourcesGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], SourcesV1GetV1SourcesGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.OpenAqResult)
    ], SourcesV1GetV1SourcesGetResponse.prototype, "openAqResult", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], SourcesV1GetV1SourcesGetResponse.prototype, "statusCode", void 0);
    return SourcesV1GetV1SourcesGetResponse;
}(SpeakeasyBase));
export { SourcesV1GetV1SourcesGetResponse };
