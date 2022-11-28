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
var BigtableadminProjectsInstancesAppProfilesListPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesListPathParams, _super);
    function BigtableadminProjectsInstancesAppProfilesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesListPathParams.prototype, "parent", void 0);
    return BigtableadminProjectsInstancesAppProfilesListPathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesListPathParams };
var BigtableadminProjectsInstancesAppProfilesListQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesListQueryParams, _super);
    function BigtableadminProjectsInstancesAppProfilesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" }),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesAppProfilesListQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesAppProfilesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesListQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesAppProfilesListQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesListQueryParams };
var BigtableadminProjectsInstancesAppProfilesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesListSecurityOption1, _super);
    function BigtableadminProjectsInstancesAppProfilesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesAppProfilesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesAppProfilesListSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesAppProfilesListSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesListSecurityOption1 };
var BigtableadminProjectsInstancesAppProfilesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesListSecurityOption2, _super);
    function BigtableadminProjectsInstancesAppProfilesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesAppProfilesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesAppProfilesListSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesAppProfilesListSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesListSecurityOption2 };
var BigtableadminProjectsInstancesAppProfilesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesListSecurityOption3, _super);
    function BigtableadminProjectsInstancesAppProfilesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesAppProfilesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesAppProfilesListSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesAppProfilesListSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesListSecurityOption3 };
var BigtableadminProjectsInstancesAppProfilesListSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesListSecurityOption4, _super);
    function BigtableadminProjectsInstancesAppProfilesListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesAppProfilesListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesAppProfilesListSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesAppProfilesListSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesListSecurityOption4 };
var BigtableadminProjectsInstancesAppProfilesListSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesListSecurityOption5, _super);
    function BigtableadminProjectsInstancesAppProfilesListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesAppProfilesListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesAppProfilesListSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesAppProfilesListSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesListSecurityOption5 };
var BigtableadminProjectsInstancesAppProfilesListSecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesListSecurityOption6, _super);
    function BigtableadminProjectsInstancesAppProfilesListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesAppProfilesListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesAppProfilesListSecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesAppProfilesListSecurityOption6;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesListSecurityOption6 };
var BigtableadminProjectsInstancesAppProfilesListSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesListSecurity, _super);
    function BigtableadminProjectsInstancesAppProfilesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesListSecurityOption1)
    ], BigtableadminProjectsInstancesAppProfilesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesListSecurityOption2)
    ], BigtableadminProjectsInstancesAppProfilesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesListSecurityOption3)
    ], BigtableadminProjectsInstancesAppProfilesListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesListSecurityOption4)
    ], BigtableadminProjectsInstancesAppProfilesListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesListSecurityOption5)
    ], BigtableadminProjectsInstancesAppProfilesListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesListSecurityOption6)
    ], BigtableadminProjectsInstancesAppProfilesListSecurity.prototype, "option6", void 0);
    return BigtableadminProjectsInstancesAppProfilesListSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesListSecurity };
var BigtableadminProjectsInstancesAppProfilesListRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesListRequest, _super);
    function BigtableadminProjectsInstancesAppProfilesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesListPathParams)
    ], BigtableadminProjectsInstancesAppProfilesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesListQueryParams)
    ], BigtableadminProjectsInstancesAppProfilesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesAppProfilesListSecurity)
    ], BigtableadminProjectsInstancesAppProfilesListRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesAppProfilesListRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesListRequest };
var BigtableadminProjectsInstancesAppProfilesListResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesAppProfilesListResponse, _super);
    function BigtableadminProjectsInstancesAppProfilesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesAppProfilesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListAppProfilesResponse)
    ], BigtableadminProjectsInstancesAppProfilesListResponse.prototype, "listAppProfilesResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesAppProfilesListResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesAppProfilesListResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesAppProfilesListResponse };
