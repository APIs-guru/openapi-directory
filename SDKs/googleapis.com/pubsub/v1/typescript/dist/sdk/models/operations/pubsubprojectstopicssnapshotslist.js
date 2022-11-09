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
var PubsubProjectsTopicsSnapshotsListPathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSnapshotsListPathParams, _super);
    function PubsubProjectsTopicsSnapshotsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=topic" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSnapshotsListPathParams.prototype, "topic", void 0);
    return PubsubProjectsTopicsSnapshotsListPathParams;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSnapshotsListPathParams };
var PubsubProjectsTopicsSnapshotsListQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSnapshotsListQueryParams, _super);
    function PubsubProjectsTopicsSnapshotsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSnapshotsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSnapshotsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSnapshotsListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSnapshotsListQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSnapshotsListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSnapshotsListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSnapshotsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], PubsubProjectsTopicsSnapshotsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSnapshotsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsTopicsSnapshotsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSnapshotsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSnapshotsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSnapshotsListQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsTopicsSnapshotsListQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSnapshotsListQueryParams };
var PubsubProjectsTopicsSnapshotsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSnapshotsListSecurityOption1, _super);
    function PubsubProjectsTopicsSnapshotsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsTopicsSnapshotsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsTopicsSnapshotsListSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsTopicsSnapshotsListSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSnapshotsListSecurityOption1 };
var PubsubProjectsTopicsSnapshotsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSnapshotsListSecurityOption2, _super);
    function PubsubProjectsTopicsSnapshotsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsTopicsSnapshotsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsTopicsSnapshotsListSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsTopicsSnapshotsListSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSnapshotsListSecurityOption2 };
var PubsubProjectsTopicsSnapshotsListSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSnapshotsListSecurity, _super);
    function PubsubProjectsTopicsSnapshotsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsTopicsSnapshotsListSecurityOption1)
    ], PubsubProjectsTopicsSnapshotsListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsTopicsSnapshotsListSecurityOption2)
    ], PubsubProjectsTopicsSnapshotsListSecurity.prototype, "option2", void 0);
    return PubsubProjectsTopicsSnapshotsListSecurity;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSnapshotsListSecurity };
var PubsubProjectsTopicsSnapshotsListRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSnapshotsListRequest, _super);
    function PubsubProjectsTopicsSnapshotsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsTopicsSnapshotsListPathParams)
    ], PubsubProjectsTopicsSnapshotsListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsTopicsSnapshotsListQueryParams)
    ], PubsubProjectsTopicsSnapshotsListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsTopicsSnapshotsListSecurity)
    ], PubsubProjectsTopicsSnapshotsListRequest.prototype, "security", void 0);
    return PubsubProjectsTopicsSnapshotsListRequest;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSnapshotsListRequest };
var PubsubProjectsTopicsSnapshotsListResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsSnapshotsListResponse, _super);
    function PubsubProjectsTopicsSnapshotsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsSnapshotsListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ListTopicSnapshotsResponse)
    ], PubsubProjectsTopicsSnapshotsListResponse.prototype, "listTopicSnapshotsResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsTopicsSnapshotsListResponse.prototype, "statusCode", void 0);
    return PubsubProjectsTopicsSnapshotsListResponse;
}(SpeakeasyBase));
export { PubsubProjectsTopicsSnapshotsListResponse };
