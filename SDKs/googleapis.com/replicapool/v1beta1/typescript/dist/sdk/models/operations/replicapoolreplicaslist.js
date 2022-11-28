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
var ReplicapoolReplicasListPathParams = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasListPathParams, _super);
    function ReplicapoolReplicasListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasListPathParams.prototype, "poolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectName" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasListPathParams.prototype, "projectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasListPathParams.prototype, "zone", void 0);
    return ReplicapoolReplicasListPathParams;
}(SpeakeasyBase));
export { ReplicapoolReplicasListPathParams };
var ReplicapoolReplicasListQueryParams = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasListQueryParams, _super);
    function ReplicapoolReplicasListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" }),
        __metadata("design:type", Number)
    ], ReplicapoolReplicasListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasListQueryParams.prototype, "pageToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ReplicapoolReplicasListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], ReplicapoolReplicasListQueryParams.prototype, "userIp", void 0);
    return ReplicapoolReplicasListQueryParams;
}(SpeakeasyBase));
export { ReplicapoolReplicasListQueryParams };
var ReplicapoolReplicasListSecurityOption1 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasListSecurityOption1, _super);
    function ReplicapoolReplicasListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasListSecurityOption1.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasListSecurityOption1;
}(SpeakeasyBase));
export { ReplicapoolReplicasListSecurityOption1 };
var ReplicapoolReplicasListSecurityOption2 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasListSecurityOption2, _super);
    function ReplicapoolReplicasListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasListSecurityOption2.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasListSecurityOption2;
}(SpeakeasyBase));
export { ReplicapoolReplicasListSecurityOption2 };
var ReplicapoolReplicasListSecurityOption3 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasListSecurityOption3, _super);
    function ReplicapoolReplicasListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasListSecurityOption3.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasListSecurityOption3;
}(SpeakeasyBase));
export { ReplicapoolReplicasListSecurityOption3 };
var ReplicapoolReplicasListSecurityOption4 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasListSecurityOption4, _super);
    function ReplicapoolReplicasListSecurityOption4() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasListSecurityOption4.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasListSecurityOption4.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasListSecurityOption4;
}(SpeakeasyBase));
export { ReplicapoolReplicasListSecurityOption4 };
var ReplicapoolReplicasListSecurityOption5 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasListSecurityOption5, _super);
    function ReplicapoolReplicasListSecurityOption5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasListSecurityOption5.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasListSecurityOption5.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasListSecurityOption5;
}(SpeakeasyBase));
export { ReplicapoolReplicasListSecurityOption5 };
var ReplicapoolReplicasListSecurityOption6 = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasListSecurityOption6, _super);
    function ReplicapoolReplicasListSecurityOption6() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolReplicasListSecurityOption6.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolReplicasListSecurityOption6.prototype, "oauth2c", void 0);
    return ReplicapoolReplicasListSecurityOption6;
}(SpeakeasyBase));
export { ReplicapoolReplicasListSecurityOption6 };
var ReplicapoolReplicasListSecurity = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasListSecurity, _super);
    function ReplicapoolReplicasListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasListSecurityOption1)
    ], ReplicapoolReplicasListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasListSecurityOption2)
    ], ReplicapoolReplicasListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasListSecurityOption3)
    ], ReplicapoolReplicasListSecurity.prototype, "option3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasListSecurityOption4)
    ], ReplicapoolReplicasListSecurity.prototype, "option4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasListSecurityOption5)
    ], ReplicapoolReplicasListSecurity.prototype, "option5", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolReplicasListSecurityOption6)
    ], ReplicapoolReplicasListSecurity.prototype, "option6", void 0);
    return ReplicapoolReplicasListSecurity;
}(SpeakeasyBase));
export { ReplicapoolReplicasListSecurity };
var ReplicapoolReplicasListRequest = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasListRequest, _super);
    function ReplicapoolReplicasListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolReplicasListPathParams)
    ], ReplicapoolReplicasListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolReplicasListQueryParams)
    ], ReplicapoolReplicasListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolReplicasListSecurity)
    ], ReplicapoolReplicasListRequest.prototype, "security", void 0);
    return ReplicapoolReplicasListRequest;
}(SpeakeasyBase));
export { ReplicapoolReplicasListRequest };
var ReplicapoolReplicasListResponse = /** @class */ (function (_super) {
    __extends(ReplicapoolReplicasListResponse, _super);
    function ReplicapoolReplicasListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], ReplicapoolReplicasListResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplicapoolReplicasListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReplicapoolReplicasListResponse.prototype, "statusCode", void 0);
    return ReplicapoolReplicasListResponse;
}(SpeakeasyBase));
export { ReplicapoolReplicasListResponse };
