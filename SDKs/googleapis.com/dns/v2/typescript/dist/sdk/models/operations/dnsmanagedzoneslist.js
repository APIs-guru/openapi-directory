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
var DnsManagedZonesListPathParams = /** @class */ (function (_super) {
    __extends(DnsManagedZonesListPathParams, _super);
    function DnsManagedZonesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DnsManagedZonesListPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsManagedZonesListPathParams.prototype, "project", void 0);
    return DnsManagedZonesListPathParams;
}(SpeakeasyBase));
export { DnsManagedZonesListPathParams };
var DnsManagedZonesListQueryParams = /** @class */ (function (_super) {
    __extends(DnsManagedZonesListQueryParams, _super);
    function DnsManagedZonesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsManagedZonesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsManagedZonesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsManagedZonesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsManagedZonesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dnsName" }),
        __metadata("design:type", String)
    ], DnsManagedZonesListQueryParams.prototype, "dnsName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsManagedZonesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsManagedZonesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], DnsManagedZonesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsManagedZonesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], DnsManagedZonesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsManagedZonesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsManagedZonesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsManagedZonesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsManagedZonesListQueryParams.prototype, "uploadProtocol", void 0);
    return DnsManagedZonesListQueryParams;
}(SpeakeasyBase));
export { DnsManagedZonesListQueryParams };
var DnsManagedZonesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsManagedZonesListSecurityOption1, _super);
    function DnsManagedZonesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZonesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZonesListSecurityOption1.prototype, "oauth2c", void 0);
    return DnsManagedZonesListSecurityOption1;
}(SpeakeasyBase));
export { DnsManagedZonesListSecurityOption1 };
var DnsManagedZonesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsManagedZonesListSecurityOption2, _super);
    function DnsManagedZonesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZonesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZonesListSecurityOption2.prototype, "oauth2c", void 0);
    return DnsManagedZonesListSecurityOption2;
}(SpeakeasyBase));
export { DnsManagedZonesListSecurityOption2 };
var DnsManagedZonesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(DnsManagedZonesListSecurityOption3, _super);
    function DnsManagedZonesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZonesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZonesListSecurityOption3.prototype, "oauth2c", void 0);
    return DnsManagedZonesListSecurityOption3;
}(SpeakeasyBase));
export { DnsManagedZonesListSecurityOption3 };
var DnsManagedZonesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(DnsManagedZonesListSecurityOption4, _super);
    function DnsManagedZonesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZonesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZonesListSecurityOption4.prototype, "oauth2c", void 0);
    return DnsManagedZonesListSecurityOption4;
}(SpeakeasyBase));
export { DnsManagedZonesListSecurityOption4 };
var DnsManagedZonesListSecurity = /** @class */ (function (_super) {
    __extends(DnsManagedZonesListSecurity, _super);
    function DnsManagedZonesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZonesListSecurityOption1)
    ], DnsManagedZonesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZonesListSecurityOption2)
    ], DnsManagedZonesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZonesListSecurityOption3)
    ], DnsManagedZonesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZonesListSecurityOption4)
    ], DnsManagedZonesListSecurity.prototype, "option4", void 0);
    return DnsManagedZonesListSecurity;
}(SpeakeasyBase));
export { DnsManagedZonesListSecurity };
var DnsManagedZonesListRequest = /** @class */ (function (_super) {
    __extends(DnsManagedZonesListRequest, _super);
    function DnsManagedZonesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZonesListPathParams)
    ], DnsManagedZonesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZonesListQueryParams)
    ], DnsManagedZonesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZonesListSecurity)
    ], DnsManagedZonesListRequest.prototype, "security", void 0);
    return DnsManagedZonesListRequest;
}(SpeakeasyBase));
export { DnsManagedZonesListRequest };
var DnsManagedZonesListResponse = /** @class */ (function (_super) {
    __extends(DnsManagedZonesListResponse, _super);
    function DnsManagedZonesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsManagedZonesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagedZonesListResponse)
    ], DnsManagedZonesListResponse.prototype, "managedZonesListResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsManagedZonesListResponse.prototype, "statusCode", void 0);
    return DnsManagedZonesListResponse;
}(SpeakeasyBase));
export { DnsManagedZonesListResponse };
