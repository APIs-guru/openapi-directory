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
var DnsManagedZoneOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsGetPathParams, _super);
    function DnsManagedZoneOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=location" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsGetPathParams.prototype, "location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=managedZone" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsGetPathParams.prototype, "managedZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=operation" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsGetPathParams.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsGetPathParams.prototype, "project", void 0);
    return DnsManagedZoneOperationsGetPathParams;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsGetPathParams };
var DnsManagedZoneOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsGetQueryParams, _super);
    function DnsManagedZoneOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsGetQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsManagedZoneOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return DnsManagedZoneOperationsGetQueryParams;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsGetQueryParams };
var DnsManagedZoneOperationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsGetSecurityOption1, _super);
    function DnsManagedZoneOperationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZoneOperationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZoneOperationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return DnsManagedZoneOperationsGetSecurityOption1;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsGetSecurityOption1 };
var DnsManagedZoneOperationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsGetSecurityOption2, _super);
    function DnsManagedZoneOperationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZoneOperationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZoneOperationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return DnsManagedZoneOperationsGetSecurityOption2;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsGetSecurityOption2 };
var DnsManagedZoneOperationsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsGetSecurityOption3, _super);
    function DnsManagedZoneOperationsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZoneOperationsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZoneOperationsGetSecurityOption3.prototype, "oauth2c", void 0);
    return DnsManagedZoneOperationsGetSecurityOption3;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsGetSecurityOption3 };
var DnsManagedZoneOperationsGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsGetSecurityOption4, _super);
    function DnsManagedZoneOperationsGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsManagedZoneOperationsGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsManagedZoneOperationsGetSecurityOption4.prototype, "oauth2c", void 0);
    return DnsManagedZoneOperationsGetSecurityOption4;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsGetSecurityOption4 };
var DnsManagedZoneOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsGetSecurity, _super);
    function DnsManagedZoneOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZoneOperationsGetSecurityOption1)
    ], DnsManagedZoneOperationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZoneOperationsGetSecurityOption2)
    ], DnsManagedZoneOperationsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZoneOperationsGetSecurityOption3)
    ], DnsManagedZoneOperationsGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsManagedZoneOperationsGetSecurityOption4)
    ], DnsManagedZoneOperationsGetSecurity.prototype, "option4", void 0);
    return DnsManagedZoneOperationsGetSecurity;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsGetSecurity };
var DnsManagedZoneOperationsGetRequest = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsGetRequest, _super);
    function DnsManagedZoneOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZoneOperationsGetPathParams)
    ], DnsManagedZoneOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZoneOperationsGetQueryParams)
    ], DnsManagedZoneOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsManagedZoneOperationsGetSecurity)
    ], DnsManagedZoneOperationsGetRequest.prototype, "security", void 0);
    return DnsManagedZoneOperationsGetRequest;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsGetRequest };
var DnsManagedZoneOperationsGetResponse = /** @class */ (function (_super) {
    __extends(DnsManagedZoneOperationsGetResponse, _super);
    function DnsManagedZoneOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsManagedZoneOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], DnsManagedZoneOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsManagedZoneOperationsGetResponse.prototype, "statusCode", void 0);
    return DnsManagedZoneOperationsGetResponse;
}(SpeakeasyBase));
export { DnsManagedZoneOperationsGetResponse };
