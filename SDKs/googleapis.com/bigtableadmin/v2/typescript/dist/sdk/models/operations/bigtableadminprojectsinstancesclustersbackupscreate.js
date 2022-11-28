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
var BigtableadminProjectsInstancesClustersBackupsCreatePathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCreatePathParams, _super);
    function BigtableadminProjectsInstancesClustersBackupsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCreatePathParams.prototype, "parent", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCreatePathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCreatePathParams };
var BigtableadminProjectsInstancesClustersBackupsCreateQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCreateQueryParams, _super);
    function BigtableadminProjectsInstancesClustersBackupsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=backupId" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCreateQueryParams.prototype, "backupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesClustersBackupsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCreateQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCreateQueryParams };
var BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption1, _super);
    function BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption1 };
var BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption2, _super);
    function BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption2 };
var BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption3, _super);
    function BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption3 };
var BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption4, _super);
    function BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption4 };
var BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption5, _super);
    function BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption5 };
var BigtableadminProjectsInstancesClustersBackupsCreateSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCreateSecurity, _super);
    function BigtableadminProjectsInstancesClustersBackupsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption1)
    ], BigtableadminProjectsInstancesClustersBackupsCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption2)
    ], BigtableadminProjectsInstancesClustersBackupsCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption3)
    ], BigtableadminProjectsInstancesClustersBackupsCreateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption4)
    ], BigtableadminProjectsInstancesClustersBackupsCreateSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption5)
    ], BigtableadminProjectsInstancesClustersBackupsCreateSecurity.prototype, "option5", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCreateSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCreateSecurity };
var BigtableadminProjectsInstancesClustersBackupsCreateRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCreateRequest, _super);
    function BigtableadminProjectsInstancesClustersBackupsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsCreatePathParams)
    ], BigtableadminProjectsInstancesClustersBackupsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsCreateQueryParams)
    ], BigtableadminProjectsInstancesClustersBackupsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BackupInput)
    ], BigtableadminProjectsInstancesClustersBackupsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsCreateSecurity)
    ], BigtableadminProjectsInstancesClustersBackupsCreateRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCreateRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCreateRequest };
var BigtableadminProjectsInstancesClustersBackupsCreateResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCreateResponse, _super);
    function BigtableadminProjectsInstancesClustersBackupsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], BigtableadminProjectsInstancesClustersBackupsCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesClustersBackupsCreateResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCreateResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCreateResponse };
