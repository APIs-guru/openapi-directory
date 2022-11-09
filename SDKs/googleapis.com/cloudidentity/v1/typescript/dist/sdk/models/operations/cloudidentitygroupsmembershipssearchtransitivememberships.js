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
var CloudidentityGroupsMembershipsSearchTransitiveMembershipsPathParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsSearchTransitiveMembershipsPathParams, _super);
    function CloudidentityGroupsMembershipsSearchTransitiveMembershipsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsPathParams.prototype, "parent", void 0);
    return CloudidentityGroupsMembershipsSearchTransitiveMembershipsPathParams;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsSearchTransitiveMembershipsPathParams };
var CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams, _super);
    function CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams };
var CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1, _super);
    function CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1 };
var CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption2, _super);
    function CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption2;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption2 };
var CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption3, _super);
    function CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption3.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption3;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption3 };
var CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity, _super);
    function CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption1)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption2)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurityOption3)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity.prototype, "option3", void 0);
    return CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity };
var CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest, _super);
    function CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsSearchTransitiveMembershipsPathParams)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsSearchTransitiveMembershipsQueryParams)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsSearchTransitiveMembershipsSecurity)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest.prototype, "security", void 0);
    return CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest };
var CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse, _super);
    function CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SearchTransitiveMembershipsResponse)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse.prototype, "searchTransitiveMembershipsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse.prototype, "statusCode", void 0);
    return CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse };
