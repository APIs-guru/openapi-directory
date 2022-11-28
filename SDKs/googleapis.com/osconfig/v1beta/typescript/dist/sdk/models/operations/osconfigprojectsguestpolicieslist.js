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
var OsconfigProjectsGuestPoliciesListPathParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsGuestPoliciesListPathParams, _super);
    function OsconfigProjectsGuestPoliciesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesListPathParams.prototype, "parent", void 0);
    return OsconfigProjectsGuestPoliciesListPathParams;
}(SpeakeasyBase));
export { OsconfigProjectsGuestPoliciesListPathParams };
var OsconfigProjectsGuestPoliciesListQueryParams = /** @class */ (function (_super) {
    __extends(OsconfigProjectsGuestPoliciesListQueryParams, _super);
    function OsconfigProjectsGuestPoliciesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], OsconfigProjectsGuestPoliciesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OsconfigProjectsGuestPoliciesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesListQueryParams.prototype, "uploadProtocol", void 0);
    return OsconfigProjectsGuestPoliciesListQueryParams;
}(SpeakeasyBase));
export { OsconfigProjectsGuestPoliciesListQueryParams };
var OsconfigProjectsGuestPoliciesListSecurity = /** @class */ (function (_super) {
    __extends(OsconfigProjectsGuestPoliciesListSecurity, _super);
    function OsconfigProjectsGuestPoliciesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OsconfigProjectsGuestPoliciesListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OsconfigProjectsGuestPoliciesListSecurity.prototype, "oauth2c", void 0);
    return OsconfigProjectsGuestPoliciesListSecurity;
}(SpeakeasyBase));
export { OsconfigProjectsGuestPoliciesListSecurity };
var OsconfigProjectsGuestPoliciesListRequest = /** @class */ (function (_super) {
    __extends(OsconfigProjectsGuestPoliciesListRequest, _super);
    function OsconfigProjectsGuestPoliciesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsGuestPoliciesListPathParams)
    ], OsconfigProjectsGuestPoliciesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsGuestPoliciesListQueryParams)
    ], OsconfigProjectsGuestPoliciesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OsconfigProjectsGuestPoliciesListSecurity)
    ], OsconfigProjectsGuestPoliciesListRequest.prototype, "security", void 0);
    return OsconfigProjectsGuestPoliciesListRequest;
}(SpeakeasyBase));
export { OsconfigProjectsGuestPoliciesListRequest };
var OsconfigProjectsGuestPoliciesListResponse = /** @class */ (function (_super) {
    __extends(OsconfigProjectsGuestPoliciesListResponse, _super);
    function OsconfigProjectsGuestPoliciesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OsconfigProjectsGuestPoliciesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListGuestPoliciesResponse)
    ], OsconfigProjectsGuestPoliciesListResponse.prototype, "listGuestPoliciesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OsconfigProjectsGuestPoliciesListResponse.prototype, "statusCode", void 0);
    return OsconfigProjectsGuestPoliciesListResponse;
}(SpeakeasyBase));
export { OsconfigProjectsGuestPoliciesListResponse };
