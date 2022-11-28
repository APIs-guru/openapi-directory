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
export var PostV05CareContextsDiscoverServerList = [
    "https://your-hrp-server.com",
];
var PostV05CareContextsDiscoverHeaders = /** @class */ (function (_super) {
    __extends(PostV05CareContextsDiscoverHeaders, _super);
    function PostV05CareContextsDiscoverHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05CareContextsDiscoverHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" }),
        __metadata("design:type", String)
    ], PostV05CareContextsDiscoverHeaders.prototype, "xHipId", void 0);
    return PostV05CareContextsDiscoverHeaders;
}(SpeakeasyBase));
export { PostV05CareContextsDiscoverHeaders };
var PostV05CareContextsDiscoverRequests = /** @class */ (function (_super) {
    __extends(PostV05CareContextsDiscoverRequests, _super);
    function PostV05CareContextsDiscoverRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05CareContextsDiscoverRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PatientDiscoveryRequest)
    ], PostV05CareContextsDiscoverRequests.prototype, "patientDiscoveryRequest", void 0);
    return PostV05CareContextsDiscoverRequests;
}(SpeakeasyBase));
export { PostV05CareContextsDiscoverRequests };
var PostV05CareContextsDiscoverRequest = /** @class */ (function (_super) {
    __extends(PostV05CareContextsDiscoverRequest, _super);
    function PostV05CareContextsDiscoverRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05CareContextsDiscoverRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05CareContextsDiscoverHeaders)
    ], PostV05CareContextsDiscoverRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05CareContextsDiscoverRequests)
    ], PostV05CareContextsDiscoverRequest.prototype, "request", void 0);
    return PostV05CareContextsDiscoverRequest;
}(SpeakeasyBase));
export { PostV05CareContextsDiscoverRequest };
var PostV05CareContextsDiscoverResponse = /** @class */ (function (_super) {
    __extends(PostV05CareContextsDiscoverResponse, _super);
    function PostV05CareContextsDiscoverResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05CareContextsDiscoverResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05CareContextsDiscoverResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05CareContextsDiscoverResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05CareContextsDiscoverResponse.prototype, "statusCode", void 0);
    return PostV05CareContextsDiscoverResponse;
}(SpeakeasyBase));
export { PostV05CareContextsDiscoverResponse };
