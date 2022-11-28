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
var DnsResourceRecordSetsPatchPathParams = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsPatchPathParams, _super);
    function DnsResourceRecordSetsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsPatchPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=managedZone" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsPatchPathParams.prototype, "managedZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsPatchPathParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsPatchPathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsPatchPathParams.prototype, "type", void 0);
    return DnsResourceRecordSetsPatchPathParams;
}(SpeakeasyBase));
export { DnsResourceRecordSetsPatchPathParams };
var DnsResourceRecordSetsPatchQueryParams = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsPatchQueryParams, _super);
    function DnsResourceRecordSetsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsPatchQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsResourceRecordSetsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return DnsResourceRecordSetsPatchQueryParams;
}(SpeakeasyBase));
export { DnsResourceRecordSetsPatchQueryParams };
var DnsResourceRecordSetsPatchSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsPatchSecurityOption1, _super);
    function DnsResourceRecordSetsPatchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResourceRecordSetsPatchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResourceRecordSetsPatchSecurityOption1.prototype, "oauth2c", void 0);
    return DnsResourceRecordSetsPatchSecurityOption1;
}(SpeakeasyBase));
export { DnsResourceRecordSetsPatchSecurityOption1 };
var DnsResourceRecordSetsPatchSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsPatchSecurityOption2, _super);
    function DnsResourceRecordSetsPatchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResourceRecordSetsPatchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResourceRecordSetsPatchSecurityOption2.prototype, "oauth2c", void 0);
    return DnsResourceRecordSetsPatchSecurityOption2;
}(SpeakeasyBase));
export { DnsResourceRecordSetsPatchSecurityOption2 };
var DnsResourceRecordSetsPatchSecurity = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsPatchSecurity, _super);
    function DnsResourceRecordSetsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResourceRecordSetsPatchSecurityOption1)
    ], DnsResourceRecordSetsPatchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResourceRecordSetsPatchSecurityOption2)
    ], DnsResourceRecordSetsPatchSecurity.prototype, "option2", void 0);
    return DnsResourceRecordSetsPatchSecurity;
}(SpeakeasyBase));
export { DnsResourceRecordSetsPatchSecurity };
var DnsResourceRecordSetsPatchRequest = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsPatchRequest, _super);
    function DnsResourceRecordSetsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResourceRecordSetsPatchPathParams)
    ], DnsResourceRecordSetsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResourceRecordSetsPatchQueryParams)
    ], DnsResourceRecordSetsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ResourceRecordSet)
    ], DnsResourceRecordSetsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResourceRecordSetsPatchSecurity)
    ], DnsResourceRecordSetsPatchRequest.prototype, "security", void 0);
    return DnsResourceRecordSetsPatchRequest;
}(SpeakeasyBase));
export { DnsResourceRecordSetsPatchRequest };
var DnsResourceRecordSetsPatchResponse = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsPatchResponse, _super);
    function DnsResourceRecordSetsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceRecordSet)
    ], DnsResourceRecordSetsPatchResponse.prototype, "resourceRecordSet", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsResourceRecordSetsPatchResponse.prototype, "statusCode", void 0);
    return DnsResourceRecordSetsPatchResponse;
}(SpeakeasyBase));
export { DnsResourceRecordSetsPatchResponse };
