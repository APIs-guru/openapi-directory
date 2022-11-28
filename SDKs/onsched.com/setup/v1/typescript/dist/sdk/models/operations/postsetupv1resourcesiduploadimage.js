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
var PostSetupV1ResourcesIdUploadimagePathParams = /** @class */ (function (_super) {
    __extends(PostSetupV1ResourcesIdUploadimagePathParams, _super);
    function PostSetupV1ResourcesIdUploadimagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostSetupV1ResourcesIdUploadimagePathParams.prototype, "id", void 0);
    return PostSetupV1ResourcesIdUploadimagePathParams;
}(SpeakeasyBase));
export { PostSetupV1ResourcesIdUploadimagePathParams };
var PostSetupV1ResourcesIdUploadimageRequests = /** @class */ (function (_super) {
    __extends(PostSetupV1ResourcesIdUploadimageRequests, _super);
    function PostSetupV1ResourcesIdUploadimageRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ResourceImageInputModel)
    ], PostSetupV1ResourcesIdUploadimageRequests.prototype, "resourceImageInputModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResourceImageInputModel)
    ], PostSetupV1ResourcesIdUploadimageRequests.prototype, "resourceImageInputModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ResourceImageInputModel)
    ], PostSetupV1ResourcesIdUploadimageRequests.prototype, "resourceImageInputModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ResourceImageInputModel)
    ], PostSetupV1ResourcesIdUploadimageRequests.prototype, "resourceImageInputModel3", void 0);
    return PostSetupV1ResourcesIdUploadimageRequests;
}(SpeakeasyBase));
export { PostSetupV1ResourcesIdUploadimageRequests };
var PostSetupV1ResourcesIdUploadimageRequest = /** @class */ (function (_super) {
    __extends(PostSetupV1ResourcesIdUploadimageRequest, _super);
    function PostSetupV1ResourcesIdUploadimageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1ResourcesIdUploadimagePathParams)
    ], PostSetupV1ResourcesIdUploadimageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1ResourcesIdUploadimageRequests)
    ], PostSetupV1ResourcesIdUploadimageRequest.prototype, "request", void 0);
    return PostSetupV1ResourcesIdUploadimageRequest;
}(SpeakeasyBase));
export { PostSetupV1ResourcesIdUploadimageRequest };
var PostSetupV1ResourcesIdUploadimageResponse = /** @class */ (function (_super) {
    __extends(PostSetupV1ResourcesIdUploadimageResponse, _super);
    function PostSetupV1ResourcesIdUploadimageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSetupV1ResourcesIdUploadimageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceViewModel)
    ], PostSetupV1ResourcesIdUploadimageResponse.prototype, "resourceViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSetupV1ResourcesIdUploadimageResponse.prototype, "statusCode", void 0);
    return PostSetupV1ResourcesIdUploadimageResponse;
}(SpeakeasyBase));
export { PostSetupV1ResourcesIdUploadimageResponse };
