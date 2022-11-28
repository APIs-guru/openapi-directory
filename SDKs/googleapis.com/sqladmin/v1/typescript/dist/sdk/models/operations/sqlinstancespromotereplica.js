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
var SqlInstancesPromoteReplicaPathParams = /** @class */ (function (_super) {
    __extends(SqlInstancesPromoteReplicaPathParams, _super);
    function SqlInstancesPromoteReplicaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlInstancesPromoteReplicaPathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlInstancesPromoteReplicaPathParams.prototype, "project", void 0);
    return SqlInstancesPromoteReplicaPathParams;
}(SpeakeasyBase));
export { SqlInstancesPromoteReplicaPathParams };
var SqlInstancesPromoteReplicaQueryParams = /** @class */ (function (_super) {
    __extends(SqlInstancesPromoteReplicaQueryParams, _super);
    function SqlInstancesPromoteReplicaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlInstancesPromoteReplicaQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlInstancesPromoteReplicaQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlInstancesPromoteReplicaQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlInstancesPromoteReplicaQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlInstancesPromoteReplicaQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlInstancesPromoteReplicaQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlInstancesPromoteReplicaQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlInstancesPromoteReplicaQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlInstancesPromoteReplicaQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlInstancesPromoteReplicaQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlInstancesPromoteReplicaQueryParams.prototype, "uploadProtocol", void 0);
    return SqlInstancesPromoteReplicaQueryParams;
}(SpeakeasyBase));
export { SqlInstancesPromoteReplicaQueryParams };
var SqlInstancesPromoteReplicaSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlInstancesPromoteReplicaSecurityOption1, _super);
    function SqlInstancesPromoteReplicaSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesPromoteReplicaSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesPromoteReplicaSecurityOption1.prototype, "oauth2c", void 0);
    return SqlInstancesPromoteReplicaSecurityOption1;
}(SpeakeasyBase));
export { SqlInstancesPromoteReplicaSecurityOption1 };
var SqlInstancesPromoteReplicaSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlInstancesPromoteReplicaSecurityOption2, _super);
    function SqlInstancesPromoteReplicaSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesPromoteReplicaSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesPromoteReplicaSecurityOption2.prototype, "oauth2c", void 0);
    return SqlInstancesPromoteReplicaSecurityOption2;
}(SpeakeasyBase));
export { SqlInstancesPromoteReplicaSecurityOption2 };
var SqlInstancesPromoteReplicaSecurity = /** @class */ (function (_super) {
    __extends(SqlInstancesPromoteReplicaSecurity, _super);
    function SqlInstancesPromoteReplicaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesPromoteReplicaSecurityOption1)
    ], SqlInstancesPromoteReplicaSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesPromoteReplicaSecurityOption2)
    ], SqlInstancesPromoteReplicaSecurity.prototype, "option2", void 0);
    return SqlInstancesPromoteReplicaSecurity;
}(SpeakeasyBase));
export { SqlInstancesPromoteReplicaSecurity };
var SqlInstancesPromoteReplicaRequest = /** @class */ (function (_super) {
    __extends(SqlInstancesPromoteReplicaRequest, _super);
    function SqlInstancesPromoteReplicaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesPromoteReplicaPathParams)
    ], SqlInstancesPromoteReplicaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesPromoteReplicaQueryParams)
    ], SqlInstancesPromoteReplicaRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesPromoteReplicaSecurity)
    ], SqlInstancesPromoteReplicaRequest.prototype, "security", void 0);
    return SqlInstancesPromoteReplicaRequest;
}(SpeakeasyBase));
export { SqlInstancesPromoteReplicaRequest };
var SqlInstancesPromoteReplicaResponse = /** @class */ (function (_super) {
    __extends(SqlInstancesPromoteReplicaResponse, _super);
    function SqlInstancesPromoteReplicaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlInstancesPromoteReplicaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SqlInstancesPromoteReplicaResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlInstancesPromoteReplicaResponse.prototype, "statusCode", void 0);
    return SqlInstancesPromoteReplicaResponse;
}(SpeakeasyBase));
export { SqlInstancesPromoteReplicaResponse };
