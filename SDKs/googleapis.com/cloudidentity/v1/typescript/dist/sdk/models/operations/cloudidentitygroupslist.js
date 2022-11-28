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
export var CloudidentityGroupsListViewEnum;
(function (CloudidentityGroupsListViewEnum) {
    CloudidentityGroupsListViewEnum["ViewUnspecified"] = "VIEW_UNSPECIFIED";
    CloudidentityGroupsListViewEnum["Basic"] = "BASIC";
    CloudidentityGroupsListViewEnum["Full"] = "FULL";
})(CloudidentityGroupsListViewEnum || (CloudidentityGroupsListViewEnum = {}));
var CloudidentityGroupsListQueryParams = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsListQueryParams, _super);
    function CloudidentityGroupsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudidentityGroupsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsListQueryParams.prototype, "parent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudidentityGroupsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], CloudidentityGroupsListQueryParams.prototype, "view", void 0);
    return CloudidentityGroupsListQueryParams;
}(SpeakeasyBase));
export { CloudidentityGroupsListQueryParams };
var CloudidentityGroupsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsListSecurityOption1, _super);
    function CloudidentityGroupsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudidentityGroupsListSecurityOption1;
}(SpeakeasyBase));
export { CloudidentityGroupsListSecurityOption1 };
var CloudidentityGroupsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsListSecurityOption2, _super);
    function CloudidentityGroupsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudidentityGroupsListSecurityOption2;
}(SpeakeasyBase));
export { CloudidentityGroupsListSecurityOption2 };
var CloudidentityGroupsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsListSecurityOption3, _super);
    function CloudidentityGroupsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudidentityGroupsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudidentityGroupsListSecurityOption3.prototype, "oauth2c", void 0);
    return CloudidentityGroupsListSecurityOption3;
}(SpeakeasyBase));
export { CloudidentityGroupsListSecurityOption3 };
var CloudidentityGroupsListSecurity = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsListSecurity, _super);
    function CloudidentityGroupsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsListSecurityOption1)
    ], CloudidentityGroupsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsListSecurityOption2)
    ], CloudidentityGroupsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", CloudidentityGroupsListSecurityOption3)
    ], CloudidentityGroupsListSecurity.prototype, "option3", void 0);
    return CloudidentityGroupsListSecurity;
}(SpeakeasyBase));
export { CloudidentityGroupsListSecurity };
var CloudidentityGroupsListRequest = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsListRequest, _super);
    function CloudidentityGroupsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityGroupsListQueryParams)
    ], CloudidentityGroupsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloudidentityGroupsListSecurity)
    ], CloudidentityGroupsListRequest.prototype, "security", void 0);
    return CloudidentityGroupsListRequest;
}(SpeakeasyBase));
export { CloudidentityGroupsListRequest };
var CloudidentityGroupsListResponse = /** @class */ (function (_super) {
    __extends(CloudidentityGroupsListResponse, _super);
    function CloudidentityGroupsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloudidentityGroupsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListGroupsResponse)
    ], CloudidentityGroupsListResponse.prototype, "listGroupsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloudidentityGroupsListResponse.prototype, "statusCode", void 0);
    return CloudidentityGroupsListResponse;
}(SpeakeasyBase));
export { CloudidentityGroupsListResponse };
