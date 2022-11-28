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
var DnsPoliciesDeletePathParams = /** @class */ (function (_super) {
    __extends(DnsPoliciesDeletePathParams, _super);
    function DnsPoliciesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=policy" }),
        __metadata("design:type", String)
    ], DnsPoliciesDeletePathParams.prototype, "policy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], DnsPoliciesDeletePathParams.prototype, "project", void 0);
    return DnsPoliciesDeletePathParams;
}(SpeakeasyBase));
export { DnsPoliciesDeletePathParams };
var DnsPoliciesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DnsPoliciesDeleteQueryParams, _super);
    function DnsPoliciesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DnsPoliciesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DnsPoliciesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DnsPoliciesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DnsPoliciesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientOperationId" }),
        __metadata("design:type", String)
    ], DnsPoliciesDeleteQueryParams.prototype, "clientOperationId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DnsPoliciesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DnsPoliciesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DnsPoliciesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DnsPoliciesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DnsPoliciesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DnsPoliciesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DnsPoliciesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DnsPoliciesDeleteQueryParams;
}(SpeakeasyBase));
export { DnsPoliciesDeleteQueryParams };
var DnsPoliciesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(DnsPoliciesDeleteSecurityOption1, _super);
    function DnsPoliciesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsPoliciesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsPoliciesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return DnsPoliciesDeleteSecurityOption1;
}(SpeakeasyBase));
export { DnsPoliciesDeleteSecurityOption1 };
var DnsPoliciesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(DnsPoliciesDeleteSecurityOption2, _super);
    function DnsPoliciesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DnsPoliciesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DnsPoliciesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return DnsPoliciesDeleteSecurityOption2;
}(SpeakeasyBase));
export { DnsPoliciesDeleteSecurityOption2 };
var DnsPoliciesDeleteSecurity = /** @class */ (function (_super) {
    __extends(DnsPoliciesDeleteSecurity, _super);
    function DnsPoliciesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsPoliciesDeleteSecurityOption1)
    ], DnsPoliciesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", DnsPoliciesDeleteSecurityOption2)
    ], DnsPoliciesDeleteSecurity.prototype, "option2", void 0);
    return DnsPoliciesDeleteSecurity;
}(SpeakeasyBase));
export { DnsPoliciesDeleteSecurity };
var DnsPoliciesDeleteRequest = /** @class */ (function (_super) {
    __extends(DnsPoliciesDeleteRequest, _super);
    function DnsPoliciesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsPoliciesDeletePathParams)
    ], DnsPoliciesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsPoliciesDeleteQueryParams)
    ], DnsPoliciesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DnsPoliciesDeleteSecurity)
    ], DnsPoliciesDeleteRequest.prototype, "security", void 0);
    return DnsPoliciesDeleteRequest;
}(SpeakeasyBase));
export { DnsPoliciesDeleteRequest };
var DnsPoliciesDeleteResponse = /** @class */ (function (_super) {
    __extends(DnsPoliciesDeleteResponse, _super);
    function DnsPoliciesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DnsPoliciesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DnsPoliciesDeleteResponse.prototype, "statusCode", void 0);
    return DnsPoliciesDeleteResponse;
}(SpeakeasyBase));
export { DnsPoliciesDeleteResponse };
