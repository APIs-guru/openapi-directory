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
var CloudidentityGroupsMembershipsCreatePathParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsCreatePathParams, _super);
    function CloudidentityGroupsMembershipsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsCreatePathParams.prototype, "parent", void 0);
    return CloudidentityGroupsMembershipsCreatePathParams;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsCreatePathParams };
var CloudidentityGroupsMembershipsCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsCreateQueryParams, _super);
    function CloudidentityGroupsMembershipsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityGroupsMembershipsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityGroupsMembershipsCreateQueryParams;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsCreateQueryParams };
var CloudidentityGroupsMembershipsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsCreateSecurityOption1, _super);
    function CloudidentityGroupsMembershipsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsCreateSecurityOption1;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsCreateSecurityOption1 };
var CloudidentityGroupsMembershipsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsCreateSecurityOption2, _super);
    function CloudidentityGroupsMembershipsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsCreateSecurityOption2;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsCreateSecurityOption2 };
var CloudidentityGroupsMembershipsCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsCreateSecurity, _super);
    function CloudidentityGroupsMembershipsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsCreateSecurityOption1)
    ], CloudidentityGroupsMembershipsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsCreateSecurityOption2)
    ], CloudidentityGroupsMembershipsCreateSecurity.prototype, "option2", void 0);
    return CloudidentityGroupsMembershipsCreateSecurity;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsCreateSecurity };
var CloudidentityGroupsMembershipsCreateRequest = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsCreateRequest, _super);
    function CloudidentityGroupsMembershipsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsCreatePathParams)
    ], CloudidentityGroupsMembershipsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsCreateQueryParams)
    ], CloudidentityGroupsMembershipsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MembershipInput)
    ], CloudidentityGroupsMembershipsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsCreateSecurity)
    ], CloudidentityGroupsMembershipsCreateRequest.prototype, "security", void 0);
    return CloudidentityGroupsMembershipsCreateRequest;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsCreateRequest };
var CloudidentityGroupsMembershipsCreateResponse = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsCreateResponse, _super);
    function CloudidentityGroupsMembershipsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], CloudidentityGroupsMembershipsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudidentityGroupsMembershipsCreateResponse.prototype, "statusCode", void 0);
    return CloudidentityGroupsMembershipsCreateResponse;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsCreateResponse };
