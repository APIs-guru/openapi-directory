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
var ReplicapoolReplicasGetPathParams = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasGetPathParams, _super);
    function ReplicapoolReplicasGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasGetPathParams.prototype, "poolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectName" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasGetPathParams.prototype, "projectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=replicaName" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasGetPathParams.prototype, "replicaName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasGetPathParams.prototype, "zone", void 0);
    return ReplicapoolReplicasGetPathParams;
}(SpeakeasyBase));
export { ReplicapoolReplicasGetPathParams };
var ReplicapoolReplicasGetQueryParams = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasGetQueryParams, _super);
    function ReplicapoolReplicasGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ReplicapoolReplicasGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasGetQueryParams.prototype, "userIp", void 0);
    return ReplicapoolReplicasGetQueryParams;
}(SpeakeasyBase));
export { ReplicapoolReplicasGetQueryParams };
var ReplicapoolReplicasGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasGetSecurityOption1, _super);
    function ReplicapoolReplicasGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasGetSecurityOption1.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasGetSecurityOption1;
}(SpeakeasyBase));
export { ReplicapoolReplicasGetSecurityOption1 };
var ReplicapoolReplicasGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasGetSecurityOption2, _super);
    function ReplicapoolReplicasGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasGetSecurityOption2.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasGetSecurityOption2;
}(SpeakeasyBase));
export { ReplicapoolReplicasGetSecurityOption2 };
var ReplicapoolReplicasGetSecurityOption3 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasGetSecurityOption3, _super);
    function ReplicapoolReplicasGetSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasGetSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasGetSecurityOption3.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasGetSecurityOption3;
}(SpeakeasyBase));
export { ReplicapoolReplicasGetSecurityOption3 };
var ReplicapoolReplicasGetSecurityOption4 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasGetSecurityOption4, _super);
    function ReplicapoolReplicasGetSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasGetSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasGetSecurityOption4.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasGetSecurityOption4;
}(SpeakeasyBase));
export { ReplicapoolReplicasGetSecurityOption4 };
var ReplicapoolReplicasGetSecurityOption5 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasGetSecurityOption5, _super);
    function ReplicapoolReplicasGetSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasGetSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasGetSecurityOption5.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasGetSecurityOption5;
}(SpeakeasyBase));
export { ReplicapoolReplicasGetSecurityOption5 };
var ReplicapoolReplicasGetSecurityOption6 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasGetSecurityOption6, _super);
    function ReplicapoolReplicasGetSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasGetSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasGetSecurityOption6.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasGetSecurityOption6;
}(SpeakeasyBase));
export { ReplicapoolReplicasGetSecurityOption6 };
var ReplicapoolReplicasGetSecurity = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasGetSecurity, _super);
    function ReplicapoolReplicasGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasGetSecurityOption1)
    ], ReplicapoolReplicasGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasGetSecurityOption2)
    ], ReplicapoolReplicasGetSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasGetSecurityOption3)
    ], ReplicapoolReplicasGetSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasGetSecurityOption4)
    ], ReplicapoolReplicasGetSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasGetSecurityOption5)
    ], ReplicapoolReplicasGetSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasGetSecurityOption6)
    ], ReplicapoolReplicasGetSecurity.prototype, "option6", void 0);
    return ReplicapoolReplicasGetSecurity;
}(SpeakeasyBase));
export { ReplicapoolReplicasGetSecurity };
var ReplicapoolReplicasGetRequest = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasGetRequest, _super);
    function ReplicapoolReplicasGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolReplicasGetPathParams)
    ], ReplicapoolReplicasGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolReplicasGetQueryParams)
    ], ReplicapoolReplicasGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolReplicasGetSecurity)
    ], ReplicapoolReplicasGetRequest.prototype, "security", void 0);
    return ReplicapoolReplicasGetRequest;
}(SpeakeasyBase));
export { ReplicapoolReplicasGetRequest };
var ReplicapoolReplicasGetResponse = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasGetResponse, _super);
    function ReplicapoolReplicasGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReplicapoolReplicasGetResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplicapoolReplicasGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReplicapoolReplicasGetResponse.prototype, "statusCode", void 0);
    return ReplicapoolReplicasGetResponse;
}(SpeakeasyBase));
export { ReplicapoolReplicasGetResponse };
