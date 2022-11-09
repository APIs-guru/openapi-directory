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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var CloudidentityGroupsMembershipsLookupPathParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsLookupPathParams, _super);
    function CloudidentityGroupsMembershipsLookupPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsLookupPathParams.prototype, "parent", void 0);
    return CloudidentityGroupsMembershipsLookupPathParams;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsLookupPathParams };
var CloudidentityGroupsMembershipsLookupQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsLookupQueryParams, _super);
    function CloudidentityGroupsMembershipsLookupQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsLookupQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsLookupQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsLookupQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsLookupQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsLookupQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsLookupQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=memberKey.id" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsLookupQueryParams.prototype, "memberKeyId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=memberKey.namespace" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsLookupQueryParams.prototype, "memberKeyNamespace", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsLookupQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityGroupsMembershipsLookupQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsLookupQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsLookupQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsLookupQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityGroupsMembershipsLookupQueryParams;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsLookupQueryParams };
var CloudidentityGroupsMembershipsLookupSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsLookupSecurityOption1, _super);
    function CloudidentityGroupsMembershipsLookupSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsLookupSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsLookupSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsLookupSecurityOption1;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsLookupSecurityOption1 };
var CloudidentityGroupsMembershipsLookupSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsLookupSecurityOption2, _super);
    function CloudidentityGroupsMembershipsLookupSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsLookupSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsLookupSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsLookupSecurityOption2;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsLookupSecurityOption2 };
var CloudidentityGroupsMembershipsLookupSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsLookupSecurityOption3, _super);
    function CloudidentityGroupsMembershipsLookupSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsLookupSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsLookupSecurityOption3.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsLookupSecurityOption3;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsLookupSecurityOption3 };
var CloudidentityGroupsMembershipsLookupSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsLookupSecurity, _super);
    function CloudidentityGroupsMembershipsLookupSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsLookupSecurityOption1)
    ], CloudidentityGroupsMembershipsLookupSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsLookupSecurityOption2)
    ], CloudidentityGroupsMembershipsLookupSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsLookupSecurityOption3)
    ], CloudidentityGroupsMembershipsLookupSecurity.prototype, "option3", void 0);
    return CloudidentityGroupsMembershipsLookupSecurity;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsLookupSecurity };
var CloudidentityGroupsMembershipsLookupRequest = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsLookupRequest, _super);
    function CloudidentityGroupsMembershipsLookupRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsLookupPathParams)
    ], CloudidentityGroupsMembershipsLookupRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsLookupQueryParams)
    ], CloudidentityGroupsMembershipsLookupRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsLookupSecurity)
    ], CloudidentityGroupsMembershipsLookupRequest.prototype, "security", void 0);
    return CloudidentityGroupsMembershipsLookupRequest;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsLookupRequest };
var CloudidentityGroupsMembershipsLookupResponse = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsLookupResponse, _super);
    function CloudidentityGroupsMembershipsLookupResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsLookupResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.LookupMembershipNameResponse)
    ], CloudidentityGroupsMembershipsLookupResponse.prototype, "lookupMembershipNameResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudidentityGroupsMembershipsLookupResponse.prototype, "statusCode", void 0);
    return CloudidentityGroupsMembershipsLookupResponse;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsLookupResponse };
