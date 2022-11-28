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
var PostFilesQueryParams = /** @class */ (function (_super) {
    __extends(PostFilesQueryParams, _super);
    function PostFilesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hash" }),
        __metadata("design:type", String)
    ], PostFilesQueryParams.prototype, "hash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isPrivate" }),
        __metadata("design:type", Boolean)
    ], PostFilesQueryParams.prototype, "isPrivate", void 0);
    return PostFilesQueryParams;
}(SpeakeasyBase));
export { PostFilesQueryParams };
var PostFilesRequestBodyFile = /** @class */ (function (_super) {
    __extends(PostFilesRequestBodyFile, _super);
    function PostFilesRequestBodyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostFilesRequestBodyFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=file" }),
        __metadata("design:type", String)
    ], PostFilesRequestBodyFile.prototype, "file", void 0);
    return PostFilesRequestBodyFile;
}(SpeakeasyBase));
export { PostFilesRequestBodyFile };
var PostFilesRequestBody = /** @class */ (function (_super) {
    __extends(PostFilesRequestBody, _super);
    function PostFilesRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostFilesRequestBodyFile)
    ], PostFilesRequestBody.prototype, "file", void 0);
    return PostFilesRequestBody;
}(SpeakeasyBase));
export { PostFilesRequestBody };
var PostFilesRequest = /** @class */ (function (_super) {
    __extends(PostFilesRequest, _super);
    function PostFilesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostFilesQueryParams)
    ], PostFilesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostFilesRequestBody)
    ], PostFilesRequest.prototype, "request", void 0);
    return PostFilesRequest;
}(SpeakeasyBase));
export { PostFilesRequest };
var PostFilesResponse = /** @class */ (function (_super) {
    __extends(PostFilesResponse, _super);
    function PostFilesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostFilesResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostFilesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostFilesResponse.prototype, "statusCode", void 0);
    return PostFilesResponse;
}(SpeakeasyBase));
export { PostFilesResponse };
