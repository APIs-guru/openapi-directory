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
var CloudidentityGroupsMembershipsGetPathParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsGetPathParams, _super);
    function CloudidentityGroupsMembershipsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetPathParams.prototype, "name", void 0);
    return CloudidentityGroupsMembershipsGetPathParams;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsGetPathParams };
var CloudidentityGroupsMembershipsGetQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsGetQueryParams, _super);
    function CloudidentityGroupsMembershipsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityGroupsMembershipsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=readMask" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetQueryParams.prototype, "readMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityGroupsMembershipsGetQueryParams;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsGetQueryParams };
var CloudidentityGroupsMembershipsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsGetSecurityOption1, _super);
    function CloudidentityGroupsMembershipsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsGetSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsGetSecurityOption1;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsGetSecurityOption1 };
var CloudidentityGroupsMembershipsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsGetSecurityOption2, _super);
    function CloudidentityGroupsMembershipsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsGetSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsGetSecurityOption2;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsGetSecurityOption2 };
var CloudidentityGroupsMembershipsGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsGetSecurityOption3, _super);
    function CloudidentityGroupsMembershipsGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsGetSecurityOption3.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsGetSecurityOption3;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsGetSecurityOption3 };
var CloudidentityGroupsMembershipsGetSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsGetSecurity, _super);
    function CloudidentityGroupsMembershipsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsGetSecurityOption1)
    ], CloudidentityGroupsMembershipsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsGetSecurityOption2)
    ], CloudidentityGroupsMembershipsGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsGetSecurityOption3)
    ], CloudidentityGroupsMembershipsGetSecurity.prototype, "option3", void 0);
    return CloudidentityGroupsMembershipsGetSecurity;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsGetSecurity };
var CloudidentityGroupsMembershipsGetRequest = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsGetRequest, _super);
    function CloudidentityGroupsMembershipsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsGetPathParams)
    ], CloudidentityGroupsMembershipsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsGetQueryParams)
    ], CloudidentityGroupsMembershipsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsGetSecurity)
    ], CloudidentityGroupsMembershipsGetRequest.prototype, "security", void 0);
    return CloudidentityGroupsMembershipsGetRequest;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsGetRequest };
var CloudidentityGroupsMembershipsGetResponse = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsGetResponse, _super);
    function CloudidentityGroupsMembershipsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Membership)
    ], CloudidentityGroupsMembershipsGetResponse.prototype, "membership", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudidentityGroupsMembershipsGetResponse.prototype, "statusCode", void 0);
    return CloudidentityGroupsMembershipsGetResponse;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsGetResponse };
