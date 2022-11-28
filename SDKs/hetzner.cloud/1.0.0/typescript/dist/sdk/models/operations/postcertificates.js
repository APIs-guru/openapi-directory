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
export var PostCertificatesCreateCertificateRequestTypeEnum;
(function (PostCertificatesCreateCertificateRequestTypeEnum) {
    PostCertificatesCreateCertificateRequestTypeEnum["Uploaded"] = "uploaded";
    PostCertificatesCreateCertificateRequestTypeEnum["Managed"] = "managed";
})(PostCertificatesCreateCertificateRequestTypeEnum || (PostCertificatesCreateCertificateRequestTypeEnum = {}));
var PostCertificatesCreateCertificateRequest = /** @class */ (function (_super) {
    __extends(PostCertificatesCreateCertificateRequest, _super);
    function PostCertificatesCreateCertificateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificate" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateRequest.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain_names" }),
        __metadata("design:type", Array)
    ], PostCertificatesCreateCertificateRequest.prototype, "domainNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PostCertificatesCreateCertificateRequest.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=private_key" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateRequest.prototype, "privateKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateRequest.prototype, "type", void 0);
    return PostCertificatesCreateCertificateRequest;
}(SpeakeasyBase));
export { PostCertificatesCreateCertificateRequest };
// PostCertificatesCreateCertificateResponseNullableActionError
/**
 * Error message for the Action if error occurred, otherwise null
**/
var PostCertificatesCreateCertificateResponseNullableActionError = /** @class */ (function (_super) {
    __extends(PostCertificatesCreateCertificateResponseNullableActionError, _super);
    function PostCertificatesCreateCertificateResponseNullableActionError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseNullableActionError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseNullableActionError.prototype, "message", void 0);
    return PostCertificatesCreateCertificateResponseNullableActionError;
}(SpeakeasyBase));
export { PostCertificatesCreateCertificateResponseNullableActionError };
var PostCertificatesCreateCertificateResponseNullableActionResources = /** @class */ (function (_super) {
    __extends(PostCertificatesCreateCertificateResponseNullableActionResources, _super);
    function PostCertificatesCreateCertificateResponseNullableActionResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostCertificatesCreateCertificateResponseNullableActionResources.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseNullableActionResources.prototype, "type", void 0);
    return PostCertificatesCreateCertificateResponseNullableActionResources;
}(SpeakeasyBase));
export { PostCertificatesCreateCertificateResponseNullableActionResources };
export var PostCertificatesCreateCertificateResponseNullableActionStatusEnum;
(function (PostCertificatesCreateCertificateResponseNullableActionStatusEnum) {
    PostCertificatesCreateCertificateResponseNullableActionStatusEnum["Success"] = "success";
    PostCertificatesCreateCertificateResponseNullableActionStatusEnum["Running"] = "running";
    PostCertificatesCreateCertificateResponseNullableActionStatusEnum["Error"] = "error";
})(PostCertificatesCreateCertificateResponseNullableActionStatusEnum || (PostCertificatesCreateCertificateResponseNullableActionStatusEnum = {}));
var PostCertificatesCreateCertificateResponseNullableAction = /** @class */ (function (_super) {
    __extends(PostCertificatesCreateCertificateResponseNullableAction, _super);
    function PostCertificatesCreateCertificateResponseNullableAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=command" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseNullableAction.prototype, "command", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostCertificatesCreateCertificateResponseNullableActionError)
    ], PostCertificatesCreateCertificateResponseNullableAction.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=finished" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseNullableAction.prototype, "finished", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostCertificatesCreateCertificateResponseNullableAction.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=progress" }),
        __metadata("design:type", Number)
    ], PostCertificatesCreateCertificateResponseNullableAction.prototype, "progress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resources", elemType: PostCertificatesCreateCertificateResponseNullableActionResources }),
        __metadata("design:type", Array)
    ], PostCertificatesCreateCertificateResponseNullableAction.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=started" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseNullableAction.prototype, "started", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseNullableAction.prototype, "status", void 0);
    return PostCertificatesCreateCertificateResponseNullableAction;
}(SpeakeasyBase));
export { PostCertificatesCreateCertificateResponseNullableAction };
// PostCertificatesCreateCertificateResponseCertificateStatusError
/**
 * If issuance or renewal reports `failed`, this property contains information about what happened
**/
var PostCertificatesCreateCertificateResponseCertificateStatusError = /** @class */ (function (_super) {
    __extends(PostCertificatesCreateCertificateResponseCertificateStatusError, _super);
    function PostCertificatesCreateCertificateResponseCertificateStatusError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseCertificateStatusError.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseCertificateStatusError.prototype, "message", void 0);
    return PostCertificatesCreateCertificateResponseCertificateStatusError;
}(SpeakeasyBase));
export { PostCertificatesCreateCertificateResponseCertificateStatusError };
export var PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum;
(function (PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum) {
    PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum["Pending"] = "pending";
    PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum["Completed"] = "completed";
    PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum["Failed"] = "failed";
})(PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum || (PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum = {}));
export var PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum;
(function (PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum) {
    PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum["Scheduled"] = "scheduled";
    PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum["Pending"] = "pending";
    PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum["Failed"] = "failed";
    PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum["Unavailable"] = "unavailable";
})(PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum || (PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum = {}));
// PostCertificatesCreateCertificateResponseCertificateStatus
/**
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
**/
var PostCertificatesCreateCertificateResponseCertificateStatus = /** @class */ (function (_super) {
    __extends(PostCertificatesCreateCertificateResponseCertificateStatus, _super);
    function PostCertificatesCreateCertificateResponseCertificateStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", PostCertificatesCreateCertificateResponseCertificateStatusError)
    ], PostCertificatesCreateCertificateResponseCertificateStatus.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=issuance" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseCertificateStatus.prototype, "issuance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=renewal" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseCertificateStatus.prototype, "renewal", void 0);
    return PostCertificatesCreateCertificateResponseCertificateStatus;
}(SpeakeasyBase));
export { PostCertificatesCreateCertificateResponseCertificateStatus };
export var PostCertificatesCreateCertificateResponseCertificateTypeEnum;
(function (PostCertificatesCreateCertificateResponseCertificateTypeEnum) {
    PostCertificatesCreateCertificateResponseCertificateTypeEnum["Uploaded"] = "uploaded";
    PostCertificatesCreateCertificateResponseCertificateTypeEnum["Managed"] = "managed";
})(PostCertificatesCreateCertificateResponseCertificateTypeEnum || (PostCertificatesCreateCertificateResponseCertificateTypeEnum = {}));
var PostCertificatesCreateCertificateResponseCertificateUsedBy = /** @class */ (function (_super) {
    __extends(PostCertificatesCreateCertificateResponseCertificateUsedBy, _super);
    function PostCertificatesCreateCertificateResponseCertificateUsedBy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostCertificatesCreateCertificateResponseCertificateUsedBy.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseCertificateUsedBy.prototype, "type", void 0);
    return PostCertificatesCreateCertificateResponseCertificateUsedBy;
}(SpeakeasyBase));
export { PostCertificatesCreateCertificateResponseCertificateUsedBy };
var PostCertificatesCreateCertificateResponseCertificate = /** @class */ (function (_super) {
    __extends(PostCertificatesCreateCertificateResponseCertificate, _super);
    function PostCertificatesCreateCertificateResponseCertificate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificate" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseCertificate.prototype, "certificate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseCertificate.prototype, "created", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain_names" }),
        __metadata("design:type", Array)
    ], PostCertificatesCreateCertificateResponseCertificate.prototype, "domainNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fingerprint" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseCertificate.prototype, "fingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], PostCertificatesCreateCertificateResponseCertificate.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=labels" }),
        __metadata("design:type", Map)
    ], PostCertificatesCreateCertificateResponseCertificate.prototype, "labels", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseCertificate.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=not_valid_after" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseCertificate.prototype, "notValidAfter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=not_valid_before" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseCertificate.prototype, "notValidBefore", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", PostCertificatesCreateCertificateResponseCertificateStatus)
    ], PostCertificatesCreateCertificateResponseCertificate.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], PostCertificatesCreateCertificateResponseCertificate.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=used_by", elemType: PostCertificatesCreateCertificateResponseCertificateUsedBy }),
        __metadata("design:type", Array)
    ], PostCertificatesCreateCertificateResponseCertificate.prototype, "usedBy", void 0);
    return PostCertificatesCreateCertificateResponseCertificate;
}(SpeakeasyBase));
export { PostCertificatesCreateCertificateResponseCertificate };
var PostCertificatesCreateCertificateResponse = /** @class */ (function (_super) {
    __extends(PostCertificatesCreateCertificateResponse, _super);
    function PostCertificatesCreateCertificateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", PostCertificatesCreateCertificateResponseNullableAction)
    ], PostCertificatesCreateCertificateResponse.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=certificate" }),
        __metadata("design:type", PostCertificatesCreateCertificateResponseCertificate)
    ], PostCertificatesCreateCertificateResponse.prototype, "certificate", void 0);
    return PostCertificatesCreateCertificateResponse;
}(SpeakeasyBase));
export { PostCertificatesCreateCertificateResponse };
var PostCertificatesRequest = /** @class */ (function (_super) {
    __extends(PostCertificatesRequest, _super);
    function PostCertificatesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", PostCertificatesCreateCertificateRequest)
    ], PostCertificatesRequest.prototype, "request", void 0);
    return PostCertificatesRequest;
}(SpeakeasyBase));
export { PostCertificatesRequest };
var PostCertificatesResponse = /** @class */ (function (_super) {
    __extends(PostCertificatesResponse, _super);
    function PostCertificatesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostCertificatesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostCertificatesCreateCertificateResponse)
    ], PostCertificatesResponse.prototype, "createCertificateResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostCertificatesResponse.prototype, "statusCode", void 0);
    return PostCertificatesResponse;
}(SpeakeasyBase));
export { PostCertificatesResponse };
