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
var PostSetupV1ResourcesIdAllocationsPathParams = /** @class */ (function (_super) {
    __extends(PostSetupV1ResourcesIdAllocationsPathParams, _super);
    function PostSetupV1ResourcesIdAllocationsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], PostSetupV1ResourcesIdAllocationsPathParams.prototype, "id", void 0);
    return PostSetupV1ResourcesIdAllocationsPathParams;
}(SpeakeasyBase));
export { PostSetupV1ResourcesIdAllocationsPathParams };
var PostSetupV1ResourcesIdAllocationsRequests = /** @class */ (function (_super) {
    __extends(PostSetupV1ResourcesIdAllocationsRequests, _super);
    function PostSetupV1ResourcesIdAllocationsRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.ResourceAllocationInputModel)
    ], PostSetupV1ResourcesIdAllocationsRequests.prototype, "resourceAllocationInputModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResourceAllocationInputModel)
    ], PostSetupV1ResourcesIdAllocationsRequests.prototype, "resourceAllocationInputModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", shared.ResourceAllocationInputModel)
    ], PostSetupV1ResourcesIdAllocationsRequests.prototype, "resourceAllocationInputModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.ResourceAllocationInputModel)
    ], PostSetupV1ResourcesIdAllocationsRequests.prototype, "resourceAllocationInputModel3", void 0);
    return PostSetupV1ResourcesIdAllocationsRequests;
}(SpeakeasyBase));
export { PostSetupV1ResourcesIdAllocationsRequests };
var PostSetupV1ResourcesIdAllocationsRequest = /** @class */ (function (_super) {
    __extends(PostSetupV1ResourcesIdAllocationsRequest, _super);
    function PostSetupV1ResourcesIdAllocationsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1ResourcesIdAllocationsPathParams)
    ], PostSetupV1ResourcesIdAllocationsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1ResourcesIdAllocationsRequests)
    ], PostSetupV1ResourcesIdAllocationsRequest.prototype, "request", void 0);
    return PostSetupV1ResourcesIdAllocationsRequest;
}(SpeakeasyBase));
export { PostSetupV1ResourcesIdAllocationsRequest };
var PostSetupV1ResourcesIdAllocationsResponse = /** @class */ (function (_super) {
    __extends(PostSetupV1ResourcesIdAllocationsResponse, _super);
    function PostSetupV1ResourcesIdAllocationsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSetupV1ResourcesIdAllocationsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceBlockViewModel)
    ], PostSetupV1ResourcesIdAllocationsResponse.prototype, "resourceBlockViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSetupV1ResourcesIdAllocationsResponse.prototype, "statusCode", void 0);
    return PostSetupV1ResourcesIdAllocationsResponse;
}(SpeakeasyBase));
export { PostSetupV1ResourcesIdAllocationsResponse };
