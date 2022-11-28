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
var SqlInstancesStopReplicaPathParams = /** @class */ (function (_super) {
    __extends(SqlInstancesStopReplicaPathParams, _super);
    function SqlInstancesStopReplicaPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=instance" }),
        __metadata("design:type", String)
    ], SqlInstancesStopReplicaPathParams.prototype, "instance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" }),
        __metadata("design:type", String)
    ], SqlInstancesStopReplicaPathParams.prototype, "project", void 0);
    return SqlInstancesStopReplicaPathParams;
}(SpeakeasyBase));
export { SqlInstancesStopReplicaPathParams };
var SqlInstancesStopReplicaQueryParams = /** @class */ (function (_super) {
    __extends(SqlInstancesStopReplicaQueryParams, _super);
    function SqlInstancesStopReplicaQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], SqlInstancesStopReplicaQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], SqlInstancesStopReplicaQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], SqlInstancesStopReplicaQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], SqlInstancesStopReplicaQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], SqlInstancesStopReplicaQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], SqlInstancesStopReplicaQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], SqlInstancesStopReplicaQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], SqlInstancesStopReplicaQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], SqlInstancesStopReplicaQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], SqlInstancesStopReplicaQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], SqlInstancesStopReplicaQueryParams.prototype, "uploadProtocol", void 0);
    return SqlInstancesStopReplicaQueryParams;
}(SpeakeasyBase));
export { SqlInstancesStopReplicaQueryParams };
var SqlInstancesStopReplicaSecurityOption1 = /** @class */ (function (_super) {
    __extends(SqlInstancesStopReplicaSecurityOption1, _super);
    function SqlInstancesStopReplicaSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesStopReplicaSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesStopReplicaSecurityOption1.prototype, "oauth2c", void 0);
    return SqlInstancesStopReplicaSecurityOption1;
}(SpeakeasyBase));
export { SqlInstancesStopReplicaSecurityOption1 };
var SqlInstancesStopReplicaSecurityOption2 = /** @class */ (function (_super) {
    __extends(SqlInstancesStopReplicaSecurityOption2, _super);
    function SqlInstancesStopReplicaSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], SqlInstancesStopReplicaSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], SqlInstancesStopReplicaSecurityOption2.prototype, "oauth2c", void 0);
    return SqlInstancesStopReplicaSecurityOption2;
}(SpeakeasyBase));
export { SqlInstancesStopReplicaSecurityOption2 };
var SqlInstancesStopReplicaSecurity = /** @class */ (function (_super) {
    __extends(SqlInstancesStopReplicaSecurity, _super);
    function SqlInstancesStopReplicaSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesStopReplicaSecurityOption1)
    ], SqlInstancesStopReplicaSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", SqlInstancesStopReplicaSecurityOption2)
    ], SqlInstancesStopReplicaSecurity.prototype, "option2", void 0);
    return SqlInstancesStopReplicaSecurity;
}(SpeakeasyBase));
export { SqlInstancesStopReplicaSecurity };
var SqlInstancesStopReplicaRequest = /** @class */ (function (_super) {
    __extends(SqlInstancesStopReplicaRequest, _super);
    function SqlInstancesStopReplicaRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesStopReplicaPathParams)
    ], SqlInstancesStopReplicaRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesStopReplicaQueryParams)
    ], SqlInstancesStopReplicaRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", SqlInstancesStopReplicaSecurity)
    ], SqlInstancesStopReplicaRequest.prototype, "security", void 0);
    return SqlInstancesStopReplicaRequest;
}(SpeakeasyBase));
export { SqlInstancesStopReplicaRequest };
var SqlInstancesStopReplicaResponse = /** @class */ (function (_super) {
    __extends(SqlInstancesStopReplicaResponse, _super);
    function SqlInstancesStopReplicaResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SqlInstancesStopReplicaResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], SqlInstancesStopReplicaResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SqlInstancesStopReplicaResponse.prototype, "statusCode", void 0);
    return SqlInstancesStopReplicaResponse;
}(SpeakeasyBase));
export { SqlInstancesStopReplicaResponse };
