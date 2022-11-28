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
var BigtableadminProjectsInstancesTablesRestorePathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesRestorePathParams, _super);
    function BigtableadminProjectsInstancesTablesRestorePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesRestorePathParams.prototype, "parent", void 0);
    return BigtableadminProjectsInstancesTablesRestorePathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesRestorePathParams };
var BigtableadminProjectsInstancesTablesRestoreQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesRestoreQueryParams, _super);
    function BigtableadminProjectsInstancesTablesRestoreQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesRestoreQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesRestoreQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesRestoreQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesRestoreQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesRestoreQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesRestoreQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesRestoreQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesTablesRestoreQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesRestoreQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesRestoreQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesRestoreQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesTablesRestoreQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesRestoreQueryParams };
var BigtableadminProjectsInstancesTablesRestoreSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesRestoreSecurityOption1, _super);
    function BigtableadminProjectsInstancesTablesRestoreSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesRestoreSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesRestoreSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesRestoreSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesRestoreSecurityOption1 };
var BigtableadminProjectsInstancesTablesRestoreSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesRestoreSecurityOption2, _super);
    function BigtableadminProjectsInstancesTablesRestoreSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesRestoreSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesRestoreSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesRestoreSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesRestoreSecurityOption2 };
var BigtableadminProjectsInstancesTablesRestoreSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesRestoreSecurityOption3, _super);
    function BigtableadminProjectsInstancesTablesRestoreSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesRestoreSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesRestoreSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesRestoreSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesRestoreSecurityOption3 };
var BigtableadminProjectsInstancesTablesRestoreSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesRestoreSecurityOption4, _super);
    function BigtableadminProjectsInstancesTablesRestoreSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesRestoreSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesRestoreSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesRestoreSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesRestoreSecurityOption4 };
var BigtableadminProjectsInstancesTablesRestoreSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesRestoreSecurityOption5, _super);
    function BigtableadminProjectsInstancesTablesRestoreSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesRestoreSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesRestoreSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesRestoreSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesRestoreSecurityOption5 };
var BigtableadminProjectsInstancesTablesRestoreSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesRestoreSecurity, _super);
    function BigtableadminProjectsInstancesTablesRestoreSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesRestoreSecurityOption1)
    ], BigtableadminProjectsInstancesTablesRestoreSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesRestoreSecurityOption2)
    ], BigtableadminProjectsInstancesTablesRestoreSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesRestoreSecurityOption3)
    ], BigtableadminProjectsInstancesTablesRestoreSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesRestoreSecurityOption4)
    ], BigtableadminProjectsInstancesTablesRestoreSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesRestoreSecurityOption5)
    ], BigtableadminProjectsInstancesTablesRestoreSecurity.prototype, "option5", void 0);
    return BigtableadminProjectsInstancesTablesRestoreSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesRestoreSecurity };
var BigtableadminProjectsInstancesTablesRestoreRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesRestoreRequest, _super);
    function BigtableadminProjectsInstancesTablesRestoreRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesRestorePathParams)
    ], BigtableadminProjectsInstancesTablesRestoreRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesRestoreQueryParams)
    ], BigtableadminProjectsInstancesTablesRestoreRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.RestoreTableRequest)
    ], BigtableadminProjectsInstancesTablesRestoreRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesRestoreSecurity)
    ], BigtableadminProjectsInstancesTablesRestoreRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesTablesRestoreRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesRestoreRequest };
var BigtableadminProjectsInstancesTablesRestoreResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesRestoreResponse, _super);
    function BigtableadminProjectsInstancesTablesRestoreResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesRestoreResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], BigtableadminProjectsInstancesTablesRestoreResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesTablesRestoreResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesTablesRestoreResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesRestoreResponse };
