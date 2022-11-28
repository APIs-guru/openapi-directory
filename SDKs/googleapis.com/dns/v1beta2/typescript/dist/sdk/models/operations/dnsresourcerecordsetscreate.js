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
var DnsResourceRecordSetsCreatePathParams = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsCreatePathParams, _super);
    function DnsResourceRecordSetsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=managedZone" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsCreatePathParams.prototype, "managedZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsCreatePathParams.prototype, "project", void 0);
    return DnsResourceRecordSetsCreatePathParams;
}(SpeakeasyBase));
export { DnsResourceRecordSetsCreatePathParams };
var DnsResourceRecordSetsCreateQueryParams = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsCreateQueryParams, _super);
    function DnsResourceRecordSetsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsCreateQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsResourceRecordSetsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return DnsResourceRecordSetsCreateQueryParams;
}(SpeakeasyBase));
export { DnsResourceRecordSetsCreateQueryParams };
var DnsResourceRecordSetsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsCreateSecurityOption1, _super);
    function DnsResourceRecordSetsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResourceRecordSetsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResourceRecordSetsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return DnsResourceRecordSetsCreateSecurityOption1;
}(SpeakeasyBase));
export { DnsResourceRecordSetsCreateSecurityOption1 };
var DnsResourceRecordSetsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsCreateSecurityOption2, _super);
    function DnsResourceRecordSetsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResourceRecordSetsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResourceRecordSetsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return DnsResourceRecordSetsCreateSecurityOption2;
}(SpeakeasyBase));
export { DnsResourceRecordSetsCreateSecurityOption2 };
var DnsResourceRecordSetsCreateSecurity = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsCreateSecurity, _super);
    function DnsResourceRecordSetsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResourceRecordSetsCreateSecurityOption1)
    ], DnsResourceRecordSetsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResourceRecordSetsCreateSecurityOption2)
    ], DnsResourceRecordSetsCreateSecurity.prototype, "option2", void 0);
    return DnsResourceRecordSetsCreateSecurity;
}(SpeakeasyBase));
export { DnsResourceRecordSetsCreateSecurity };
var DnsResourceRecordSetsCreateRequest = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsCreateRequest, _super);
    function DnsResourceRecordSetsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResourceRecordSetsCreatePathParams)
    ], DnsResourceRecordSetsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResourceRecordSetsCreateQueryParams)
    ], DnsResourceRecordSetsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResourceRecordSet)
    ], DnsResourceRecordSetsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResourceRecordSetsCreateSecurity)
    ], DnsResourceRecordSetsCreateRequest.prototype, "security", void 0);
    return DnsResourceRecordSetsCreateRequest;
}(SpeakeasyBase));
export { DnsResourceRecordSetsCreateRequest };
var DnsResourceRecordSetsCreateResponse = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsCreateResponse, _super);
    function DnsResourceRecordSetsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceRecordSet)
    ], DnsResourceRecordSetsCreateResponse.prototype, "resourceRecordSet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsResourceRecordSetsCreateResponse.prototype, "statusCode", void 0);
    return DnsResourceRecordSetsCreateResponse;
}(SpeakeasyBase));
export { DnsResourceRecordSetsCreateResponse };
