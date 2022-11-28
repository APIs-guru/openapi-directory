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
var SqlInstancesDemoteMasterPathParams = /** @class */ (function (_super) {
    __extends(SqlInstancesDemoteMasterPathParams, _super);
    function SqlInstancesDemoteMasterPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlInstancesDemoteMasterPathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlInstancesDemoteMasterPathParams.prototype, "project", void 0);
    return SqlInstancesDemoteMasterPathParams;
}(SpeakeasyBase));
export { SqlInstancesDemoteMasterPathParams };
var SqlInstancesDemoteMasterQueryParams = /** @class */ (function (_super) {
    __extends(SqlInstancesDemoteMasterQueryParams, _super);
    function SqlInstancesDemoteMasterQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlInstancesDemoteMasterQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlInstancesDemoteMasterQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlInstancesDemoteMasterQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlInstancesDemoteMasterQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlInstancesDemoteMasterQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlInstancesDemoteMasterQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlInstancesDemoteMasterQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlInstancesDemoteMasterQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlInstancesDemoteMasterQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlInstancesDemoteMasterQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlInstancesDemoteMasterQueryParams.prototype, "uploadProtocol", void 0);
    return SqlInstancesDemoteMasterQueryParams;
}(SpeakeasyBase));
export { SqlInstancesDemoteMasterQueryParams };
var SqlInstancesDemoteMasterSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlInstancesDemoteMasterSecurityOption1, _super);
    function SqlInstancesDemoteMasterSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesDemoteMasterSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesDemoteMasterSecurityOption1.prototype, "oauth2c", void 0);
    return SqlInstancesDemoteMasterSecurityOption1;
}(SpeakeasyBase));
export { SqlInstancesDemoteMasterSecurityOption1 };
var SqlInstancesDemoteMasterSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlInstancesDemoteMasterSecurityOption2, _super);
    function SqlInstancesDemoteMasterSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesDemoteMasterSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesDemoteMasterSecurityOption2.prototype, "oauth2c", void 0);
    return SqlInstancesDemoteMasterSecurityOption2;
}(SpeakeasyBase));
export { SqlInstancesDemoteMasterSecurityOption2 };
var SqlInstancesDemoteMasterSecurity = /** @class */ (function (_super) {
    __extends(SqlInstancesDemoteMasterSecurity, _super);
    function SqlInstancesDemoteMasterSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesDemoteMasterSecurityOption1)
    ], SqlInstancesDemoteMasterSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesDemoteMasterSecurityOption2)
    ], SqlInstancesDemoteMasterSecurity.prototype, "option2", void 0);
    return SqlInstancesDemoteMasterSecurity;
}(SpeakeasyBase));
export { SqlInstancesDemoteMasterSecurity };
var SqlInstancesDemoteMasterRequest = /** @class */ (function (_super) {
    __extends(SqlInstancesDemoteMasterRequest, _super);
    function SqlInstancesDemoteMasterRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesDemoteMasterPathParams)
    ], SqlInstancesDemoteMasterRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesDemoteMasterQueryParams)
    ], SqlInstancesDemoteMasterRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.InstancesDemoteMasterRequest)
    ], SqlInstancesDemoteMasterRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesDemoteMasterSecurity)
    ], SqlInstancesDemoteMasterRequest.prototype, "security", void 0);
    return SqlInstancesDemoteMasterRequest;
}(SpeakeasyBase));
export { SqlInstancesDemoteMasterRequest };
var SqlInstancesDemoteMasterResponse = /** @class */ (function (_super) {
    __extends(SqlInstancesDemoteMasterResponse, _super);
    function SqlInstancesDemoteMasterResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlInstancesDemoteMasterResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SqlInstancesDemoteMasterResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlInstancesDemoteMasterResponse.prototype, "statusCode", void 0);
    return SqlInstancesDemoteMasterResponse;
}(SpeakeasyBase));
export { SqlInstancesDemoteMasterResponse };
