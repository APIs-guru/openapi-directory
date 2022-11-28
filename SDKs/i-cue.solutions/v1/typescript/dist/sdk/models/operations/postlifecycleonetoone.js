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
var PostLifecycleOneToOneHeaders = /** @class */ (function (_super) {
    __extends(PostLifecycleOneToOneHeaders, _super);
    function PostLifecycleOneToOneHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" }),
        __metadata("design:type", String)
    ], PostLifecycleOneToOneHeaders.prototype, "token", void 0);
    return PostLifecycleOneToOneHeaders;
}(SpeakeasyBase));
export { PostLifecycleOneToOneHeaders };
var PostLifecycleOneToOneRequests = /** @class */ (function (_super) {
    __extends(PostLifecycleOneToOneRequests, _super);
    function PostLifecycleOneToOneRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.LifecycleOneToOneRequest)
    ], PostLifecycleOneToOneRequests.prototype, "lifecycleOneToOneRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.LifecycleOneToOneRequest)
    ], PostLifecycleOneToOneRequests.prototype, "lifecycleOneToOneRequest1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.LifecycleOneToOneRequest)
    ], PostLifecycleOneToOneRequests.prototype, "lifecycleOneToOneRequest2", void 0);
    return PostLifecycleOneToOneRequests;
}(SpeakeasyBase));
export { PostLifecycleOneToOneRequests };
var PostLifecycleOneToOneRequest = /** @class */ (function (_super) {
    __extends(PostLifecycleOneToOneRequest, _super);
    function PostLifecycleOneToOneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLifecycleOneToOneHeaders)
    ], PostLifecycleOneToOneRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostLifecycleOneToOneRequests)
    ], PostLifecycleOneToOneRequest.prototype, "request", void 0);
    return PostLifecycleOneToOneRequest;
}(SpeakeasyBase));
export { PostLifecycleOneToOneRequest };
var PostLifecycleOneToOneResponse = /** @class */ (function (_super) {
    __extends(PostLifecycleOneToOneResponse, _super);
    function PostLifecycleOneToOneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostLifecycleOneToOneResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostLifecycleOneToOneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PlanningLevelDataDto)
    ], PostLifecycleOneToOneResponse.prototype, "planningLevelDataDto", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostLifecycleOneToOneResponse.prototype, "statusCode", void 0);
    return PostLifecycleOneToOneResponse;
}(SpeakeasyBase));
export { PostLifecycleOneToOneResponse };
