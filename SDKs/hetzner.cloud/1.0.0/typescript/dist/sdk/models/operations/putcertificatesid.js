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
var PutCertificatesIdPathParams = /** @class */ (function (_super) {
    __extends(PutCertificatesIdPathParams, _super);
    function PutCertificatesIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PutCertificatesIdPathParams.prototype, "id", void 0);
    return PutCertificatesIdPathParams;
}(SpeakeasyBase));
export { PutCertificatesIdPathParams };
var PutCertificatesIdUpdateCertificateRequest = /** @class */ (function (_super) {
    __extends(PutCertificatesIdUpdateCertificateRequest, _super);
    function PutCertificatesIdUpdateCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PutCertificatesIdUpdateCertificateRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutCertificatesIdUpdateCertificateRequest.prototype, "name", void 0);
    return PutCertificatesIdUpdateCertificateRequest;
}(SpeakeasyBase));
export { PutCertificatesIdUpdateCertificateRequest };
// PutCertificatesIdCertificateResponseCertificateStatusError
/**
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
var PutCertificatesIdCertificateResponseCertificateStatusError = /** @class */ (function (_super) {
    __extends(PutCertificatesIdCertificateResponseCertificateStatusError, _super);
    function PutCertificatesIdCertificateResponseCertificateStatusError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PutCertificatesIdCertificateResponseCertificateStatusError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PutCertificatesIdCertificateResponseCertificateStatusError.prototype, "message", void 0);
    return PutCertificatesIdCertificateResponseCertificateStatusError;
}(SpeakeasyBase));
export { PutCertificatesIdCertificateResponseCertificateStatusError };
export var PutCertificatesIdCertificateResponseCertificateStatusIssuanceEnum;
(function (PutCertificatesIdCertificateResponseCertificateStatusIssuanceEnum) {
    PutCertificatesIdCertificateResponseCertificateStatusIssuanceEnum["Pending"] = "pending";
    PutCertificatesIdCertificateResponseCertificateStatusIssuanceEnum["Completed"] = "completed";
    PutCertificatesIdCertificateResponseCertificateStatusIssuanceEnum["Failed"] = "failed";
})(PutCertificatesIdCertificateResponseCertificateStatusIssuanceEnum || (PutCertificatesIdCertificateResponseCertificateStatusIssuanceEnum = {}));
export var PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum;
(function (PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum) {
    PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum["Scheduled"] = "scheduled";
    PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum["Pending"] = "pending";
    PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum["Failed"] = "failed";
    PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum["Unavailable"] = "unavailable";
})(PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum || (PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum = {}));
// PutCertificatesIdCertificateResponseCertificateStatus
/**
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
var PutCertificatesIdCertificateResponseCertificateStatus = /** @class */ (function (_super) {
    __extends(PutCertificatesIdCertificateResponseCertificateStatus, _super);
    function PutCertificatesIdCertificateResponseCertificateStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PutCertificatesIdCertificateResponseCertificateStatusError)
    ], PutCertificatesIdCertificateResponseCertificateStatus.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuance" }),
        __metadata("design:type", String)
    ], PutCertificatesIdCertificateResponseCertificateStatus.prototype, "issuance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renewal" }),
        __metadata("design:type", String)
    ], PutCertificatesIdCertificateResponseCertificateStatus.prototype, "renewal", void 0);
    return PutCertificatesIdCertificateResponseCertificateStatus;
}(SpeakeasyBase));
export { PutCertificatesIdCertificateResponseCertificateStatus };
export var PutCertificatesIdCertificateResponseCertificateTypeEnum;
(function (PutCertificatesIdCertificateResponseCertificateTypeEnum) {
    PutCertificatesIdCertificateResponseCertificateTypeEnum["Uploaded"] = "uploaded";
    PutCertificatesIdCertificateResponseCertificateTypeEnum["Managed"] = "managed";
})(PutCertificatesIdCertificateResponseCertificateTypeEnum || (PutCertificatesIdCertificateResponseCertificateTypeEnum = {}));
var PutCertificatesIdCertificateResponseCertificateUsedBy = /** @class */ (function (_super) {
    __extends(PutCertificatesIdCertificateResponseCertificateUsedBy, _super);
    function PutCertificatesIdCertificateResponseCertificateUsedBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutCertificatesIdCertificateResponseCertificateUsedBy.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutCertificatesIdCertificateResponseCertificateUsedBy.prototype, "type", void 0);
    return PutCertificatesIdCertificateResponseCertificateUsedBy;
}(SpeakeasyBase));
export { PutCertificatesIdCertificateResponseCertificateUsedBy };
var PutCertificatesIdCertificateResponseCertificate = /** @class */ (function (_super) {
    __extends(PutCertificatesIdCertificateResponseCertificate, _super);
    function PutCertificatesIdCertificateResponseCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificate" }),
        __metadata("design:type", String)
    ], PutCertificatesIdCertificateResponseCertificate.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PutCertificatesIdCertificateResponseCertificate.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain_names" }),
        __metadata("design:type", Array)
    ], PutCertificatesIdCertificateResponseCertificate.prototype, "domainNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], PutCertificatesIdCertificateResponseCertificate.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PutCertificatesIdCertificateResponseCertificate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PutCertificatesIdCertificateResponseCertificate.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PutCertificatesIdCertificateResponseCertificate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=not_valid_after" }),
        __metadata("design:type", String)
    ], PutCertificatesIdCertificateResponseCertificate.prototype, "notValidAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=not_valid_before" }),
        __metadata("design:type", String)
    ], PutCertificatesIdCertificateResponseCertificate.prototype, "notValidBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", PutCertificatesIdCertificateResponseCertificateStatus)
    ], PutCertificatesIdCertificateResponseCertificate.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PutCertificatesIdCertificateResponseCertificate.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used_by", elemType: PutCertificatesIdCertificateResponseCertificateUsedBy }),
        __metadata("design:type", Array)
    ], PutCertificatesIdCertificateResponseCertificate.prototype, "usedBy", void 0);
    return PutCertificatesIdCertificateResponseCertificate;
}(SpeakeasyBase));
export { PutCertificatesIdCertificateResponseCertificate };
var PutCertificatesIdCertificateResponse = /** @class */ (function (_super) {
    __extends(PutCertificatesIdCertificateResponse, _super);
    function PutCertificatesIdCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificate" }),
        __metadata("design:type", PutCertificatesIdCertificateResponseCertificate)
    ], PutCertificatesIdCertificateResponse.prototype, "certificate", void 0);
    return PutCertificatesIdCertificateResponse;
}(SpeakeasyBase));
export { PutCertificatesIdCertificateResponse };
var PutCertificatesIdRequest = /** @class */ (function (_super) {
    __extends(PutCertificatesIdRequest, _super);
    function PutCertificatesIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCertificatesIdPathParams)
    ], PutCertificatesIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PutCertificatesIdUpdateCertificateRequest)
    ], PutCertificatesIdRequest.prototype, "request", void 0);
    return PutCertificatesIdRequest;
}(SpeakeasyBase));
export { PutCertificatesIdRequest };
var PutCertificatesIdResponse = /** @class */ (function (_super) {
    __extends(PutCertificatesIdResponse, _super);
    function PutCertificatesIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutCertificatesIdCertificateResponse)
    ], PutCertificatesIdResponse.prototype, "certificateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutCertificatesIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutCertificatesIdResponse.prototype, "statusCode", void 0);
    return PutCertificatesIdResponse;
}(SpeakeasyBase));
export { PutCertificatesIdResponse };
