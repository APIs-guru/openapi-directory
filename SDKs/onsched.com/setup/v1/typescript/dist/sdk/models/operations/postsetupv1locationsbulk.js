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
var PostSetupV1LocationsBulkRequests = /** @class */ (function (_super) {
    __extends(PostSetupV1LocationsBulkRequests, _super);
    function PostSetupV1LocationsBulkRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", Map)
    ], PostSetupV1LocationsBulkRequests.prototype, "locationsInputModel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], PostSetupV1LocationsBulkRequests.prototype, "locationsInputModel1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" }),
        __metadata("design:type", Map)
    ], PostSetupV1LocationsBulkRequests.prototype, "locationsInputModel2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", Map)
    ], PostSetupV1LocationsBulkRequests.prototype, "locationsInputModel3", void 0);
    return PostSetupV1LocationsBulkRequests;
}(SpeakeasyBase));
export { PostSetupV1LocationsBulkRequests };
var PostSetupV1LocationsBulkRequest = /** @class */ (function (_super) {
    __extends(PostSetupV1LocationsBulkRequest, _super);
    function PostSetupV1LocationsBulkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostSetupV1LocationsBulkRequests)
    ], PostSetupV1LocationsBulkRequest.prototype, "request", void 0);
    return PostSetupV1LocationsBulkRequest;
}(SpeakeasyBase));
export { PostSetupV1LocationsBulkRequest };
var PostSetupV1LocationsBulkResponse = /** @class */ (function (_super) {
    __extends(PostSetupV1LocationsBulkResponse, _super);
    function PostSetupV1LocationsBulkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostSetupV1LocationsBulkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.LocationViewModel }),
        __metadata("design:type", Array)
    ], PostSetupV1LocationsBulkResponse.prototype, "locationViewModels", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostSetupV1LocationsBulkResponse.prototype, "statusCode", void 0);
    return PostSetupV1LocationsBulkResponse;
}(SpeakeasyBase));
export { PostSetupV1LocationsBulkResponse };
