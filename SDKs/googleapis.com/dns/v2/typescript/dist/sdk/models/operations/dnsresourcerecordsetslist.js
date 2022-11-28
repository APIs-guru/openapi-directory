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
var DnsResourceRecordSetsListPathParams = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsListPathParams, _super);
    function DnsResourceRecordSetsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsListPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=managedZone" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsListPathParams.prototype, "managedZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsListPathParams.prototype, "project", void 0);
    return DnsResourceRecordSetsListPathParams;
}(SpeakeasyBase));
export { DnsResourceRecordSetsListPathParams };
var DnsResourceRecordSetsListQueryParams = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsListQueryParams, _super);
    function DnsResourceRecordSetsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DnsResourceRecordSetsListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsListQueryParams.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsResourceRecordSetsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsListQueryParams.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsListQueryParams.prototype, "uploadProtocol", void 0);
    return DnsResourceRecordSetsListQueryParams;
}(SpeakeasyBase));
export { DnsResourceRecordSetsListQueryParams };
var DnsResourceRecordSetsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsListSecurityOption1, _super);
    function DnsResourceRecordSetsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResourceRecordSetsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResourceRecordSetsListSecurityOption1.prototype, "oauth2c", void 0);
    return DnsResourceRecordSetsListSecurityOption1;
}(SpeakeasyBase));
export { DnsResourceRecordSetsListSecurityOption1 };
var DnsResourceRecordSetsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsListSecurityOption2, _super);
    function DnsResourceRecordSetsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResourceRecordSetsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResourceRecordSetsListSecurityOption2.prototype, "oauth2c", void 0);
    return DnsResourceRecordSetsListSecurityOption2;
}(SpeakeasyBase));
export { DnsResourceRecordSetsListSecurityOption2 };
var DnsResourceRecordSetsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsListSecurityOption3, _super);
    function DnsResourceRecordSetsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResourceRecordSetsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResourceRecordSetsListSecurityOption3.prototype, "oauth2c", void 0);
    return DnsResourceRecordSetsListSecurityOption3;
}(SpeakeasyBase));
export { DnsResourceRecordSetsListSecurityOption3 };
var DnsResourceRecordSetsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsListSecurityOption4, _super);
    function DnsResourceRecordSetsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsResourceRecordSetsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsResourceRecordSetsListSecurityOption4.prototype, "oauth2c", void 0);
    return DnsResourceRecordSetsListSecurityOption4;
}(SpeakeasyBase));
export { DnsResourceRecordSetsListSecurityOption4 };
var DnsResourceRecordSetsListSecurity = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsListSecurity, _super);
    function DnsResourceRecordSetsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResourceRecordSetsListSecurityOption1)
    ], DnsResourceRecordSetsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResourceRecordSetsListSecurityOption2)
    ], DnsResourceRecordSetsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResourceRecordSetsListSecurityOption3)
    ], DnsResourceRecordSetsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsResourceRecordSetsListSecurityOption4)
    ], DnsResourceRecordSetsListSecurity.prototype, "option4", void 0);
    return DnsResourceRecordSetsListSecurity;
}(SpeakeasyBase));
export { DnsResourceRecordSetsListSecurity };
var DnsResourceRecordSetsListRequest = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsListRequest, _super);
    function DnsResourceRecordSetsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResourceRecordSetsListPathParams)
    ], DnsResourceRecordSetsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResourceRecordSetsListQueryParams)
    ], DnsResourceRecordSetsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsResourceRecordSetsListSecurity)
    ], DnsResourceRecordSetsListRequest.prototype, "security", void 0);
    return DnsResourceRecordSetsListRequest;
}(SpeakeasyBase));
export { DnsResourceRecordSetsListRequest };
var DnsResourceRecordSetsListResponse = /** @class */ (function (_super) {
    __extends(DnsResourceRecordSetsListResponse, _super);
    function DnsResourceRecordSetsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsResourceRecordSetsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ResourceRecordSetsListResponse)
    ], DnsResourceRecordSetsListResponse.prototype, "resourceRecordSetsListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsResourceRecordSetsListResponse.prototype, "statusCode", void 0);
    return DnsResourceRecordSetsListResponse;
}(SpeakeasyBase));
export { DnsResourceRecordSetsListResponse };
