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
var CreateImagesFromDataPathParams = /** @class */ (function (_super) {
    __extends(CreateImagesFromDataPathParams, _super);
    function CreateImagesFromDataPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], CreateImagesFromDataPathParams.prototype, "projectId", void 0);
    return CreateImagesFromDataPathParams;
}(SpeakeasyBase));
export { CreateImagesFromDataPathParams };
var CreateImagesFromDataQueryParams = /** @class */ (function (_super) {
    __extends(CreateImagesFromDataQueryParams, _super);
    function CreateImagesFromDataQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagIds" }),
        __metadata("design:type", Array)
    ], CreateImagesFromDataQueryParams.prototype, "tagIds", void 0);
    return CreateImagesFromDataQueryParams;
}(SpeakeasyBase));
export { CreateImagesFromDataQueryParams };
var CreateImagesFromDataHeaders = /** @class */ (function (_super) {
    __extends(CreateImagesFromDataHeaders, _super);
    function CreateImagesFromDataHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], CreateImagesFromDataHeaders.prototype, "trainingKey", void 0);
    return CreateImagesFromDataHeaders;
}(SpeakeasyBase));
export { CreateImagesFromDataHeaders };
var CreateImagesFromDataRequestBodyImageData = /** @class */ (function (_super) {
    __extends(CreateImagesFromDataRequestBodyImageData, _super);
    function CreateImagesFromDataRequestBodyImageData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], CreateImagesFromDataRequestBodyImageData.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=imageData" }),
        __metadata("design:type", String)
    ], CreateImagesFromDataRequestBodyImageData.prototype, "imageData", void 0);
    return CreateImagesFromDataRequestBodyImageData;
}(SpeakeasyBase));
export { CreateImagesFromDataRequestBodyImageData };
var CreateImagesFromDataRequestBody = /** @class */ (function (_super) {
    __extends(CreateImagesFromDataRequestBody, _super);
    function CreateImagesFromDataRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", CreateImagesFromDataRequestBodyImageData)
    ], CreateImagesFromDataRequestBody.prototype, "imageData", void 0);
    return CreateImagesFromDataRequestBody;
}(SpeakeasyBase));
export { CreateImagesFromDataRequestBody };
var CreateImagesFromDataRequest = /** @class */ (function (_super) {
    __extends(CreateImagesFromDataRequest, _super);
    function CreateImagesFromDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateImagesFromDataPathParams)
    ], CreateImagesFromDataRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateImagesFromDataQueryParams)
    ], CreateImagesFromDataRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateImagesFromDataHeaders)
    ], CreateImagesFromDataRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", CreateImagesFromDataRequestBody)
    ], CreateImagesFromDataRequest.prototype, "request", void 0);
    return CreateImagesFromDataRequest;
}(SpeakeasyBase));
export { CreateImagesFromDataRequest };
var CreateImagesFromDataResponse = /** @class */ (function (_super) {
    __extends(CreateImagesFromDataResponse, _super);
    function CreateImagesFromDataResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], CreateImagesFromDataResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateImagesFromDataResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ImageCreateSummary)
    ], CreateImagesFromDataResponse.prototype, "imageCreateSummary", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateImagesFromDataResponse.prototype, "statusCode", void 0);
    return CreateImagesFromDataResponse;
}(SpeakeasyBase));
export { CreateImagesFromDataResponse };
