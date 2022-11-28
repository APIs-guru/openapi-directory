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
var PostV05PatientsSmsOnNotifyHeaders = /** @class */ (function (_super) {
    __extends(PostV05PatientsSmsOnNotifyHeaders, _super);
    function PostV05PatientsSmsOnNotifyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05PatientsSmsOnNotifyHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-HIP-ID" }),
        __metadata("design:type", String)
    ], PostV05PatientsSmsOnNotifyHeaders.prototype, "xHipId", void 0);
    return PostV05PatientsSmsOnNotifyHeaders;
}(SpeakeasyBase));
export { PostV05PatientsSmsOnNotifyHeaders };
var PostV05PatientsSmsOnNotifyRequests = /** @class */ (function (_super) {
    __extends(PostV05PatientsSmsOnNotifyRequests, _super);
    function PostV05PatientsSmsOnNotifyRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05PatientsSmsOnNotifyRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PatientSmsNotifcationResponse)
    ], PostV05PatientsSmsOnNotifyRequests.prototype, "patientSmsNotifcationResponse", void 0);
    return PostV05PatientsSmsOnNotifyRequests;
}(SpeakeasyBase));
export { PostV05PatientsSmsOnNotifyRequests };
var PostV05PatientsSmsOnNotifyRequest = /** @class */ (function (_super) {
    __extends(PostV05PatientsSmsOnNotifyRequest, _super);
    function PostV05PatientsSmsOnNotifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05PatientsSmsOnNotifyHeaders)
    ], PostV05PatientsSmsOnNotifyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05PatientsSmsOnNotifyRequests)
    ], PostV05PatientsSmsOnNotifyRequest.prototype, "request", void 0);
    return PostV05PatientsSmsOnNotifyRequest;
}(SpeakeasyBase));
export { PostV05PatientsSmsOnNotifyRequest };
var PostV05PatientsSmsOnNotifyResponse = /** @class */ (function (_super) {
    __extends(PostV05PatientsSmsOnNotifyResponse, _super);
    function PostV05PatientsSmsOnNotifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05PatientsSmsOnNotifyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05PatientsSmsOnNotifyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05PatientsSmsOnNotifyResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05PatientsSmsOnNotifyResponse.prototype, "statusCode", void 0);
    return PostV05PatientsSmsOnNotifyResponse;
}(SpeakeasyBase));
export { PostV05PatientsSmsOnNotifyResponse };
