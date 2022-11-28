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
var BigtableadminProjectsInstancesClustersBackupsCopyPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCopyPathParams, _super);
    function BigtableadminProjectsInstancesClustersBackupsCopyPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCopyPathParams.prototype, "parent", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCopyPathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCopyPathParams };
var BigtableadminProjectsInstancesClustersBackupsCopyQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCopyQueryParams, _super);
    function BigtableadminProjectsInstancesClustersBackupsCopyQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCopyQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCopyQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCopyQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCopyQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCopyQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCopyQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCopyQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesClustersBackupsCopyQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCopyQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCopyQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCopyQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCopyQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCopyQueryParams };
var BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1, _super);
    function BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1 };
var BigtableadminProjectsInstancesClustersBackupsCopySecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCopySecurityOption2, _super);
    function BigtableadminProjectsInstancesClustersBackupsCopySecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsCopySecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsCopySecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCopySecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCopySecurityOption2 };
var BigtableadminProjectsInstancesClustersBackupsCopySecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCopySecurityOption3, _super);
    function BigtableadminProjectsInstancesClustersBackupsCopySecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsCopySecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsCopySecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCopySecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCopySecurityOption3 };
var BigtableadminProjectsInstancesClustersBackupsCopySecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCopySecurityOption4, _super);
    function BigtableadminProjectsInstancesClustersBackupsCopySecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsCopySecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsCopySecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCopySecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCopySecurityOption4 };
var BigtableadminProjectsInstancesClustersBackupsCopySecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCopySecurityOption5, _super);
    function BigtableadminProjectsInstancesClustersBackupsCopySecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesClustersBackupsCopySecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesClustersBackupsCopySecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCopySecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCopySecurityOption5 };
var BigtableadminProjectsInstancesClustersBackupsCopySecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCopySecurity, _super);
    function BigtableadminProjectsInstancesClustersBackupsCopySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsCopySecurityOption1)
    ], BigtableadminProjectsInstancesClustersBackupsCopySecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsCopySecurityOption2)
    ], BigtableadminProjectsInstancesClustersBackupsCopySecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsCopySecurityOption3)
    ], BigtableadminProjectsInstancesClustersBackupsCopySecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsCopySecurityOption4)
    ], BigtableadminProjectsInstancesClustersBackupsCopySecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsCopySecurityOption5)
    ], BigtableadminProjectsInstancesClustersBackupsCopySecurity.prototype, "option5", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCopySecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCopySecurity };
var BigtableadminProjectsInstancesClustersBackupsCopyRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCopyRequest, _super);
    function BigtableadminProjectsInstancesClustersBackupsCopyRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsCopyPathParams)
    ], BigtableadminProjectsInstancesClustersBackupsCopyRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsCopyQueryParams)
    ], BigtableadminProjectsInstancesClustersBackupsCopyRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CopyBackupRequest)
    ], BigtableadminProjectsInstancesClustersBackupsCopyRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesClustersBackupsCopySecurity)
    ], BigtableadminProjectsInstancesClustersBackupsCopyRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCopyRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCopyRequest };
var BigtableadminProjectsInstancesClustersBackupsCopyResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesClustersBackupsCopyResponse, _super);
    function BigtableadminProjectsInstancesClustersBackupsCopyResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesClustersBackupsCopyResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], BigtableadminProjectsInstancesClustersBackupsCopyResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesClustersBackupsCopyResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesClustersBackupsCopyResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesClustersBackupsCopyResponse };
