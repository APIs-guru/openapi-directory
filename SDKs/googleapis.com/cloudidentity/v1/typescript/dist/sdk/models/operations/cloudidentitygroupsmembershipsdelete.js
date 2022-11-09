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
var CloudidentityGroupsMembershipsDeletePathParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsDeletePathParams, _super);
    function CloudidentityGroupsMembershipsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsDeletePathParams.prototype, "name", void 0);
    return CloudidentityGroupsMembershipsDeletePathParams;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsDeletePathParams };
var CloudidentityGroupsMembershipsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsDeleteQueryParams, _super);
    function CloudidentityGroupsMembershipsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=customer" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsDeleteQueryParams.prototype, "customer", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityGroupsMembershipsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityGroupsMembershipsDeleteQueryParams;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsDeleteQueryParams };
var CloudidentityGroupsMembershipsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsDeleteSecurityOption1, _super);
    function CloudidentityGroupsMembershipsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsDeleteSecurityOption1;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsDeleteSecurityOption1 };
var CloudidentityGroupsMembershipsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsDeleteSecurityOption2, _super);
    function CloudidentityGroupsMembershipsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsDeleteSecurityOption2;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsDeleteSecurityOption2 };
var CloudidentityGroupsMembershipsDeleteSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsDeleteSecurity, _super);
    function CloudidentityGroupsMembershipsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsDeleteSecurityOption1)
    ], CloudidentityGroupsMembershipsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsDeleteSecurityOption2)
    ], CloudidentityGroupsMembershipsDeleteSecurity.prototype, "option2", void 0);
    return CloudidentityGroupsMembershipsDeleteSecurity;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsDeleteSecurity };
var CloudidentityGroupsMembershipsDeleteRequest = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsDeleteRequest, _super);
    function CloudidentityGroupsMembershipsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsDeletePathParams)
    ], CloudidentityGroupsMembershipsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsDeleteQueryParams)
    ], CloudidentityGroupsMembershipsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsDeleteSecurity)
    ], CloudidentityGroupsMembershipsDeleteRequest.prototype, "security", void 0);
    return CloudidentityGroupsMembershipsDeleteRequest;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsDeleteRequest };
var CloudidentityGroupsMembershipsDeleteResponse = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsDeleteResponse, _super);
    function CloudidentityGroupsMembershipsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Operation)
    ], CloudidentityGroupsMembershipsDeleteResponse.prototype, "operation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudidentityGroupsMembershipsDeleteResponse.prototype, "statusCode", void 0);
    return CloudidentityGroupsMembershipsDeleteResponse;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsDeleteResponse };
