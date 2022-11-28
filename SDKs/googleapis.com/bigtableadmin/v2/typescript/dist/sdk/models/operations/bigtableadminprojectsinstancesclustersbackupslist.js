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
var BigtableadminProjectsInstancesClustersBackupsListPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsListPathParams, _super);
    function BigtableadminProjectsInstancesClustersBackupsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsListPathParams.prototype, "parent", void 0);
    return BigtableadminProjectsInstancesClustersBackupsListPathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsListPathParams };
var BigtableadminProjectsInstancesClustersBackupsListQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsListQueryParams, _super);
    function BigtableadminProjectsInstancesClustersBackupsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsListQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsListQueryParams.prototype, "orderBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesClustersBackupsListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesClustersBackupsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsListQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesClustersBackupsListQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsListQueryParams };
var BigtableadminProjectsInstancesClustersBackupsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsListSecurityOption1, _super);
    function BigtableadminProjectsInstancesClustersBackupsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsListSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsListSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsListSecurityOption1 };
var BigtableadminProjectsInstancesClustersBackupsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsListSecurityOption2, _super);
    function BigtableadminProjectsInstancesClustersBackupsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsListSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsListSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsListSecurityOption2 };
var BigtableadminProjectsInstancesClustersBackupsListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsListSecurityOption3, _super);
    function BigtableadminProjectsInstancesClustersBackupsListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsListSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsListSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsListSecurityOption3 };
var BigtableadminProjectsInstancesClustersBackupsListSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsListSecurityOption4, _super);
    function BigtableadminProjectsInstancesClustersBackupsListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsListSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsListSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsListSecurityOption4 };
var BigtableadminProjectsInstancesClustersBackupsListSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsListSecurityOption5, _super);
    function BigtableadminProjectsInstancesClustersBackupsListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsListSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsListSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsListSecurityOption5 };
var BigtableadminProjectsInstancesClustersBackupsListSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsListSecurity, _super);
    function BigtableadminProjectsInstancesClustersBackupsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsListSecurityOption1)
    ], BigtableadminProjectsInstancesClustersBackupsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsListSecurityOption2)
    ], BigtableadminProjectsInstancesClustersBackupsListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsListSecurityOption3)
    ], BigtableadminProjectsInstancesClustersBackupsListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsListSecurityOption4)
    ], BigtableadminProjectsInstancesClustersBackupsListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsListSecurityOption5)
    ], BigtableadminProjectsInstancesClustersBackupsListSecurity.prototype, "option5", void 0);
    return BigtableadminProjectsInstancesClustersBackupsListSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsListSecurity };
var BigtableadminProjectsInstancesClustersBackupsListRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsListRequest, _super);
    function BigtableadminProjectsInstancesClustersBackupsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsListPathParams)
    ], BigtableadminProjectsInstancesClustersBackupsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsListQueryParams)
    ], BigtableadminProjectsInstancesClustersBackupsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsListSecurity)
    ], BigtableadminProjectsInstancesClustersBackupsListRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesClustersBackupsListRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsListRequest };
var BigtableadminProjectsInstancesClustersBackupsListResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsListResponse, _super);
    function BigtableadminProjectsInstancesClustersBackupsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListBackupsResponse)
    ], BigtableadminProjectsInstancesClustersBackupsListResponse.prototype, "listBackupsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesClustersBackupsListResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesClustersBackupsListResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsListResponse };
