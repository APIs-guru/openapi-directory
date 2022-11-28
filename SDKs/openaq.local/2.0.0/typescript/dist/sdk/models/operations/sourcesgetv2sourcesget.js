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
var SourcesGetV2SourcesGetQueryParams = /** @class */ (function (_super) {
    __extends(SourcesGetV2SourcesGetQueryParams, _super);
    function SourcesGetV2SourcesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], SourcesGetV2SourcesGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], SourcesGetV2SourcesGetQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" }),
        __metadata("design:type", String)
    ], SourcesGetV2SourcesGetQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], SourcesGetV2SourcesGetQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], SourcesGetV2SourcesGetQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceId" }),
        __metadata("design:type", Array)
    ], SourcesGetV2SourcesGetQueryParams.prototype, "sourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceName" }),
        __metadata("design:type", Array)
    ], SourcesGetV2SourcesGetQueryParams.prototype, "sourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceSlug" }),
        __metadata("design:type", Array)
    ], SourcesGetV2SourcesGetQueryParams.prototype, "sourceSlug", void 0);
    return SourcesGetV2SourcesGetQueryParams;
}(SpeakeasyBase));
export { SourcesGetV2SourcesGetQueryParams };
var SourcesGetV2SourcesGetRequest = /** @class */ (function (_super) {
    __extends(SourcesGetV2SourcesGetRequest, _super);
    function SourcesGetV2SourcesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SourcesGetV2SourcesGetQueryParams)
    ], SourcesGetV2SourcesGetRequest.prototype, "queryParams", void 0);
    return SourcesGetV2SourcesGetRequest;
}(SpeakeasyBase));
export { SourcesGetV2SourcesGetRequest };
var SourcesGetV2SourcesGetResponse = /** @class */ (function (_super) {
    __extends(SourcesGetV2SourcesGetResponse, _super);
    function SourcesGetV2SourcesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SourcesGetV2SourcesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], SourcesGetV2SourcesGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OpenAqResult)
    ], SourcesGetV2SourcesGetResponse.prototype, "openAqResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SourcesGetV2SourcesGetResponse.prototype, "statusCode", void 0);
    return SourcesGetV2SourcesGetResponse;
}(SpeakeasyBase));
export { SourcesGetV2SourcesGetResponse };
