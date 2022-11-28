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
var MonitoringProjectsGroupsListPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsListPathParams, _super);
    function MonitoringProjectsGroupsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsListPathParams.prototype, "name", void 0);
    return MonitoringProjectsGroupsListPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsListPathParams };
var MonitoringProjectsGroupsListQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsListQueryParams, _super);
    function MonitoringProjectsGroupsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ancestorsOfGroup" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsListQueryParams.prototype, "ancestorsOfGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=childrenOfGroup" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsListQueryParams.prototype, "childrenOfGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=descendantsOfGroup" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsListQueryParams.prototype, "descendantsOfGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MonitoringProjectsGroupsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsGroupsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsListQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsGroupsListQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsListQueryParams };
var MonitoringProjectsGroupsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsListSecurityOption1, _super);
    function MonitoringProjectsGroupsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsGroupsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsGroupsListSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsGroupsListSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsListSecurityOption1 };
var MonitoringProjectsGroupsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsListSecurityOption2, _super);
    function MonitoringProjectsGroupsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsGroupsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsGroupsListSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsGroupsListSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsListSecurityOption2 };
var MonitoringProjectsGroupsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsListSecurityOption3, _super);
    function MonitoringProjectsGroupsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsGroupsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsGroupsListSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsGroupsListSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsListSecurityOption3 };
var MonitoringProjectsGroupsListSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsListSecurity, _super);
    function MonitoringProjectsGroupsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsGroupsListSecurityOption1)
    ], MonitoringProjectsGroupsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsGroupsListSecurityOption2)
    ], MonitoringProjectsGroupsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsGroupsListSecurityOption3)
    ], MonitoringProjectsGroupsListSecurity.prototype, "option3", void 0);
    return MonitoringProjectsGroupsListSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsListSecurity };
var MonitoringProjectsGroupsListRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsListRequest, _super);
    function MonitoringProjectsGroupsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsGroupsListPathParams)
    ], MonitoringProjectsGroupsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsGroupsListQueryParams)
    ], MonitoringProjectsGroupsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsGroupsListSecurity)
    ], MonitoringProjectsGroupsListRequest.prototype, "security", void 0);
    return MonitoringProjectsGroupsListRequest;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsListRequest };
var MonitoringProjectsGroupsListResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsListResponse, _super);
    function MonitoringProjectsGroupsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListGroupsResponse)
    ], MonitoringProjectsGroupsListResponse.prototype, "listGroupsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsGroupsListResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsGroupsListResponse;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsListResponse };
