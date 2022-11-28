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
var MonitoringProjectsGroupsMembersListPathParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsMembersListPathParams, _super);
    function MonitoringProjectsGroupsMembersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsMembersListPathParams.prototype, "name", void 0);
    return MonitoringProjectsGroupsMembersListPathParams;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsMembersListPathParams };
var MonitoringProjectsGroupsMembersListQueryParams = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsMembersListQueryParams, _super);
    function MonitoringProjectsGroupsMembersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsMembersListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsMembersListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsMembersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsMembersListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsMembersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsMembersListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.endTime" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsMembersListQueryParams.prototype, "intervalEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=interval.startTime" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsMembersListQueryParams.prototype, "intervalStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsMembersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsMembersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], MonitoringProjectsGroupsMembersListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsMembersListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], MonitoringProjectsGroupsMembersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsMembersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsMembersListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsMembersListQueryParams.prototype, "uploadProtocol", void 0);
    return MonitoringProjectsGroupsMembersListQueryParams;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsMembersListQueryParams };
var MonitoringProjectsGroupsMembersListSecurityOption1 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsMembersListSecurityOption1, _super);
    function MonitoringProjectsGroupsMembersListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsGroupsMembersListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsGroupsMembersListSecurityOption1.prototype, "oauth2c", void 0);
    return MonitoringProjectsGroupsMembersListSecurityOption1;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsMembersListSecurityOption1 };
var MonitoringProjectsGroupsMembersListSecurityOption2 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsMembersListSecurityOption2, _super);
    function MonitoringProjectsGroupsMembersListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsGroupsMembersListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsGroupsMembersListSecurityOption2.prototype, "oauth2c", void 0);
    return MonitoringProjectsGroupsMembersListSecurityOption2;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsMembersListSecurityOption2 };
var MonitoringProjectsGroupsMembersListSecurityOption3 = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsMembersListSecurityOption3, _super);
    function MonitoringProjectsGroupsMembersListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], MonitoringProjectsGroupsMembersListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], MonitoringProjectsGroupsMembersListSecurityOption3.prototype, "oauth2c", void 0);
    return MonitoringProjectsGroupsMembersListSecurityOption3;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsMembersListSecurityOption3 };
var MonitoringProjectsGroupsMembersListSecurity = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsMembersListSecurity, _super);
    function MonitoringProjectsGroupsMembersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsGroupsMembersListSecurityOption1)
    ], MonitoringProjectsGroupsMembersListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsGroupsMembersListSecurityOption2)
    ], MonitoringProjectsGroupsMembersListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", MonitoringProjectsGroupsMembersListSecurityOption3)
    ], MonitoringProjectsGroupsMembersListSecurity.prototype, "option3", void 0);
    return MonitoringProjectsGroupsMembersListSecurity;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsMembersListSecurity };
var MonitoringProjectsGroupsMembersListRequest = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsMembersListRequest, _super);
    function MonitoringProjectsGroupsMembersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsGroupsMembersListPathParams)
    ], MonitoringProjectsGroupsMembersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsGroupsMembersListQueryParams)
    ], MonitoringProjectsGroupsMembersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", MonitoringProjectsGroupsMembersListSecurity)
    ], MonitoringProjectsGroupsMembersListRequest.prototype, "security", void 0);
    return MonitoringProjectsGroupsMembersListRequest;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsMembersListRequest };
var MonitoringProjectsGroupsMembersListResponse = /** @class */ (function (_super) {
    __extends(MonitoringProjectsGroupsMembersListResponse, _super);
    function MonitoringProjectsGroupsMembersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], MonitoringProjectsGroupsMembersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListGroupMembersResponse)
    ], MonitoringProjectsGroupsMembersListResponse.prototype, "listGroupMembersResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], MonitoringProjectsGroupsMembersListResponse.prototype, "statusCode", void 0);
    return MonitoringProjectsGroupsMembersListResponse;
}(SpeakeasyBase));
export { MonitoringProjectsGroupsMembersListResponse };
