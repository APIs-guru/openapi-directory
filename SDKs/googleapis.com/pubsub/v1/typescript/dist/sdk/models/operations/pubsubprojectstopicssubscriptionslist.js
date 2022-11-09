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
var PubsubProjectsTopicsSubscriptionsListPathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSubscriptionsListPathParams, _super);
    function PubsubProjectsTopicsSubscriptionsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=topic" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSubscriptionsListPathParams.prototype, "topic", void 0);
    return PubsubProjectsTopicsSubscriptionsListPathParams;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSubscriptionsListPathParams };
var PubsubProjectsTopicsSubscriptionsListQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSubscriptionsListQueryParams, _super);
    function PubsubProjectsTopicsSubscriptionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSubscriptionsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSubscriptionsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSubscriptionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSubscriptionsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSubscriptionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSubscriptionsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSubscriptionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PubsubProjectsTopicsSubscriptionsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSubscriptionsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsTopicsSubscriptionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSubscriptionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSubscriptionsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSubscriptionsListQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsTopicsSubscriptionsListQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSubscriptionsListQueryParams };
var PubsubProjectsTopicsSubscriptionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSubscriptionsListSecurityOption1, _super);
    function PubsubProjectsTopicsSubscriptionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsTopicsSubscriptionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsTopicsSubscriptionsListSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsTopicsSubscriptionsListSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSubscriptionsListSecurityOption1 };
var PubsubProjectsTopicsSubscriptionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSubscriptionsListSecurityOption2, _super);
    function PubsubProjectsTopicsSubscriptionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsTopicsSubscriptionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsTopicsSubscriptionsListSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsTopicsSubscriptionsListSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSubscriptionsListSecurityOption2 };
var PubsubProjectsTopicsSubscriptionsListSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSubscriptionsListSecurity, _super);
    function PubsubProjectsTopicsSubscriptionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsTopicsSubscriptionsListSecurityOption1)
    ], PubsubProjectsTopicsSubscriptionsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsTopicsSubscriptionsListSecurityOption2)
    ], PubsubProjectsTopicsSubscriptionsListSecurity.prototype, "option2", void 0);
    return PubsubProjectsTopicsSubscriptionsListSecurity;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSubscriptionsListSecurity };
var PubsubProjectsTopicsSubscriptionsListRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSubscriptionsListRequest, _super);
    function PubsubProjectsTopicsSubscriptionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsTopicsSubscriptionsListPathParams)
    ], PubsubProjectsTopicsSubscriptionsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsTopicsSubscriptionsListQueryParams)
    ], PubsubProjectsTopicsSubscriptionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsTopicsSubscriptionsListSecurity)
    ], PubsubProjectsTopicsSubscriptionsListRequest.prototype, "security", void 0);
    return PubsubProjectsTopicsSubscriptionsListRequest;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSubscriptionsListRequest };
var PubsubProjectsTopicsSubscriptionsListResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSubscriptionsListResponse, _super);
    function PubsubProjectsTopicsSubscriptionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSubscriptionsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListTopicSubscriptionsResponse)
    ], PubsubProjectsTopicsSubscriptionsListResponse.prototype, "listTopicSubscriptionsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsTopicsSubscriptionsListResponse.prototype, "statusCode", void 0);
    return PubsubProjectsTopicsSubscriptionsListResponse;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSubscriptionsListResponse };
