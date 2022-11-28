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
var ReplicapoolPoolsUpdatetemplatePathParams = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsUpdatetemplatePathParams, _super);
    function ReplicapoolPoolsUpdatetemplatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolName" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsUpdatetemplatePathParams.prototype, "poolName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectName" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsUpdatetemplatePathParams.prototype, "projectName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zone" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsUpdatetemplatePathParams.prototype, "zone", void 0);
    return ReplicapoolPoolsUpdatetemplatePathParams;
}(SpeakeasyBase));
export { ReplicapoolPoolsUpdatetemplatePathParams };
var ReplicapoolPoolsUpdatetemplateQueryParams = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsUpdatetemplateQueryParams, _super);
    function ReplicapoolPoolsUpdatetemplateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsUpdatetemplateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsUpdatetemplateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsUpdatetemplateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsUpdatetemplateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ReplicapoolPoolsUpdatetemplateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsUpdatetemplateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], ReplicapoolPoolsUpdatetemplateQueryParams.prototype, "userIp", void 0);
    return ReplicapoolPoolsUpdatetemplateQueryParams;
}(SpeakeasyBase));
export { ReplicapoolPoolsUpdatetemplateQueryParams };
var ReplicapoolPoolsUpdatetemplateSecurityOption1 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsUpdatetemplateSecurityOption1, _super);
    function ReplicapoolPoolsUpdatetemplateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsUpdatetemplateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsUpdatetemplateSecurityOption1.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsUpdatetemplateSecurityOption1;
}(SpeakeasyBase));
export { ReplicapoolPoolsUpdatetemplateSecurityOption1 };
var ReplicapoolPoolsUpdatetemplateSecurityOption2 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsUpdatetemplateSecurityOption2, _super);
    function ReplicapoolPoolsUpdatetemplateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsUpdatetemplateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsUpdatetemplateSecurityOption2.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsUpdatetemplateSecurityOption2;
}(SpeakeasyBase));
export { ReplicapoolPoolsUpdatetemplateSecurityOption2 };
var ReplicapoolPoolsUpdatetemplateSecurityOption3 = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsUpdatetemplateSecurityOption3, _super);
    function ReplicapoolPoolsUpdatetemplateSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ReplicapoolPoolsUpdatetemplateSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ReplicapoolPoolsUpdatetemplateSecurityOption3.prototype, "oauth2c", void 0);
    return ReplicapoolPoolsUpdatetemplateSecurityOption3;
}(SpeakeasyBase));
export { ReplicapoolPoolsUpdatetemplateSecurityOption3 };
var ReplicapoolPoolsUpdatetemplateSecurity = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsUpdatetemplateSecurity, _super);
    function ReplicapoolPoolsUpdatetemplateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsUpdatetemplateSecurityOption1)
    ], ReplicapoolPoolsUpdatetemplateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsUpdatetemplateSecurityOption2)
    ], ReplicapoolPoolsUpdatetemplateSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ReplicapoolPoolsUpdatetemplateSecurityOption3)
    ], ReplicapoolPoolsUpdatetemplateSecurity.prototype, "option3", void 0);
    return ReplicapoolPoolsUpdatetemplateSecurity;
}(SpeakeasyBase));
export { ReplicapoolPoolsUpdatetemplateSecurity };
var ReplicapoolPoolsUpdatetemplateRequest = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsUpdatetemplateRequest, _super);
    function ReplicapoolPoolsUpdatetemplateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolPoolsUpdatetemplatePathParams)
    ], ReplicapoolPoolsUpdatetemplateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolPoolsUpdatetemplateQueryParams)
    ], ReplicapoolPoolsUpdatetemplateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Template)
    ], ReplicapoolPoolsUpdatetemplateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplicapoolPoolsUpdatetemplateSecurity)
    ], ReplicapoolPoolsUpdatetemplateRequest.prototype, "security", void 0);
    return ReplicapoolPoolsUpdatetemplateRequest;
}(SpeakeasyBase));
export { ReplicapoolPoolsUpdatetemplateRequest };
var ReplicapoolPoolsUpdatetemplateResponse = /** @class */ (function (_super) {
    __extends(ReplicapoolPoolsUpdatetemplateResponse, _super);
    function ReplicapoolPoolsUpdatetemplateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplicapoolPoolsUpdatetemplateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReplicapoolPoolsUpdatetemplateResponse.prototype, "statusCode", void 0);
    return ReplicapoolPoolsUpdatetemplateResponse;
}(SpeakeasyBase));
export { ReplicapoolPoolsUpdatetemplateResponse };
