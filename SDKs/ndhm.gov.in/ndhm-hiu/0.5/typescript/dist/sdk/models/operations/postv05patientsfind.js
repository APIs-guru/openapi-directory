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
var PostV05PatientsFindHeaders = /** @class */ (function (_super) {
    __extends(PostV05PatientsFindHeaders, _super);
    function PostV05PatientsFindHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05PatientsFindHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-CM-ID" }),
        __metadata("design:type", String)
    ], PostV05PatientsFindHeaders.prototype, "xCmId", void 0);
    return PostV05PatientsFindHeaders;
}(SpeakeasyBase));
export { PostV05PatientsFindHeaders };
var PostV05PatientsFindRequests = /** @class */ (function (_super) {
    __extends(PostV05PatientsFindRequests, _super);
    function PostV05PatientsFindRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05PatientsFindRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PatientIdentificationRequest)
    ], PostV05PatientsFindRequests.prototype, "patientIdentificationRequest", void 0);
    return PostV05PatientsFindRequests;
}(SpeakeasyBase));
export { PostV05PatientsFindRequests };
var PostV05PatientsFindRequest = /** @class */ (function (_super) {
    __extends(PostV05PatientsFindRequest, _super);
    function PostV05PatientsFindRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05PatientsFindHeaders)
    ], PostV05PatientsFindRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05PatientsFindRequests)
    ], PostV05PatientsFindRequest.prototype, "request", void 0);
    return PostV05PatientsFindRequest;
}(SpeakeasyBase));
export { PostV05PatientsFindRequest };
var PostV05PatientsFindResponse = /** @class */ (function (_super) {
    __extends(PostV05PatientsFindResponse, _super);
    function PostV05PatientsFindResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05PatientsFindResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05PatientsFindResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05PatientsFindResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05PatientsFindResponse.prototype, "statusCode", void 0);
    return PostV05PatientsFindResponse;
}(SpeakeasyBase));
export { PostV05PatientsFindResponse };
