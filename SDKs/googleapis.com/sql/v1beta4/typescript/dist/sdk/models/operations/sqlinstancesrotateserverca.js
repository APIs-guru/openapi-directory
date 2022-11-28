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
var SqlInstancesRotateServerCaPathParams = /** @class */ (function (_super) {
    __extends(SqlInstancesRotateServerCaPathParams, _super);
    function SqlInstancesRotateServerCaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlInstancesRotateServerCaPathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlInstancesRotateServerCaPathParams.prototype, "project", void 0);
    return SqlInstancesRotateServerCaPathParams;
}(SpeakeasyBase));
export { SqlInstancesRotateServerCaPathParams };
var SqlInstancesRotateServerCaQueryParams = /** @class */ (function (_super) {
    __extends(SqlInstancesRotateServerCaQueryParams, _super);
    function SqlInstancesRotateServerCaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlInstancesRotateServerCaQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlInstancesRotateServerCaQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlInstancesRotateServerCaQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlInstancesRotateServerCaQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlInstancesRotateServerCaQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlInstancesRotateServerCaQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlInstancesRotateServerCaQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlInstancesRotateServerCaQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlInstancesRotateServerCaQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlInstancesRotateServerCaQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlInstancesRotateServerCaQueryParams.prototype, "uploadProtocol", void 0);
    return SqlInstancesRotateServerCaQueryParams;
}(SpeakeasyBase));
export { SqlInstancesRotateServerCaQueryParams };
var SqlInstancesRotateServerCaSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlInstancesRotateServerCaSecurityOption1, _super);
    function SqlInstancesRotateServerCaSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesRotateServerCaSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesRotateServerCaSecurityOption1.prototype, "oauth2c", void 0);
    return SqlInstancesRotateServerCaSecurityOption1;
}(SpeakeasyBase));
export { SqlInstancesRotateServerCaSecurityOption1 };
var SqlInstancesRotateServerCaSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlInstancesRotateServerCaSecurityOption2, _super);
    function SqlInstancesRotateServerCaSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesRotateServerCaSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesRotateServerCaSecurityOption2.prototype, "oauth2c", void 0);
    return SqlInstancesRotateServerCaSecurityOption2;
}(SpeakeasyBase));
export { SqlInstancesRotateServerCaSecurityOption2 };
var SqlInstancesRotateServerCaSecurity = /** @class */ (function (_super) {
    __extends(SqlInstancesRotateServerCaSecurity, _super);
    function SqlInstancesRotateServerCaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesRotateServerCaSecurityOption1)
    ], SqlInstancesRotateServerCaSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesRotateServerCaSecurityOption2)
    ], SqlInstancesRotateServerCaSecurity.prototype, "option2", void 0);
    return SqlInstancesRotateServerCaSecurity;
}(SpeakeasyBase));
export { SqlInstancesRotateServerCaSecurity };
var SqlInstancesRotateServerCaRequest = /** @class */ (function (_super) {
    __extends(SqlInstancesRotateServerCaRequest, _super);
    function SqlInstancesRotateServerCaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesRotateServerCaPathParams)
    ], SqlInstancesRotateServerCaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesRotateServerCaQueryParams)
    ], SqlInstancesRotateServerCaRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.InstancesRotateServerCaRequest)
    ], SqlInstancesRotateServerCaRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesRotateServerCaSecurity)
    ], SqlInstancesRotateServerCaRequest.prototype, "security", void 0);
    return SqlInstancesRotateServerCaRequest;
}(SpeakeasyBase));
export { SqlInstancesRotateServerCaRequest };
var SqlInstancesRotateServerCaResponse = /** @class */ (function (_super) {
    __extends(SqlInstancesRotateServerCaResponse, _super);
    function SqlInstancesRotateServerCaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlInstancesRotateServerCaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SqlInstancesRotateServerCaResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlInstancesRotateServerCaResponse.prototype, "statusCode", void 0);
    return SqlInstancesRotateServerCaResponse;
}(SpeakeasyBase));
export { SqlInstancesRotateServerCaResponse };
