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
var PostSetupV1ResourcesQueryParams = /** @class */ (function (_super) {
    __extends(PostSetupV1ResourcesQueryParams, _super);
    function PostSetupV1ResourcesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=googleAuthReturnUrl" }),
        __metadata("design:type", String)
    ], PostSetupV1ResourcesQueryParams.prototype, "googleAuthReturnUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=outlookAuthReturnUrl" }),
        __metadata("design:type", String)
    ], PostSetupV1ResourcesQueryParams.prototype, "outlookAuthReturnUrl", void 0);
    return PostSetupV1ResourcesQueryParams;
}(SpeakeasyBase));
export { PostSetupV1ResourcesQueryParams };
var PostSetupV1ResourcesRequests = /** @class */ (function (_super) {
    __extends(PostSetupV1ResourcesRequests, _super);
    function PostSetupV1ResourcesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ResourceInputModel)
    ], PostSetupV1ResourcesRequests.prototype, "resourceInputModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResourceInputModel)
    ], PostSetupV1ResourcesRequests.prototype, "resourceInputModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ResourceInputModel)
    ], PostSetupV1ResourcesRequests.prototype, "resourceInputModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ResourceInputModel)
    ], PostSetupV1ResourcesRequests.prototype, "resourceInputModel3", void 0);
    return PostSetupV1ResourcesRequests;
}(SpeakeasyBase));
export { PostSetupV1ResourcesRequests };
var PostSetupV1ResourcesRequest = /** @class */ (function (_super) {
    __extends(PostSetupV1ResourcesRequest, _super);
    function PostSetupV1ResourcesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1ResourcesQueryParams)
    ], PostSetupV1ResourcesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1ResourcesRequests)
    ], PostSetupV1ResourcesRequest.prototype, "request", void 0);
    return PostSetupV1ResourcesRequest;
}(SpeakeasyBase));
export { PostSetupV1ResourcesRequest };
var PostSetupV1ResourcesResponse = /** @class */ (function (_super) {
    __extends(PostSetupV1ResourcesResponse, _super);
    function PostSetupV1ResourcesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSetupV1ResourcesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceViewModel)
    ], PostSetupV1ResourcesResponse.prototype, "resourceViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSetupV1ResourcesResponse.prototype, "statusCode", void 0);
    return PostSetupV1ResourcesResponse;
}(SpeakeasyBase));
export { PostSetupV1ResourcesResponse };
