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
var CloudidentityGroupsMembershipsSearchTransitiveGroupsPathParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsSearchTransitiveGroupsPathParams, _super);
    function CloudidentityGroupsMembershipsSearchTransitiveGroupsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsPathParams.prototype, "parent", void 0);
    return CloudidentityGroupsMembershipsSearchTransitiveGroupsPathParams;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsSearchTransitiveGroupsPathParams };
var CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams, _super);
    function CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=query" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams.prototype, "query", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams };
var CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption1, _super);
    function CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption1;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption1 };
var CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption2, _super);
    function CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption2;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption2 };
var CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption3, _super);
    function CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption3.prototype, "oauth2c", void 0);
    return CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption3;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption3 };
var CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity, _super);
    function CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption1)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption2)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity.prototype, "option2", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurityOption3)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity.prototype, "option3", void 0);
    return CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity };
var CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest, _super);
    function CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsSearchTransitiveGroupsPathParams)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsSearchTransitiveGroupsQueryParams)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudidentityGroupsMembershipsSearchTransitiveGroupsSecurity)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest.prototype, "security", void 0);
    return CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest };
var CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse, _super);
    function CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.SearchTransitiveGroupsResponse)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse.prototype, "searchTransitiveGroupsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse.prototype, "statusCode", void 0);
    return CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse;
}(SpeakeasyBase));
export { CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse };
