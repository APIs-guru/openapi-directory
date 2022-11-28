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
var DeleteSeriesIdAttachmentsNamePathParams = /** @class */ (function (_super) {
    __extends(DeleteSeriesIdAttachmentsNamePathParams, _super);
    function DeleteSeriesIdAttachmentsNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], DeleteSeriesIdAttachmentsNamePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DeleteSeriesIdAttachmentsNamePathParams.prototype, "name", void 0);
    return DeleteSeriesIdAttachmentsNamePathParams;
}(SpeakeasyBase));
export { DeleteSeriesIdAttachmentsNamePathParams };
var DeleteSeriesIdAttachmentsNameHeaders = /** @class */ (function (_super) {
    __extends(DeleteSeriesIdAttachmentsNameHeaders, _super);
    function DeleteSeriesIdAttachmentsNameHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], DeleteSeriesIdAttachmentsNameHeaders.prototype, "ifMatch", void 0);
    return DeleteSeriesIdAttachmentsNameHeaders;
}(SpeakeasyBase));
export { DeleteSeriesIdAttachmentsNameHeaders };
var DeleteSeriesIdAttachmentsNameRequest = /** @class */ (function (_super) {
    __extends(DeleteSeriesIdAttachmentsNameRequest, _super);
    function DeleteSeriesIdAttachmentsNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSeriesIdAttachmentsNamePathParams)
    ], DeleteSeriesIdAttachmentsNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteSeriesIdAttachmentsNameHeaders)
    ], DeleteSeriesIdAttachmentsNameRequest.prototype, "headers", void 0);
    return DeleteSeriesIdAttachmentsNameRequest;
}(SpeakeasyBase));
export { DeleteSeriesIdAttachmentsNameRequest };
var DeleteSeriesIdAttachmentsNameResponse = /** @class */ (function (_super) {
    __extends(DeleteSeriesIdAttachmentsNameResponse, _super);
    function DeleteSeriesIdAttachmentsNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteSeriesIdAttachmentsNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteSeriesIdAttachmentsNameResponse.prototype, "statusCode", void 0);
    return DeleteSeriesIdAttachmentsNameResponse;
}(SpeakeasyBase));
export { DeleteSeriesIdAttachmentsNameResponse };
