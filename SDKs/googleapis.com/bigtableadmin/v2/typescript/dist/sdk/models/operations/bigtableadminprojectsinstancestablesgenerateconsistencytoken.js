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
var BigtableadminProjectsInstancesTablesGenerateConsistencyTokenPathParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGenerateConsistencyTokenPathParams, _super);
    function BigtableadminProjectsInstancesTablesGenerateConsistencyTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenPathParams.prototype, "name", void 0);
    return BigtableadminProjectsInstancesTablesGenerateConsistencyTokenPathParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGenerateConsistencyTokenPathParams };
var BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams, _super);
    function BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams.prototype, "uploadProtocol", void 0);
    return BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams };
var BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1, _super);
    function BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1 };
var BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption2 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption2, _super);
    function BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption2.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption2;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption2 };
var BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption3 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption3, _super);
    function BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption3.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption3;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption3 };
var BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption4 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption4, _super);
    function BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption4.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption4;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption4 };
var BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption5 = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption5, _super);
    function BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption5.prototype, "oauth2c", void 0);
    return BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption5;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption5 };
var BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity, _super);
    function BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption2)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption3)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption4)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption5)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity.prototype, "option5", void 0);
    return BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity };
var BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest, _super);
    function BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesGenerateConsistencyTokenPathParams)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", Map)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest.prototype, "security", void 0);
    return BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest };
var BigtableadminProjectsInstancesTablesGenerateConsistencyTokenResponse = /** @class */ (function (_super) {
    __extends(BigtableadminProjectsInstancesTablesGenerateConsistencyTokenResponse, _super);
    function BigtableadminProjectsInstancesTablesGenerateConsistencyTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GenerateConsistencyTokenResponse)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenResponse.prototype, "generateConsistencyTokenResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], BigtableadminProjectsInstancesTablesGenerateConsistencyTokenResponse.prototype, "statusCode", void 0);
    return BigtableadminProjectsInstancesTablesGenerateConsistencyTokenResponse;
}(SpeakeasyBase));
export { BigtableadminProjectsInstancesTablesGenerateConsistencyTokenResponse };
