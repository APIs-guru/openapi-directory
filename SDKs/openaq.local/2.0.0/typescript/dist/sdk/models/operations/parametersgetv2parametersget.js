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
var ParametersGetV2ParametersGetQueryParams = /** @class */ (function (_super) {
    __extends(ParametersGetV2ParametersGetQueryParams, _super);
    function ParametersGetV2ParametersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], ParametersGetV2ParametersGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ParametersGetV2ParametersGetQueryParams.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order_by" }),
        __metadata("design:type", Object)
    ], ParametersGetV2ParametersGetQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], ParametersGetV2ParametersGetQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ParametersGetV2ParametersGetQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceId" }),
        __metadata("design:type", Array)
    ], ParametersGetV2ParametersGetQueryParams.prototype, "sourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceName" }),
        __metadata("design:type", Array)
    ], ParametersGetV2ParametersGetQueryParams.prototype, "sourceName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sourceSlug" }),
        __metadata("design:type", Array)
    ], ParametersGetV2ParametersGetQueryParams.prototype, "sourceSlug", void 0);
    return ParametersGetV2ParametersGetQueryParams;
}(SpeakeasyBase));
export { ParametersGetV2ParametersGetQueryParams };
var ParametersGetV2ParametersGetRequest = /** @class */ (function (_super) {
    __extends(ParametersGetV2ParametersGetRequest, _super);
    function ParametersGetV2ParametersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ParametersGetV2ParametersGetQueryParams)
    ], ParametersGetV2ParametersGetRequest.prototype, "queryParams", void 0);
    return ParametersGetV2ParametersGetRequest;
}(SpeakeasyBase));
export { ParametersGetV2ParametersGetRequest };
var ParametersGetV2ParametersGetResponse = /** @class */ (function (_super) {
    __extends(ParametersGetV2ParametersGetResponse, _super);
    function ParametersGetV2ParametersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ParametersGetV2ParametersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.HttpValidationError)
    ], ParametersGetV2ParametersGetResponse.prototype, "httpValidationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.OpenAqParametersResult)
    ], ParametersGetV2ParametersGetResponse.prototype, "openAqParametersResult", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ParametersGetV2ParametersGetResponse.prototype, "statusCode", void 0);
    return ParametersGetV2ParametersGetResponse;
}(SpeakeasyBase));
export { ParametersGetV2ParametersGetResponse };
