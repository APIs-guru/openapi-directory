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
var DeleteImageTagsPathParams = /** @class */ (function (_super) {
    __extends(DeleteImageTagsPathParams, _super);
    function DeleteImageTagsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], DeleteImageTagsPathParams.prototype, "projectId", void 0);
    return DeleteImageTagsPathParams;
}(SpeakeasyBase));
export { DeleteImageTagsPathParams };
var DeleteImageTagsQueryParams = /** @class */ (function (_super) {
    __extends(DeleteImageTagsQueryParams, _super);
    function DeleteImageTagsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=imageIds" }),
        __metadata("design:type", Array)
    ], DeleteImageTagsQueryParams.prototype, "imageIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tagIds" }),
        __metadata("design:type", Array)
    ], DeleteImageTagsQueryParams.prototype, "tagIds", void 0);
    return DeleteImageTagsQueryParams;
}(SpeakeasyBase));
export { DeleteImageTagsQueryParams };
var DeleteImageTagsHeaders = /** @class */ (function (_super) {
    __extends(DeleteImageTagsHeaders, _super);
    function DeleteImageTagsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" }),
        __metadata("design:type", String)
    ], DeleteImageTagsHeaders.prototype, "trainingKey", void 0);
    return DeleteImageTagsHeaders;
}(SpeakeasyBase));
export { DeleteImageTagsHeaders };
var DeleteImageTagsRequest = /** @class */ (function (_super) {
    __extends(DeleteImageTagsRequest, _super);
    function DeleteImageTagsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteImageTagsPathParams)
    ], DeleteImageTagsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteImageTagsQueryParams)
    ], DeleteImageTagsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteImageTagsHeaders)
    ], DeleteImageTagsRequest.prototype, "headers", void 0);
    return DeleteImageTagsRequest;
}(SpeakeasyBase));
export { DeleteImageTagsRequest };
var DeleteImageTagsResponse = /** @class */ (function (_super) {
    __extends(DeleteImageTagsResponse, _super);
    function DeleteImageTagsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteImageTagsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteImageTagsResponse.prototype, "statusCode", void 0);
    return DeleteImageTagsResponse;
}(SpeakeasyBase));
export { DeleteImageTagsResponse };
