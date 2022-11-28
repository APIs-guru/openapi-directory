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
var BigtableadminProjectsInstancesTablesCreatePathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCreatePathParams, _super);
    function BigtableadminProjectsInstancesTablesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCreatePathParams.prototype, "parent", void 0);
    return BigtableadminProjectsInstancesTablesCreatePathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCreatePathParams };
var BigtableadminProjectsInstancesTablesCreateQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCreateQueryParams, _super);
    function BigtableadminProjectsInstancesTablesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesTablesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesTablesCreateQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCreateQueryParams };
var BigtableadminProjectsInstancesTablesCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCreateSecurityOption1, _super);
    function BigtableadminProjectsInstancesTablesCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesCreateSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesCreateSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCreateSecurityOption1 };
var BigtableadminProjectsInstancesTablesCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCreateSecurityOption2, _super);
    function BigtableadminProjectsInstancesTablesCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesCreateSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesCreateSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCreateSecurityOption2 };
var BigtableadminProjectsInstancesTablesCreateSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCreateSecurityOption3, _super);
    function BigtableadminProjectsInstancesTablesCreateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesCreateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesCreateSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesCreateSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCreateSecurityOption3 };
var BigtableadminProjectsInstancesTablesCreateSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCreateSecurityOption4, _super);
    function BigtableadminProjectsInstancesTablesCreateSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesCreateSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesCreateSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesCreateSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCreateSecurityOption4 };
var BigtableadminProjectsInstancesTablesCreateSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCreateSecurityOption5, _super);
    function BigtableadminProjectsInstancesTablesCreateSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesCreateSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesCreateSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesCreateSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCreateSecurityOption5 };
var BigtableadminProjectsInstancesTablesCreateSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCreateSecurity, _super);
    function BigtableadminProjectsInstancesTablesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesCreateSecurityOption1)
    ], BigtableadminProjectsInstancesTablesCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesCreateSecurityOption2)
    ], BigtableadminProjectsInstancesTablesCreateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesCreateSecurityOption3)
    ], BigtableadminProjectsInstancesTablesCreateSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesCreateSecurityOption4)
    ], BigtableadminProjectsInstancesTablesCreateSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesCreateSecurityOption5)
    ], BigtableadminProjectsInstancesTablesCreateSecurity.prototype, "option5", void 0);
    return BigtableadminProjectsInstancesTablesCreateSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCreateSecurity };
var BigtableadminProjectsInstancesTablesCreateRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCreateRequest, _super);
    function BigtableadminProjectsInstancesTablesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesCreatePathParams)
    ], BigtableadminProjectsInstancesTablesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesCreateQueryParams)
    ], BigtableadminProjectsInstancesTablesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CreateTableRequestInput)
    ], BigtableadminProjectsInstancesTablesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesCreateSecurity)
    ], BigtableadminProjectsInstancesTablesCreateRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesTablesCreateRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCreateRequest };
var BigtableadminProjectsInstancesTablesCreateResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesCreateResponse, _super);
    function BigtableadminProjectsInstancesTablesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesTablesCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Table)
    ], BigtableadminProjectsInstancesTablesCreateResponse.prototype, "table", void 0);
    return BigtableadminProjectsInstancesTablesCreateResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesCreateResponse };
