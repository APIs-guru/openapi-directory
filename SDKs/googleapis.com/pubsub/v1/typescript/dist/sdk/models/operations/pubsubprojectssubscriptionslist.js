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
var PubsubProjectsSubscriptionsListPathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsListPathParams, _super);
    function PubsubProjectsSubscriptionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsListPathParams.prototype, "project", void 0);
    return PubsubProjectsSubscriptionsListPathParams;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsListPathParams };
var PubsubProjectsSubscriptionsListQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsListQueryParams, _super);
    function PubsubProjectsSubscriptionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PubsubProjectsSubscriptionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsSubscriptionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsListQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsSubscriptionsListQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsListQueryParams };
var PubsubProjectsSubscriptionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsListSecurityOption1, _super);
    function PubsubProjectsSubscriptionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSubscriptionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSubscriptionsListSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsSubscriptionsListSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsListSecurityOption1 };
var PubsubProjectsSubscriptionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsListSecurityOption2, _super);
    function PubsubProjectsSubscriptionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSubscriptionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSubscriptionsListSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsSubscriptionsListSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsListSecurityOption2 };
var PubsubProjectsSubscriptionsListSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsListSecurity, _super);
    function PubsubProjectsSubscriptionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSubscriptionsListSecurityOption1)
    ], PubsubProjectsSubscriptionsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSubscriptionsListSecurityOption2)
    ], PubsubProjectsSubscriptionsListSecurity.prototype, "option2", void 0);
    return PubsubProjectsSubscriptionsListSecurity;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsListSecurity };
var PubsubProjectsSubscriptionsListRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsListRequest, _super);
    function PubsubProjectsSubscriptionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsListPathParams)
    ], PubsubProjectsSubscriptionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsListQueryParams)
    ], PubsubProjectsSubscriptionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsListSecurity)
    ], PubsubProjectsSubscriptionsListRequest.prototype, "security", void 0);
    return PubsubProjectsSubscriptionsListRequest;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsListRequest };
var PubsubProjectsSubscriptionsListResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsListResponse, _super);
    function PubsubProjectsSubscriptionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListSubscriptionsResponse)
    ], PubsubProjectsSubscriptionsListResponse.prototype, "listSubscriptionsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsSubscriptionsListResponse.prototype, "statusCode", void 0);
    return PubsubProjectsSubscriptionsListResponse;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsListResponse };
