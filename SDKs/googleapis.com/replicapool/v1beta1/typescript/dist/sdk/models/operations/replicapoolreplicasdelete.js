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
var ReplicapoolReplicasDeletePathParams = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasDeletePathParams, _super);
    function ReplicapoolReplicasDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasDeletePathParams.prototype, "poolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectName" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasDeletePathParams.prototype, "projectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=replicaName" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasDeletePathParams.prototype, "replicaName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasDeletePathParams.prototype, "zone", void 0);
    return ReplicapoolReplicasDeletePathParams;
}(SpeakeasyBase));
export { ReplicapoolReplicasDeletePathParams };
var ReplicapoolReplicasDeleteQueryParams = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasDeleteQueryParams, _super);
    function ReplicapoolReplicasDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ReplicapoolReplicasDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasDeleteQueryParams.prototype, "userIp", void 0);
    return ReplicapoolReplicasDeleteQueryParams;
}(SpeakeasyBase));
export { ReplicapoolReplicasDeleteQueryParams };
var ReplicapoolReplicasDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasDeleteSecurityOption1, _super);
    function ReplicapoolReplicasDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasDeleteSecurityOption1;
}(SpeakeasyBase));
export { ReplicapoolReplicasDeleteSecurityOption1 };
var ReplicapoolReplicasDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasDeleteSecurityOption2, _super);
    function ReplicapoolReplicasDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasDeleteSecurityOption2;
}(SpeakeasyBase));
export { ReplicapoolReplicasDeleteSecurityOption2 };
var ReplicapoolReplicasDeleteSecurityOption3 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasDeleteSecurityOption3, _super);
    function ReplicapoolReplicasDeleteSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasDeleteSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasDeleteSecurityOption3.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasDeleteSecurityOption3;
}(SpeakeasyBase));
export { ReplicapoolReplicasDeleteSecurityOption3 };
var ReplicapoolReplicasDeleteSecurity = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasDeleteSecurity, _super);
    function ReplicapoolReplicasDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasDeleteSecurityOption1)
    ], ReplicapoolReplicasDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasDeleteSecurityOption2)
    ], ReplicapoolReplicasDeleteSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasDeleteSecurityOption3)
    ], ReplicapoolReplicasDeleteSecurity.prototype, "option3", void 0);
    return ReplicapoolReplicasDeleteSecurity;
}(SpeakeasyBase));
export { ReplicapoolReplicasDeleteSecurity };
var ReplicapoolReplicasDeleteRequest = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasDeleteRequest, _super);
    function ReplicapoolReplicasDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolReplicasDeletePathParams)
    ], ReplicapoolReplicasDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolReplicasDeleteQueryParams)
    ], ReplicapoolReplicasDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ReplicasDeleteRequest)
    ], ReplicapoolReplicasDeleteRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolReplicasDeleteSecurity)
    ], ReplicapoolReplicasDeleteRequest.prototype, "security", void 0);
    return ReplicapoolReplicasDeleteRequest;
}(SpeakeasyBase));
export { ReplicapoolReplicasDeleteRequest };
var ReplicapoolReplicasDeleteResponse = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasDeleteResponse, _super);
    function ReplicapoolReplicasDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReplicapoolReplicasDeleteResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplicapoolReplicasDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReplicapoolReplicasDeleteResponse.prototype, "statusCode", void 0);
    return ReplicapoolReplicasDeleteResponse;
}(SpeakeasyBase));
export { ReplicapoolReplicasDeleteResponse };
