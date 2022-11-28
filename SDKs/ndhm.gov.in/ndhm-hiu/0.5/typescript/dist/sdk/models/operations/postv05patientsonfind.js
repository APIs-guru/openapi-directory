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
export var PostV05PatientsOnFindServerList = [
    "https://dev.ndhm.gov.in/hiu",
];
var PostV05PatientsOnFindHeaders = /** @class */ (function (_super) {
    __extends(PostV05PatientsOnFindHeaders, _super);
    function PostV05PatientsOnFindHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05PatientsOnFindHeaders.prototype, "authorization", void 0);
    return PostV05PatientsOnFindHeaders;
}(SpeakeasyBase));
export { PostV05PatientsOnFindHeaders };
var PostV05PatientsOnFindRequests = /** @class */ (function (_super) {
    __extends(PostV05PatientsOnFindRequests, _super);
    function PostV05PatientsOnFindRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05PatientsOnFindRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PatientIdentificationResponse)
    ], PostV05PatientsOnFindRequests.prototype, "patientIdentificationResponse", void 0);
    return PostV05PatientsOnFindRequests;
}(SpeakeasyBase));
export { PostV05PatientsOnFindRequests };
var PostV05PatientsOnFindRequest = /** @class */ (function (_super) {
    __extends(PostV05PatientsOnFindRequest, _super);
    function PostV05PatientsOnFindRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05PatientsOnFindRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05PatientsOnFindHeaders)
    ], PostV05PatientsOnFindRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05PatientsOnFindRequests)
    ], PostV05PatientsOnFindRequest.prototype, "request", void 0);
    return PostV05PatientsOnFindRequest;
}(SpeakeasyBase));
export { PostV05PatientsOnFindRequest };
var PostV05PatientsOnFindResponse = /** @class */ (function (_super) {
    __extends(PostV05PatientsOnFindResponse, _super);
    function PostV05PatientsOnFindResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05PatientsOnFindResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05PatientsOnFindResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05PatientsOnFindResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05PatientsOnFindResponse.prototype, "statusCode", void 0);
    return PostV05PatientsOnFindResponse;
}(SpeakeasyBase));
export { PostV05PatientsOnFindResponse };
