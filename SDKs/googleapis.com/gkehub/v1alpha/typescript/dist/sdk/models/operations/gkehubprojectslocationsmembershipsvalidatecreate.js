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
var GkehubProjectsLocationsMembershipsValidateCreatePathParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsValidateCreatePathParams, _super);
    function GkehubProjectsLocationsMembershipsValidateCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsValidateCreatePathParams.prototype, "parent", void 0);
    return GkehubProjectsLocationsMembershipsValidateCreatePathParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsValidateCreatePathParams };
var GkehubProjectsLocationsMembershipsValidateCreateQueryParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsValidateCreateQueryParams, _super);
    function GkehubProjectsLocationsMembershipsValidateCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsValidateCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsValidateCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsValidateCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsValidateCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsValidateCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsValidateCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsValidateCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkehubProjectsLocationsMembershipsValidateCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsValidateCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsValidateCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsValidateCreateQueryParams.prototype, "uploadProtocol", void 0);
    return GkehubProjectsLocationsMembershipsValidateCreateQueryParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsValidateCreateQueryParams };
var GkehubProjectsLocationsMembershipsValidateCreateSecurity = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsValidateCreateSecurity, _super);
    function GkehubProjectsLocationsMembershipsValidateCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkehubProjectsLocationsMembershipsValidateCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkehubProjectsLocationsMembershipsValidateCreateSecurity.prototype, "oauth2c", void 0);
    return GkehubProjectsLocationsMembershipsValidateCreateSecurity;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsValidateCreateSecurity };
var GkehubProjectsLocationsMembershipsValidateCreateRequest = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsValidateCreateRequest, _super);
    function GkehubProjectsLocationsMembershipsValidateCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsValidateCreatePathParams)
    ], GkehubProjectsLocationsMembershipsValidateCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsValidateCreateQueryParams)
    ], GkehubProjectsLocationsMembershipsValidateCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ValidateCreateMembershipRequestInput)
    ], GkehubProjectsLocationsMembershipsValidateCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsValidateCreateSecurity)
    ], GkehubProjectsLocationsMembershipsValidateCreateRequest.prototype, "security", void 0);
    return GkehubProjectsLocationsMembershipsValidateCreateRequest;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsValidateCreateRequest };
var GkehubProjectsLocationsMembershipsValidateCreateResponse = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsValidateCreateResponse, _super);
    function GkehubProjectsLocationsMembershipsValidateCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsValidateCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GkehubProjectsLocationsMembershipsValidateCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidateCreateMembershipResponse)
    ], GkehubProjectsLocationsMembershipsValidateCreateResponse.prototype, "validateCreateMembershipResponse", void 0);
    return GkehubProjectsLocationsMembershipsValidateCreateResponse;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsValidateCreateResponse };
