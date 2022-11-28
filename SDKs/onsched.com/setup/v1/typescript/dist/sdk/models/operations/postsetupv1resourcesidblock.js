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
var PostSetupV1ResourcesIdBlockPathParams = /** @class */ (function (_super) {
    __extends(PostSetupV1ResourcesIdBlockPathParams, _super);
    function PostSetupV1ResourcesIdBlockPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostSetupV1ResourcesIdBlockPathParams.prototype, "id", void 0);
    return PostSetupV1ResourcesIdBlockPathParams;
}(SpeakeasyBase));
export { PostSetupV1ResourcesIdBlockPathParams };
var PostSetupV1ResourcesIdBlockRequests = /** @class */ (function (_super) {
    __extends(PostSetupV1ResourcesIdBlockRequests, _super);
    function PostSetupV1ResourcesIdBlockRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ResourceBlockInputModel)
    ], PostSetupV1ResourcesIdBlockRequests.prototype, "resourceBlockInputModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResourceBlockInputModel)
    ], PostSetupV1ResourcesIdBlockRequests.prototype, "resourceBlockInputModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ResourceBlockInputModel)
    ], PostSetupV1ResourcesIdBlockRequests.prototype, "resourceBlockInputModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ResourceBlockInputModel)
    ], PostSetupV1ResourcesIdBlockRequests.prototype, "resourceBlockInputModel3", void 0);
    return PostSetupV1ResourcesIdBlockRequests;
}(SpeakeasyBase));
export { PostSetupV1ResourcesIdBlockRequests };
var PostSetupV1ResourcesIdBlockRequest = /** @class */ (function (_super) {
    __extends(PostSetupV1ResourcesIdBlockRequest, _super);
    function PostSetupV1ResourcesIdBlockRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1ResourcesIdBlockPathParams)
    ], PostSetupV1ResourcesIdBlockRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1ResourcesIdBlockRequests)
    ], PostSetupV1ResourcesIdBlockRequest.prototype, "request", void 0);
    return PostSetupV1ResourcesIdBlockRequest;
}(SpeakeasyBase));
export { PostSetupV1ResourcesIdBlockRequest };
var PostSetupV1ResourcesIdBlockResponse = /** @class */ (function (_super) {
    __extends(PostSetupV1ResourcesIdBlockResponse, _super);
    function PostSetupV1ResourcesIdBlockResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSetupV1ResourcesIdBlockResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceBlockViewModel)
    ], PostSetupV1ResourcesIdBlockResponse.prototype, "resourceBlockViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSetupV1ResourcesIdBlockResponse.prototype, "statusCode", void 0);
    return PostSetupV1ResourcesIdBlockResponse;
}(SpeakeasyBase));
export { PostSetupV1ResourcesIdBlockResponse };
