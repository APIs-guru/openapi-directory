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
var CloudtraceProjectsTracesListPathParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesListPathParams, _super);
    function CloudtraceProjectsTracesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListPathParams.prototype, "projectId", void 0);
    return CloudtraceProjectsTracesListPathParams;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesListPathParams };
export var CloudtraceProjectsTracesListViewEnum;
(function (CloudtraceProjectsTracesListViewEnum) {
    CloudtraceProjectsTracesListViewEnum["ViewTypeUnspecified"] = "VIEW_TYPE_UNSPECIFIED";
    CloudtraceProjectsTracesListViewEnum["Minimal"] = "MINIMAL";
    CloudtraceProjectsTracesListViewEnum["Rootspan"] = "ROOTSPAN";
    CloudtraceProjectsTracesListViewEnum["Complete"] = "COMPLETE";
})(CloudtraceProjectsTracesListViewEnum || (CloudtraceProjectsTracesListViewEnum = {}));
var CloudtraceProjectsTracesListQueryParams = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesListQueryParams, _super);
    function CloudtraceProjectsTracesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=endTime" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "endTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "filter", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=startTime" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "startTime", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListQueryParams.prototype, "view", void 0);
    return CloudtraceProjectsTracesListQueryParams;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesListQueryParams };
var CloudtraceProjectsTracesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesListSecurityOption1, _super);
    function CloudtraceProjectsTracesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsTracesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsTracesListSecurityOption1.prototype, "oauth2c", void 0);
    return CloudtraceProjectsTracesListSecurityOption1;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesListSecurityOption1 };
var CloudtraceProjectsTracesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesListSecurityOption2, _super);
    function CloudtraceProjectsTracesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], CloudtraceProjectsTracesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], CloudtraceProjectsTracesListSecurityOption2.prototype, "oauth2c", void 0);
    return CloudtraceProjectsTracesListSecurityOption2;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesListSecurityOption2 };
var CloudtraceProjectsTracesListSecurity = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesListSecurity, _super);
    function CloudtraceProjectsTracesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsTracesListSecurityOption1)
    ], CloudtraceProjectsTracesListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", CloudtraceProjectsTracesListSecurityOption2)
    ], CloudtraceProjectsTracesListSecurity.prototype, "option2", void 0);
    return CloudtraceProjectsTracesListSecurity;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesListSecurity };
var CloudtraceProjectsTracesListRequest = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesListRequest, _super);
    function CloudtraceProjectsTracesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", CloudtraceProjectsTracesListPathParams)
    ], CloudtraceProjectsTracesListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudtraceProjectsTracesListQueryParams)
    ], CloudtraceProjectsTracesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", CloudtraceProjectsTracesListSecurity)
    ], CloudtraceProjectsTracesListRequest.prototype, "security", void 0);
    return CloudtraceProjectsTracesListRequest;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesListRequest };
var CloudtraceProjectsTracesListResponse = /** @class */ (function (_super) {
    __extends(CloudtraceProjectsTracesListResponse, _super);
    function CloudtraceProjectsTracesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], CloudtraceProjectsTracesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListTracesResponse)
    ], CloudtraceProjectsTracesListResponse.prototype, "listTracesResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], CloudtraceProjectsTracesListResponse.prototype, "statusCode", void 0);
    return CloudtraceProjectsTracesListResponse;
}(SpeakeasyBase));
export { CloudtraceProjectsTracesListResponse };
