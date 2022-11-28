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
var PostV05PatientsSmsNotifyHeaders = /** @class */ (function (_super) {
    __extends(PostV05PatientsSmsNotifyHeaders, _super);
    function PostV05PatientsSmsNotifyHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05PatientsSmsNotifyHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-CM-ID" }),
        __metadata("design:type", String)
    ], PostV05PatientsSmsNotifyHeaders.prototype, "xCmId", void 0);
    return PostV05PatientsSmsNotifyHeaders;
}(SpeakeasyBase));
export { PostV05PatientsSmsNotifyHeaders };
var PostV05PatientsSmsNotifyRequests = /** @class */ (function (_super) {
    __extends(PostV05PatientsSmsNotifyRequests, _super);
    function PostV05PatientsSmsNotifyRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05PatientsSmsNotifyRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PatientSmsNotifcationRequest)
    ], PostV05PatientsSmsNotifyRequests.prototype, "patientSmsNotifcationRequest", void 0);
    return PostV05PatientsSmsNotifyRequests;
}(SpeakeasyBase));
export { PostV05PatientsSmsNotifyRequests };
var PostV05PatientsSmsNotifyRequest = /** @class */ (function (_super) {
    __extends(PostV05PatientsSmsNotifyRequest, _super);
    function PostV05PatientsSmsNotifyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05PatientsSmsNotifyHeaders)
    ], PostV05PatientsSmsNotifyRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05PatientsSmsNotifyRequests)
    ], PostV05PatientsSmsNotifyRequest.prototype, "request", void 0);
    return PostV05PatientsSmsNotifyRequest;
}(SpeakeasyBase));
export { PostV05PatientsSmsNotifyRequest };
var PostV05PatientsSmsNotifyResponse = /** @class */ (function (_super) {
    __extends(PostV05PatientsSmsNotifyResponse, _super);
    function PostV05PatientsSmsNotifyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05PatientsSmsNotifyResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05PatientsSmsNotifyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05PatientsSmsNotifyResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05PatientsSmsNotifyResponse.prototype, "statusCode", void 0);
    return PostV05PatientsSmsNotifyResponse;
}(SpeakeasyBase));
export { PostV05PatientsSmsNotifyResponse };
