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
var ClassroomInvitationsGetPathParams = /** @class */ (function (_super) {
    __extends(ClassroomInvitationsGetPathParams, _super);
    function ClassroomInvitationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], ClassroomInvitationsGetPathParams.prototype, "id", void 0);
    return ClassroomInvitationsGetPathParams;
}(SpeakeasyBase));
export { ClassroomInvitationsGetPathParams };
var ClassroomInvitationsGetQueryParams = /** @class */ (function (_super) {
    __extends(ClassroomInvitationsGetQueryParams, _super);
    function ClassroomInvitationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClassroomInvitationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClassroomInvitationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClassroomInvitationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClassroomInvitationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClassroomInvitationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClassroomInvitationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClassroomInvitationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClassroomInvitationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClassroomInvitationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClassroomInvitationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClassroomInvitationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ClassroomInvitationsGetQueryParams;
}(SpeakeasyBase));
export { ClassroomInvitationsGetQueryParams };
var ClassroomInvitationsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ClassroomInvitationsGetSecurityOption1, _super);
    function ClassroomInvitationsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomInvitationsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomInvitationsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ClassroomInvitationsGetSecurityOption1;
}(SpeakeasyBase));
export { ClassroomInvitationsGetSecurityOption1 };
var ClassroomInvitationsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ClassroomInvitationsGetSecurityOption2, _super);
    function ClassroomInvitationsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClassroomInvitationsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClassroomInvitationsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ClassroomInvitationsGetSecurityOption2;
}(SpeakeasyBase));
export { ClassroomInvitationsGetSecurityOption2 };
var ClassroomInvitationsGetSecurity = /** @class */ (function (_super) {
    __extends(ClassroomInvitationsGetSecurity, _super);
    function ClassroomInvitationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomInvitationsGetSecurityOption1)
    ], ClassroomInvitationsGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", ClassroomInvitationsGetSecurityOption2)
    ], ClassroomInvitationsGetSecurity.prototype, "option2", void 0);
    return ClassroomInvitationsGetSecurity;
}(SpeakeasyBase));
export { ClassroomInvitationsGetSecurity };
var ClassroomInvitationsGetRequest = /** @class */ (function (_super) {
    __extends(ClassroomInvitationsGetRequest, _super);
    function ClassroomInvitationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomInvitationsGetPathParams)
    ], ClassroomInvitationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomInvitationsGetQueryParams)
    ], ClassroomInvitationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ClassroomInvitationsGetSecurity)
    ], ClassroomInvitationsGetRequest.prototype, "security", void 0);
    return ClassroomInvitationsGetRequest;
}(SpeakeasyBase));
export { ClassroomInvitationsGetRequest };
var ClassroomInvitationsGetResponse = /** @class */ (function (_super) {
    __extends(ClassroomInvitationsGetResponse, _super);
    function ClassroomInvitationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ClassroomInvitationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Invitation)
    ], ClassroomInvitationsGetResponse.prototype, "invitation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ClassroomInvitationsGetResponse.prototype, "statusCode", void 0);
    return ClassroomInvitationsGetResponse;
}(SpeakeasyBase));
export { ClassroomInvitationsGetResponse };
