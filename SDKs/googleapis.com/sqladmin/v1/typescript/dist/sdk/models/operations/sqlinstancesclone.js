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
var SqlInstancesClonePathParams = /** @class */ (function (_super) {
    __extends(SqlInstancesClonePathParams, _super);
    function SqlInstancesClonePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlInstancesClonePathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlInstancesClonePathParams.prototype, "project", void 0);
    return SqlInstancesClonePathParams;
}(SpeakeasyBase));
export { SqlInstancesClonePathParams };
var SqlInstancesCloneQueryParams = /** @class */ (function (_super) {
    __extends(SqlInstancesCloneQueryParams, _super);
    function SqlInstancesCloneQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlInstancesCloneQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlInstancesCloneQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlInstancesCloneQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlInstancesCloneQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlInstancesCloneQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlInstancesCloneQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlInstancesCloneQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlInstancesCloneQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlInstancesCloneQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlInstancesCloneQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlInstancesCloneQueryParams.prototype, "uploadProtocol", void 0);
    return SqlInstancesCloneQueryParams;
}(SpeakeasyBase));
export { SqlInstancesCloneQueryParams };
var SqlInstancesCloneSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlInstancesCloneSecurityOption1, _super);
    function SqlInstancesCloneSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesCloneSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesCloneSecurityOption1.prototype, "oauth2c", void 0);
    return SqlInstancesCloneSecurityOption1;
}(SpeakeasyBase));
export { SqlInstancesCloneSecurityOption1 };
var SqlInstancesCloneSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlInstancesCloneSecurityOption2, _super);
    function SqlInstancesCloneSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesCloneSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesCloneSecurityOption2.prototype, "oauth2c", void 0);
    return SqlInstancesCloneSecurityOption2;
}(SpeakeasyBase));
export { SqlInstancesCloneSecurityOption2 };
var SqlInstancesCloneSecurity = /** @class */ (function (_super) {
    __extends(SqlInstancesCloneSecurity, _super);
    function SqlInstancesCloneSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesCloneSecurityOption1)
    ], SqlInstancesCloneSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesCloneSecurityOption2)
    ], SqlInstancesCloneSecurity.prototype, "option2", void 0);
    return SqlInstancesCloneSecurity;
}(SpeakeasyBase));
export { SqlInstancesCloneSecurity };
var SqlInstancesCloneRequest = /** @class */ (function (_super) {
    __extends(SqlInstancesCloneRequest, _super);
    function SqlInstancesCloneRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesClonePathParams)
    ], SqlInstancesCloneRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesCloneQueryParams)
    ], SqlInstancesCloneRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.InstancesCloneRequest)
    ], SqlInstancesCloneRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesCloneSecurity)
    ], SqlInstancesCloneRequest.prototype, "security", void 0);
    return SqlInstancesCloneRequest;
}(SpeakeasyBase));
export { SqlInstancesCloneRequest };
var SqlInstancesCloneResponse = /** @class */ (function (_super) {
    __extends(SqlInstancesCloneResponse, _super);
    function SqlInstancesCloneResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlInstancesCloneResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SqlInstancesCloneResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlInstancesCloneResponse.prototype, "statusCode", void 0);
    return SqlInstancesCloneResponse;
}(SpeakeasyBase));
export { SqlInstancesCloneResponse };
