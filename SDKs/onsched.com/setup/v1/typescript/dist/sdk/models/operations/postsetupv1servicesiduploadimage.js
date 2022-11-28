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
var PostSetupV1ServicesIdUploadimagePathParams = /** @class */ (function (_super) {
    __extends(PostSetupV1ServicesIdUploadimagePathParams, _super);
    function PostSetupV1ServicesIdUploadimagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostSetupV1ServicesIdUploadimagePathParams.prototype, "id", void 0);
    return PostSetupV1ServicesIdUploadimagePathParams;
}(SpeakeasyBase));
export { PostSetupV1ServicesIdUploadimagePathParams };
var PostSetupV1ServicesIdUploadimageRequests = /** @class */ (function (_super) {
    __extends(PostSetupV1ServicesIdUploadimageRequests, _super);
    function PostSetupV1ServicesIdUploadimageRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ServiceImageInputModel)
    ], PostSetupV1ServicesIdUploadimageRequests.prototype, "serviceImageInputModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ServiceImageInputModel)
    ], PostSetupV1ServicesIdUploadimageRequests.prototype, "serviceImageInputModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ServiceImageInputModel)
    ], PostSetupV1ServicesIdUploadimageRequests.prototype, "serviceImageInputModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ServiceImageInputModel)
    ], PostSetupV1ServicesIdUploadimageRequests.prototype, "serviceImageInputModel3", void 0);
    return PostSetupV1ServicesIdUploadimageRequests;
}(SpeakeasyBase));
export { PostSetupV1ServicesIdUploadimageRequests };
var PostSetupV1ServicesIdUploadimageRequest = /** @class */ (function (_super) {
    __extends(PostSetupV1ServicesIdUploadimageRequest, _super);
    function PostSetupV1ServicesIdUploadimageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1ServicesIdUploadimagePathParams)
    ], PostSetupV1ServicesIdUploadimageRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1ServicesIdUploadimageRequests)
    ], PostSetupV1ServicesIdUploadimageRequest.prototype, "request", void 0);
    return PostSetupV1ServicesIdUploadimageRequest;
}(SpeakeasyBase));
export { PostSetupV1ServicesIdUploadimageRequest };
var PostSetupV1ServicesIdUploadimageResponse = /** @class */ (function (_super) {
    __extends(PostSetupV1ServicesIdUploadimageResponse, _super);
    function PostSetupV1ServicesIdUploadimageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSetupV1ServicesIdUploadimageResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ServiceViewModel)
    ], PostSetupV1ServicesIdUploadimageResponse.prototype, "serviceViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSetupV1ServicesIdUploadimageResponse.prototype, "statusCode", void 0);
    return PostSetupV1ServicesIdUploadimageResponse;
}(SpeakeasyBase));
export { PostSetupV1ServicesIdUploadimageResponse };
