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
var IamRolesQueryGrantableRolesQueryParams = /** @class */ (function (_super) {
    __extends(IamRolesQueryGrantableRolesQueryParams, _super);
    function IamRolesQueryGrantableRolesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], IamRolesQueryGrantableRolesQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], IamRolesQueryGrantableRolesQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], IamRolesQueryGrantableRolesQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], IamRolesQueryGrantableRolesQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], IamRolesQueryGrantableRolesQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], IamRolesQueryGrantableRolesQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], IamRolesQueryGrantableRolesQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], IamRolesQueryGrantableRolesQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], IamRolesQueryGrantableRolesQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], IamRolesQueryGrantableRolesQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], IamRolesQueryGrantableRolesQueryParams.prototype, "uploadProtocol", void 0);
    return IamRolesQueryGrantableRolesQueryParams;
}(SpeakeasyBase));
export { IamRolesQueryGrantableRolesQueryParams };
var IamRolesQueryGrantableRolesSecurity = /** @class */ (function (_super) {
    __extends(IamRolesQueryGrantableRolesSecurity, _super);
    function IamRolesQueryGrantableRolesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], IamRolesQueryGrantableRolesSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], IamRolesQueryGrantableRolesSecurity.prototype, "oauth2c", void 0);
    return IamRolesQueryGrantableRolesSecurity;
}(SpeakeasyBase));
export { IamRolesQueryGrantableRolesSecurity };
var IamRolesQueryGrantableRolesRequest = /** @class */ (function (_super) {
    __extends(IamRolesQueryGrantableRolesRequest, _super);
    function IamRolesQueryGrantableRolesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", IamRolesQueryGrantableRolesQueryParams)
    ], IamRolesQueryGrantableRolesRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.QueryGrantableRolesRequest)
    ], IamRolesQueryGrantableRolesRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", IamRolesQueryGrantableRolesSecurity)
    ], IamRolesQueryGrantableRolesRequest.prototype, "security", void 0);
    return IamRolesQueryGrantableRolesRequest;
}(SpeakeasyBase));
export { IamRolesQueryGrantableRolesRequest };
var IamRolesQueryGrantableRolesResponse = /** @class */ (function (_super) {
    __extends(IamRolesQueryGrantableRolesResponse, _super);
    function IamRolesQueryGrantableRolesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], IamRolesQueryGrantableRolesResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.QueryGrantableRolesResponse)
    ], IamRolesQueryGrantableRolesResponse.prototype, "queryGrantableRolesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], IamRolesQueryGrantableRolesResponse.prototype, "statusCode", void 0);
    return IamRolesQueryGrantableRolesResponse;
}(SpeakeasyBase));
export { IamRolesQueryGrantableRolesResponse };
