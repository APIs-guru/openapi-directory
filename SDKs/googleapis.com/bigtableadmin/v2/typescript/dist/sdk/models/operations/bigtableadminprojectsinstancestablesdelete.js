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
var BigtableadminProjectsInstancesTablesDeletePathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDeletePathParams, _super);
    function BigtableadminProjectsInstancesTablesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDeletePathParams.prototype, "name", void 0);
    return BigtableadminProjectsInstancesTablesDeletePathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDeletePathParams };
var BigtableadminProjectsInstancesTablesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDeleteQueryParams, _super);
    function BigtableadminProjectsInstancesTablesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignoreWarnings" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesTablesDeleteQueryParams.prototype, "ignoreWarnings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesTablesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesTablesDeleteQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDeleteQueryParams };
var BigtableadminProjectsInstancesTablesDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDeleteSecurityOption1, _super);
    function BigtableadminProjectsInstancesTablesDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesDeleteSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDeleteSecurityOption1 };
var BigtableadminProjectsInstancesTablesDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDeleteSecurityOption2, _super);
    function BigtableadminProjectsInstancesTablesDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesDeleteSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDeleteSecurityOption2 };
var BigtableadminProjectsInstancesTablesDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDeleteSecurityOption3, _super);
    function BigtableadminProjectsInstancesTablesDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesDeleteSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDeleteSecurityOption3 };
var BigtableadminProjectsInstancesTablesDeleteSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDeleteSecurityOption4, _super);
    function BigtableadminProjectsInstancesTablesDeleteSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesDeleteSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesDeleteSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesDeleteSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDeleteSecurityOption4 };
var BigtableadminProjectsInstancesTablesDeleteSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDeleteSecurityOption5, _super);
    function BigtableadminProjectsInstancesTablesDeleteSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesDeleteSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesDeleteSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesDeleteSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDeleteSecurityOption5 };
var BigtableadminProjectsInstancesTablesDeleteSecurityOption6 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDeleteSecurityOption6, _super);
    function BigtableadminProjectsInstancesTablesDeleteSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesDeleteSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesDeleteSecurityOption6.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesDeleteSecurityOption6;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDeleteSecurityOption6 };
var BigtableadminProjectsInstancesTablesDeleteSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDeleteSecurity, _super);
    function BigtableadminProjectsInstancesTablesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesDeleteSecurityOption1)
    ], BigtableadminProjectsInstancesTablesDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesDeleteSecurityOption2)
    ], BigtableadminProjectsInstancesTablesDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesDeleteSecurityOption3)
    ], BigtableadminProjectsInstancesTablesDeleteSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesDeleteSecurityOption4)
    ], BigtableadminProjectsInstancesTablesDeleteSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesDeleteSecurityOption5)
    ], BigtableadminProjectsInstancesTablesDeleteSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesDeleteSecurityOption6)
    ], BigtableadminProjectsInstancesTablesDeleteSecurity.prototype, "option6", void 0);
    return BigtableadminProjectsInstancesTablesDeleteSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDeleteSecurity };
var BigtableadminProjectsInstancesTablesDeleteRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDeleteRequest, _super);
    function BigtableadminProjectsInstancesTablesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesDeletePathParams)
    ], BigtableadminProjectsInstancesTablesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesDeleteQueryParams)
    ], BigtableadminProjectsInstancesTablesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesDeleteSecurity)
    ], BigtableadminProjectsInstancesTablesDeleteRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesTablesDeleteRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDeleteRequest };
var BigtableadminProjectsInstancesTablesDeleteResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesDeleteResponse, _super);
    function BigtableadminProjectsInstancesTablesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], BigtableadminProjectsInstancesTablesDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesTablesDeleteResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesTablesDeleteResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesDeleteResponse };
