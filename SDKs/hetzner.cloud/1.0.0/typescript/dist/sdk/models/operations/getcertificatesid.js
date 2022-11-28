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
var GetCertificatesIdPathParams = /** @class */ (function (_super) {
    __extends(GetCertificatesIdPathParams, _super);
    function GetCertificatesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdPathParams.prototype, "id", void 0);
    return GetCertificatesIdPathParams;
}(SpeakeasyBase));
export { GetCertificatesIdPathParams };
// GetCertificatesIdCertificateResponseCertificateStatusError
/**
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
var GetCertificatesIdCertificateResponseCertificateStatusError = /** @class */ (function (_super) {
    __extends(GetCertificatesIdCertificateResponseCertificateStatusError, _super);
    function GetCertificatesIdCertificateResponseCertificateStatusError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], GetCertificatesIdCertificateResponseCertificateStatusError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], GetCertificatesIdCertificateResponseCertificateStatusError.prototype, "message", void 0);
    return GetCertificatesIdCertificateResponseCertificateStatusError;
}(SpeakeasyBase));
export { GetCertificatesIdCertificateResponseCertificateStatusError };
export var GetCertificatesIdCertificateResponseCertificateStatusIssuanceEnum;
(function (GetCertificatesIdCertificateResponseCertificateStatusIssuanceEnum) {
    GetCertificatesIdCertificateResponseCertificateStatusIssuanceEnum["Pending"] = "pending";
    GetCertificatesIdCertificateResponseCertificateStatusIssuanceEnum["Completed"] = "completed";
    GetCertificatesIdCertificateResponseCertificateStatusIssuanceEnum["Failed"] = "failed";
})(GetCertificatesIdCertificateResponseCertificateStatusIssuanceEnum || (GetCertificatesIdCertificateResponseCertificateStatusIssuanceEnum = {}));
export var GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum;
(function (GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum) {
    GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum["Scheduled"] = "scheduled";
    GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum["Pending"] = "pending";
    GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum["Failed"] = "failed";
    GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum["Unavailable"] = "unavailable";
})(GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum || (GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum = {}));
// GetCertificatesIdCertificateResponseCertificateStatus
/**
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
var GetCertificatesIdCertificateResponseCertificateStatus = /** @class */ (function (_super) {
    __extends(GetCertificatesIdCertificateResponseCertificateStatus, _super);
    function GetCertificatesIdCertificateResponseCertificateStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", GetCertificatesIdCertificateResponseCertificateStatusError)
    ], GetCertificatesIdCertificateResponseCertificateStatus.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuance" }),
        __metadata("design:type", String)
    ], GetCertificatesIdCertificateResponseCertificateStatus.prototype, "issuance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renewal" }),
        __metadata("design:type", String)
    ], GetCertificatesIdCertificateResponseCertificateStatus.prototype, "renewal", void 0);
    return GetCertificatesIdCertificateResponseCertificateStatus;
}(SpeakeasyBase));
export { GetCertificatesIdCertificateResponseCertificateStatus };
export var GetCertificatesIdCertificateResponseCertificateTypeEnum;
(function (GetCertificatesIdCertificateResponseCertificateTypeEnum) {
    GetCertificatesIdCertificateResponseCertificateTypeEnum["Uploaded"] = "uploaded";
    GetCertificatesIdCertificateResponseCertificateTypeEnum["Managed"] = "managed";
})(GetCertificatesIdCertificateResponseCertificateTypeEnum || (GetCertificatesIdCertificateResponseCertificateTypeEnum = {}));
var GetCertificatesIdCertificateResponseCertificateUsedBy = /** @class */ (function (_super) {
    __extends(GetCertificatesIdCertificateResponseCertificateUsedBy, _super);
    function GetCertificatesIdCertificateResponseCertificateUsedBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdCertificateResponseCertificateUsedBy.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetCertificatesIdCertificateResponseCertificateUsedBy.prototype, "type", void 0);
    return GetCertificatesIdCertificateResponseCertificateUsedBy;
}(SpeakeasyBase));
export { GetCertificatesIdCertificateResponseCertificateUsedBy };
var GetCertificatesIdCertificateResponseCertificate = /** @class */ (function (_super) {
    __extends(GetCertificatesIdCertificateResponseCertificate, _super);
    function GetCertificatesIdCertificateResponseCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificate" }),
        __metadata("design:type", String)
    ], GetCertificatesIdCertificateResponseCertificate.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], GetCertificatesIdCertificateResponseCertificate.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain_names" }),
        __metadata("design:type", Array)
    ], GetCertificatesIdCertificateResponseCertificate.prototype, "domainNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], GetCertificatesIdCertificateResponseCertificate.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], GetCertificatesIdCertificateResponseCertificate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], GetCertificatesIdCertificateResponseCertificate.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetCertificatesIdCertificateResponseCertificate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=not_valid_after" }),
        __metadata("design:type", String)
    ], GetCertificatesIdCertificateResponseCertificate.prototype, "notValidAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=not_valid_before" }),
        __metadata("design:type", String)
    ], GetCertificatesIdCertificateResponseCertificate.prototype, "notValidBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", GetCertificatesIdCertificateResponseCertificateStatus)
    ], GetCertificatesIdCertificateResponseCertificate.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], GetCertificatesIdCertificateResponseCertificate.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used_by", elemType: GetCertificatesIdCertificateResponseCertificateUsedBy }),
        __metadata("design:type", Array)
    ], GetCertificatesIdCertificateResponseCertificate.prototype, "usedBy", void 0);
    return GetCertificatesIdCertificateResponseCertificate;
}(SpeakeasyBase));
export { GetCertificatesIdCertificateResponseCertificate };
var GetCertificatesIdCertificateResponse = /** @class */ (function (_super) {
    __extends(GetCertificatesIdCertificateResponse, _super);
    function GetCertificatesIdCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificate" }),
        __metadata("design:type", GetCertificatesIdCertificateResponseCertificate)
    ], GetCertificatesIdCertificateResponse.prototype, "certificate", void 0);
    return GetCertificatesIdCertificateResponse;
}(SpeakeasyBase));
export { GetCertificatesIdCertificateResponse };
var GetCertificatesIdRequest = /** @class */ (function (_super) {
    __extends(GetCertificatesIdRequest, _super);
    function GetCertificatesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCertificatesIdPathParams)
    ], GetCertificatesIdRequest.prototype, "pathParams", void 0);
    return GetCertificatesIdRequest;
}(SpeakeasyBase));
export { GetCertificatesIdRequest };
var GetCertificatesIdResponse = /** @class */ (function (_super) {
    __extends(GetCertificatesIdResponse, _super);
    function GetCertificatesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCertificatesIdCertificateResponse)
    ], GetCertificatesIdResponse.prototype, "certificateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCertificatesIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCertificatesIdResponse.prototype, "statusCode", void 0);
    return GetCertificatesIdResponse;
}(SpeakeasyBase));
export { GetCertificatesIdResponse };
