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
var DnsResourceRecordSetsDeletePathParams = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsDeletePathParams, _super);
    function DnsResourceRecordSetsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsDeletePathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=managedZone" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsDeletePathParams.prototype, "managedZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsDeletePathParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsDeletePathParams.prototype, "project", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsDeletePathParams.prototype, "type", void 0);
    return DnsResourceRecordSetsDeletePathParams;
}(SpeakeasyBase));
export { DnsResourceRecordSetsDeletePathParams };
var DnsResourceRecordSetsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsDeleteQueryParams, _super);
    function DnsResourceRecordSetsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsDeleteQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsResourceRecordSetsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DnsResourceRecordSetsDeleteQueryParams;
}(SpeakeasyBase));
export { DnsResourceRecordSetsDeleteQueryParams };
var DnsResourceRecordSetsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsDeleteSecurityOption1, _super);
    function DnsResourceRecordSetsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResourceRecordSetsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResourceRecordSetsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DnsResourceRecordSetsDeleteSecurityOption1;
}(SpeakeasyBase));
export { DnsResourceRecordSetsDeleteSecurityOption1 };
var DnsResourceRecordSetsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsDeleteSecurityOption2, _super);
    function DnsResourceRecordSetsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResourceRecordSetsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResourceRecordSetsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DnsResourceRecordSetsDeleteSecurityOption2;
}(SpeakeasyBase));
export { DnsResourceRecordSetsDeleteSecurityOption2 };
var DnsResourceRecordSetsDeleteSecurity = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsDeleteSecurity, _super);
    function DnsResourceRecordSetsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResourceRecordSetsDeleteSecurityOption1)
    ], DnsResourceRecordSetsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResourceRecordSetsDeleteSecurityOption2)
    ], DnsResourceRecordSetsDeleteSecurity.prototype, "option2", void 0);
    return DnsResourceRecordSetsDeleteSecurity;
}(SpeakeasyBase));
export { DnsResourceRecordSetsDeleteSecurity };
var DnsResourceRecordSetsDeleteRequest = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsDeleteRequest, _super);
    function DnsResourceRecordSetsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResourceRecordSetsDeletePathParams)
    ], DnsResourceRecordSetsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResourceRecordSetsDeleteQueryParams)
    ], DnsResourceRecordSetsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResourceRecordSetsDeleteSecurity)
    ], DnsResourceRecordSetsDeleteRequest.prototype, "security", void 0);
    return DnsResourceRecordSetsDeleteRequest;
}(SpeakeasyBase));
export { DnsResourceRecordSetsDeleteRequest };
var DnsResourceRecordSetsDeleteResponse = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsDeleteResponse, _super);
    function DnsResourceRecordSetsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsResourceRecordSetsDeleteResponse.prototype, "statusCode", void 0);
    return DnsResourceRecordSetsDeleteResponse;
}(SpeakeasyBase));
export { DnsResourceRecordSetsDeleteResponse };
