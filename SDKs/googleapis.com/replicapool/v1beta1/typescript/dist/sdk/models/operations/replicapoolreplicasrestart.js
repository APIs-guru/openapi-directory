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
var ReplicapoolReplicasRestartPathParams = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasRestartPathParams, _super);
    function ReplicapoolReplicasRestartPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartPathParams.prototype, "poolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectName" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartPathParams.prototype, "projectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=replicaName" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartPathParams.prototype, "replicaName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartPathParams.prototype, "zone", void 0);
    return ReplicapoolReplicasRestartPathParams;
}(SpeakeasyBase));
export { ReplicapoolReplicasRestartPathParams };
var ReplicapoolReplicasRestartQueryParams = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasRestartQueryParams, _super);
    function ReplicapoolReplicasRestartQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ReplicapoolReplicasRestartQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartQueryParams.prototype, "userIp", void 0);
    return ReplicapoolReplicasRestartQueryParams;
}(SpeakeasyBase));
export { ReplicapoolReplicasRestartQueryParams };
var ReplicapoolReplicasRestartSecurityOption1 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasRestartSecurityOption1, _super);
    function ReplicapoolReplicasRestartSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasRestartSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasRestartSecurityOption1.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasRestartSecurityOption1;
}(SpeakeasyBase));
export { ReplicapoolReplicasRestartSecurityOption1 };
var ReplicapoolReplicasRestartSecurityOption2 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasRestartSecurityOption2, _super);
    function ReplicapoolReplicasRestartSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasRestartSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasRestartSecurityOption2.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasRestartSecurityOption2;
}(SpeakeasyBase));
export { ReplicapoolReplicasRestartSecurityOption2 };
var ReplicapoolReplicasRestartSecurityOption3 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasRestartSecurityOption3, _super);
    function ReplicapoolReplicasRestartSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasRestartSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasRestartSecurityOption3.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasRestartSecurityOption3;
}(SpeakeasyBase));
export { ReplicapoolReplicasRestartSecurityOption3 };
var ReplicapoolReplicasRestartSecurity = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasRestartSecurity, _super);
    function ReplicapoolReplicasRestartSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasRestartSecurityOption1)
    ], ReplicapoolReplicasRestartSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasRestartSecurityOption2)
    ], ReplicapoolReplicasRestartSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasRestartSecurityOption3)
    ], ReplicapoolReplicasRestartSecurity.prototype, "option3", void 0);
    return ReplicapoolReplicasRestartSecurity;
}(SpeakeasyBase));
export { ReplicapoolReplicasRestartSecurity };
var ReplicapoolReplicasRestartRequest = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasRestartRequest, _super);
    function ReplicapoolReplicasRestartRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolReplicasRestartPathParams)
    ], ReplicapoolReplicasRestartRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolReplicasRestartQueryParams)
    ], ReplicapoolReplicasRestartRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolReplicasRestartSecurity)
    ], ReplicapoolReplicasRestartRequest.prototype, "security", void 0);
    return ReplicapoolReplicasRestartRequest;
}(SpeakeasyBase));
export { ReplicapoolReplicasRestartRequest };
var ReplicapoolReplicasRestartResponse = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasRestartResponse, _super);
    function ReplicapoolReplicasRestartResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReplicapoolReplicasRestartResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplicapoolReplicasRestartResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReplicapoolReplicasRestartResponse.prototype, "statusCode", void 0);
    return ReplicapoolReplicasRestartResponse;
}(SpeakeasyBase));
export { ReplicapoolReplicasRestartResponse };
