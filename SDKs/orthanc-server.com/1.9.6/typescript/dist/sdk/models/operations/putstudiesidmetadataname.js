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
var PutStudiesIdMetadataNamePathParams = /** @class */ (function (_super) {
    __extends(PutStudiesIdMetadataNamePathParams, _super);
    function PutStudiesIdMetadataNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PutStudiesIdMetadataNamePathParams.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PutStudiesIdMetadataNamePathParams.prototype, "name", void 0);
    return PutStudiesIdMetadataNamePathParams;
}(SpeakeasyBase));
export { PutStudiesIdMetadataNamePathParams };
var PutStudiesIdMetadataNameHeaders = /** @class */ (function (_super) {
    __extends(PutStudiesIdMetadataNameHeaders, _super);
    function PutStudiesIdMetadataNameHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=If-Match" }),
        __metadata("design:type", String)
    ], PutStudiesIdMetadataNameHeaders.prototype, "ifMatch", void 0);
    return PutStudiesIdMetadataNameHeaders;
}(SpeakeasyBase));
export { PutStudiesIdMetadataNameHeaders };
var PutStudiesIdMetadataNameRequest = /** @class */ (function (_super) {
    __extends(PutStudiesIdMetadataNameRequest, _super);
    function PutStudiesIdMetadataNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutStudiesIdMetadataNamePathParams)
    ], PutStudiesIdMetadataNameRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutStudiesIdMetadataNameHeaders)
    ], PutStudiesIdMetadataNameRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/plain" }),
        __metadata("design:type", Uint8Array)
    ], PutStudiesIdMetadataNameRequest.prototype, "request", void 0);
    return PutStudiesIdMetadataNameRequest;
}(SpeakeasyBase));
export { PutStudiesIdMetadataNameRequest };
var PutStudiesIdMetadataNameResponse = /** @class */ (function (_super) {
    __extends(PutStudiesIdMetadataNameResponse, _super);
    function PutStudiesIdMetadataNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutStudiesIdMetadataNameResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutStudiesIdMetadataNameResponse.prototype, "statusCode", void 0);
    return PutStudiesIdMetadataNameResponse;
}(SpeakeasyBase));
export { PutStudiesIdMetadataNameResponse };
