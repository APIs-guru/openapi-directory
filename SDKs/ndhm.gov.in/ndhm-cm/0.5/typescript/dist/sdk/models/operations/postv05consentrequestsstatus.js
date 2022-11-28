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
var PostV05ConsentRequestsStatusHeaders = /** @class */ (function (_super) {
    __extends(PostV05ConsentRequestsStatusHeaders, _super);
    function PostV05ConsentRequestsStatusHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05ConsentRequestsStatusHeaders.prototype, "authorization", void 0);
    return PostV05ConsentRequestsStatusHeaders;
}(SpeakeasyBase));
export { PostV05ConsentRequestsStatusHeaders };
var PostV05ConsentRequestsStatusRequests = /** @class */ (function (_super) {
    __extends(PostV05ConsentRequestsStatusRequests, _super);
    function PostV05ConsentRequestsStatusRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05ConsentRequestsStatusRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ConsentRequestStatusRequest)
    ], PostV05ConsentRequestsStatusRequests.prototype, "consentRequestStatusRequest", void 0);
    return PostV05ConsentRequestsStatusRequests;
}(SpeakeasyBase));
export { PostV05ConsentRequestsStatusRequests };
var PostV05ConsentRequestsStatusRequest = /** @class */ (function (_super) {
    __extends(PostV05ConsentRequestsStatusRequest, _super);
    function PostV05ConsentRequestsStatusRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05ConsentRequestsStatusHeaders)
    ], PostV05ConsentRequestsStatusRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05ConsentRequestsStatusRequests)
    ], PostV05ConsentRequestsStatusRequest.prototype, "request", void 0);
    return PostV05ConsentRequestsStatusRequest;
}(SpeakeasyBase));
export { PostV05ConsentRequestsStatusRequest };
var PostV05ConsentRequestsStatusResponse = /** @class */ (function (_super) {
    __extends(PostV05ConsentRequestsStatusResponse, _super);
    function PostV05ConsentRequestsStatusResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05ConsentRequestsStatusResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05ConsentRequestsStatusResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05ConsentRequestsStatusResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05ConsentRequestsStatusResponse.prototype, "statusCode", void 0);
    return PostV05ConsentRequestsStatusResponse;
}(SpeakeasyBase));
export { PostV05ConsentRequestsStatusResponse };
