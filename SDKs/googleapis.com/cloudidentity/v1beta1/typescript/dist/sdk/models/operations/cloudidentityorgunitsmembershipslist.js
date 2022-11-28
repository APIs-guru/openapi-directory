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
var CloudidentityOrgUnitsMembershipsListPathParams = /** @class */ (function (_super) {
    __extends(CloudidentityOrgUnitsMembershipsListPathParams, _super);
    function CloudidentityOrgUnitsMembershipsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], CloudidentityOrgUnitsMembershipsListPathParams.prototype, "parent", void 0);
    return CloudidentityOrgUnitsMembershipsListPathParams;
}(SpeakeasyBase));
export { CloudidentityOrgUnitsMembershipsListPathParams };
var CloudidentityOrgUnitsMembershipsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityOrgUnitsMembershipsListQueryParams, _super);
    function CloudidentityOrgUnitsMembershipsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityOrgUnitsMembershipsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityOrgUnitsMembershipsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityOrgUnitsMembershipsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityOrgUnitsMembershipsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=customer" }),
        __metadata("design:type", String)
    ], CloudidentityOrgUnitsMembershipsListQueryParams.prototype, "customer", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityOrgUnitsMembershipsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudidentityOrgUnitsMembershipsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityOrgUnitsMembershipsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityOrgUnitsMembershipsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudidentityOrgUnitsMembershipsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudidentityOrgUnitsMembershipsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityOrgUnitsMembershipsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityOrgUnitsMembershipsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityOrgUnitsMembershipsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityOrgUnitsMembershipsListQueryParams.prototype, "uploadProtocol", void 0);
    return CloudidentityOrgUnitsMembershipsListQueryParams;
}(SpeakeasyBase));
export { CloudidentityOrgUnitsMembershipsListQueryParams };
var CloudidentityOrgUnitsMembershipsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityOrgUnitsMembershipsListSecurityOption1, _super);
    function CloudidentityOrgUnitsMembershipsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityOrgUnitsMembershipsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityOrgUnitsMembershipsListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityOrgUnitsMembershipsListSecurityOption1;
}(SpeakeasyBase));
export { CloudidentityOrgUnitsMembershipsListSecurityOption1 };
var CloudidentityOrgUnitsMembershipsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityOrgUnitsMembershipsListSecurityOption2, _super);
    function CloudidentityOrgUnitsMembershipsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityOrgUnitsMembershipsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityOrgUnitsMembershipsListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityOrgUnitsMembershipsListSecurityOption2;
}(SpeakeasyBase));
export { CloudidentityOrgUnitsMembershipsListSecurityOption2 };
var CloudidentityOrgUnitsMembershipsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudidentityOrgUnitsMembershipsListSecurityOption3, _super);
    function CloudidentityOrgUnitsMembershipsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityOrgUnitsMembershipsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityOrgUnitsMembershipsListSecurityOption3.prototype, "oauth2c", void 0);
    return CloudidentityOrgUnitsMembershipsListSecurityOption3;
}(SpeakeasyBase));
export { CloudidentityOrgUnitsMembershipsListSecurityOption3 };
var CloudidentityOrgUnitsMembershipsListSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityOrgUnitsMembershipsListSecurity, _super);
    function CloudidentityOrgUnitsMembershipsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityOrgUnitsMembershipsListSecurityOption1)
    ], CloudidentityOrgUnitsMembershipsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityOrgUnitsMembershipsListSecurityOption2)
    ], CloudidentityOrgUnitsMembershipsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityOrgUnitsMembershipsListSecurityOption3)
    ], CloudidentityOrgUnitsMembershipsListSecurity.prototype, "option3", void 0);
    return CloudidentityOrgUnitsMembershipsListSecurity;
}(SpeakeasyBase));
export { CloudidentityOrgUnitsMembershipsListSecurity };
var CloudidentityOrgUnitsMembershipsListRequest = /** @class */ (function (_super) {
    __extends(CloudidentityOrgUnitsMembershipsListRequest, _super);
    function CloudidentityOrgUnitsMembershipsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityOrgUnitsMembershipsListPathParams)
    ], CloudidentityOrgUnitsMembershipsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityOrgUnitsMembershipsListQueryParams)
    ], CloudidentityOrgUnitsMembershipsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityOrgUnitsMembershipsListSecurity)
    ], CloudidentityOrgUnitsMembershipsListRequest.prototype, "security", void 0);
    return CloudidentityOrgUnitsMembershipsListRequest;
}(SpeakeasyBase));
export { CloudidentityOrgUnitsMembershipsListRequest };
var CloudidentityOrgUnitsMembershipsListResponse = /** @class */ (function (_super) {
    __extends(CloudidentityOrgUnitsMembershipsListResponse, _super);
    function CloudidentityOrgUnitsMembershipsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudidentityOrgUnitsMembershipsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListOrgMembershipsResponse)
    ], CloudidentityOrgUnitsMembershipsListResponse.prototype, "listOrgMembershipsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudidentityOrgUnitsMembershipsListResponse.prototype, "statusCode", void 0);
    return CloudidentityOrgUnitsMembershipsListResponse;
}(SpeakeasyBase));
export { CloudidentityOrgUnitsMembershipsListResponse };
