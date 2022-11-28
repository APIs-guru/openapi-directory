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
var CloudidentityGroupsMembershipsGetMembershipGraphPathParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsGetMembershipGraphPathParams, _super);
    function CloudidentityGroupsMembershipsGetMembershipGraphPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetMembershipGraphPathParams.prototype, "parent", void 0);
    return CloudidentityGroupsMembershipsGetMembershipGraphPathParams;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsGetMembershipGraphPathParams };
var CloudidentityGroupsMembershipsGetMembershipGraphQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsGetMembershipGraphQueryParams, _super);
    function CloudidentityGroupsMembershipsGetMembershipGraphQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetMembershipGraphQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetMembershipGraphQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetMembershipGraphQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetMembershipGraphQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetMembershipGraphQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetMembershipGraphQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetMembershipGraphQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityGroupsMembershipsGetMembershipGraphQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetMembershipGraphQueryParams.prototype, "query", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetMembershipGraphQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetMembershipGraphQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetMembershipGraphQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityGroupsMembershipsGetMembershipGraphQueryParams;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsGetMembershipGraphQueryParams };
var CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption1, _super);
    function CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption1;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption1 };
var CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption2, _super);
    function CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption2;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption2 };
var CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption3, _super);
    function CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption3.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption3;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption3 };
var CloudidentityGroupsMembershipsGetMembershipGraphSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsGetMembershipGraphSecurity, _super);
    function CloudidentityGroupsMembershipsGetMembershipGraphSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption1)
    ], CloudidentityGroupsMembershipsGetMembershipGraphSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption2)
    ], CloudidentityGroupsMembershipsGetMembershipGraphSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsGetMembershipGraphSecurityOption3)
    ], CloudidentityGroupsMembershipsGetMembershipGraphSecurity.prototype, "option3", void 0);
    return CloudidentityGroupsMembershipsGetMembershipGraphSecurity;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsGetMembershipGraphSecurity };
var CloudidentityGroupsMembershipsGetMembershipGraphRequest = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsGetMembershipGraphRequest, _super);
    function CloudidentityGroupsMembershipsGetMembershipGraphRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsGetMembershipGraphPathParams)
    ], CloudidentityGroupsMembershipsGetMembershipGraphRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsGetMembershipGraphQueryParams)
    ], CloudidentityGroupsMembershipsGetMembershipGraphRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsGetMembershipGraphSecurity)
    ], CloudidentityGroupsMembershipsGetMembershipGraphRequest.prototype, "security", void 0);
    return CloudidentityGroupsMembershipsGetMembershipGraphRequest;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsGetMembershipGraphRequest };
var CloudidentityGroupsMembershipsGetMembershipGraphResponse = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsGetMembershipGraphResponse, _super);
    function CloudidentityGroupsMembershipsGetMembershipGraphResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsGetMembershipGraphResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudidentityGroupsMembershipsGetMembershipGraphResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudidentityGroupsMembershipsGetMembershipGraphResponse.prototype, "statusCode", void 0);
    return CloudidentityGroupsMembershipsGetMembershipGraphResponse;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsGetMembershipGraphResponse };
