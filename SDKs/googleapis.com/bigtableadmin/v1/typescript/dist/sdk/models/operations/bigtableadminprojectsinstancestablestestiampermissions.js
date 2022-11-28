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
var BigtableadminProjectsInstancesTablesTestIamPermissionsPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesTestIamPermissionsPathParams, _super);
    function BigtableadminProjectsInstancesTablesTestIamPermissionsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=resource" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsPathParams.prototype, "resource", void 0);
    return BigtableadminProjectsInstancesTablesTestIamPermissionsPathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesTestIamPermissionsPathParams };
var BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams, _super);
    function BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams };
var BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption1, _super);
    function BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption1 };
var BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption2, _super);
    function BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption2 };
var BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption3, _super);
    function BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption3 };
var BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption4, _super);
    function BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption4 };
var BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption5, _super);
    function BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption5 };
var BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption6, _super);
    function BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption6;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption6 };
var BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity, _super);
    function BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption1)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption2)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption3)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption4)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption5)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesTestIamPermissionsSecurityOption6)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity.prototype, "option6", void 0);
    return BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity };
var BigtableadminProjectsInstancesTablesTestIamPermissionsRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesTestIamPermissionsRequest, _super);
    function BigtableadminProjectsInstancesTablesTestIamPermissionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesTestIamPermissionsPathParams)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesTestIamPermissionsQueryParams)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.TestIamPermissionsRequest)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesTestIamPermissionsSecurity)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesTablesTestIamPermissionsRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesTestIamPermissionsRequest };
var BigtableadminProjectsInstancesTablesTestIamPermissionsResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesTestIamPermissionsResponse, _super);
    function BigtableadminProjectsInstancesTablesTestIamPermissionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.TestIamPermissionsResponse)
    ], BigtableadminProjectsInstancesTablesTestIamPermissionsResponse.prototype, "testIamPermissionsResponse", void 0);
    return BigtableadminProjectsInstancesTablesTestIamPermissionsResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesTestIamPermissionsResponse };
