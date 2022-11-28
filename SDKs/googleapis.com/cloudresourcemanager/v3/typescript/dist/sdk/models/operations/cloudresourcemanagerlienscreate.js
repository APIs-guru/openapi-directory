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
var CloudresourcemanagerLiensCreateQueryParams = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerLiensCreateQueryParams, _super);
    function CloudresourcemanagerLiensCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudresourcemanagerLiensCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensCreateQueryParams.prototype, "uploadProtocol", void 0);
    return CloudresourcemanagerLiensCreateQueryParams;
}(SpeakeasyBase));
export { CloudresourcemanagerLiensCreateQueryParams };
var CloudresourcemanagerLiensCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerLiensCreateSecurityOption1, _super);
    function CloudresourcemanagerLiensCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerLiensCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerLiensCreateSecurityOption1.prototype, "oauth2c", void 0);
    return CloudresourcemanagerLiensCreateSecurityOption1;
}(SpeakeasyBase));
export { CloudresourcemanagerLiensCreateSecurityOption1 };
var CloudresourcemanagerLiensCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerLiensCreateSecurityOption2, _super);
    function CloudresourcemanagerLiensCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudresourcemanagerLiensCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudresourcemanagerLiensCreateSecurityOption2.prototype, "oauth2c", void 0);
    return CloudresourcemanagerLiensCreateSecurityOption2;
}(SpeakeasyBase));
export { CloudresourcemanagerLiensCreateSecurityOption2 };
var CloudresourcemanagerLiensCreateSecurity = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerLiensCreateSecurity, _super);
    function CloudresourcemanagerLiensCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerLiensCreateSecurityOption1)
    ], CloudresourcemanagerLiensCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudresourcemanagerLiensCreateSecurityOption2)
    ], CloudresourcemanagerLiensCreateSecurity.prototype, "option2", void 0);
    return CloudresourcemanagerLiensCreateSecurity;
}(SpeakeasyBase));
export { CloudresourcemanagerLiensCreateSecurity };
var CloudresourcemanagerLiensCreateRequest = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerLiensCreateRequest, _super);
    function CloudresourcemanagerLiensCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerLiensCreateQueryParams)
    ], CloudresourcemanagerLiensCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Lien)
    ], CloudresourcemanagerLiensCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudresourcemanagerLiensCreateSecurity)
    ], CloudresourcemanagerLiensCreateRequest.prototype, "security", void 0);
    return CloudresourcemanagerLiensCreateRequest;
}(SpeakeasyBase));
export { CloudresourcemanagerLiensCreateRequest };
var CloudresourcemanagerLiensCreateResponse = /** @class */ (function (_super) {
    __extends(CloudresourcemanagerLiensCreateResponse, _super);
    function CloudresourcemanagerLiensCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudresourcemanagerLiensCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Lien)
    ], CloudresourcemanagerLiensCreateResponse.prototype, "lien", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudresourcemanagerLiensCreateResponse.prototype, "statusCode", void 0);
    return CloudresourcemanagerLiensCreateResponse;
}(SpeakeasyBase));
export { CloudresourcemanagerLiensCreateResponse };
