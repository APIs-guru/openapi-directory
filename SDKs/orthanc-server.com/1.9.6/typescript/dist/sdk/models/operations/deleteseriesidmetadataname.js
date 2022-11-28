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
var DeleteSeriesIdMetadataNamePathParams = /** @class */ (function (_super) {
    __extends(DeleteSeriesIdMetadataNamePathParams, _super);
    function DeleteSeriesIdMetadataNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteSeriesIdMetadataNamePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DeleteSeriesIdMetadataNamePathParams.prototype, "name", void 0);
    return DeleteSeriesIdMetadataNamePathParams;
}(SpeakeasyBase));
export { DeleteSeriesIdMetadataNamePathParams };
var DeleteSeriesIdMetadataNameHeaders = /** @class */ (function (_super) {
    __extends(DeleteSeriesIdMetadataNameHeaders, _super);
    function DeleteSeriesIdMetadataNameHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], DeleteSeriesIdMetadataNameHeaders.prototype, "ifMatch", void 0);
    return DeleteSeriesIdMetadataNameHeaders;
}(SpeakeasyBase));
export { DeleteSeriesIdMetadataNameHeaders };
var DeleteSeriesIdMetadataNameRequest = /** @class */ (function (_super) {
    __extends(DeleteSeriesIdMetadataNameRequest, _super);
    function DeleteSeriesIdMetadataNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSeriesIdMetadataNamePathParams)
    ], DeleteSeriesIdMetadataNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSeriesIdMetadataNameHeaders)
    ], DeleteSeriesIdMetadataNameRequest.prototype, "headers", void 0);
    return DeleteSeriesIdMetadataNameRequest;
}(SpeakeasyBase));
export { DeleteSeriesIdMetadataNameRequest };
var DeleteSeriesIdMetadataNameResponse = /** @class */ (function (_super) {
    __extends(DeleteSeriesIdMetadataNameResponse, _super);
    function DeleteSeriesIdMetadataNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSeriesIdMetadataNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSeriesIdMetadataNameResponse.prototype, "statusCode", void 0);
    return DeleteSeriesIdMetadataNameResponse;
}(SpeakeasyBase));
export { DeleteSeriesIdMetadataNameResponse };
