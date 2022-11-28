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
var PubsubProjectsTopicsDeletePathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsDeletePathParams, _super);
    function PubsubProjectsTopicsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topic" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsDeletePathParams.prototype, "topic", void 0);
    return PubsubProjectsTopicsDeletePathParams;
}(SpeakeasyBase));
export { PubsubProjectsTopicsDeletePathParams };
var PubsubProjectsTopicsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsDeleteQueryParams, _super);
    function PubsubProjectsTopicsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsTopicsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsTopicsDeleteQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsTopicsDeleteQueryParams };
var PubsubProjectsTopicsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsDeleteSecurityOption1, _super);
    function PubsubProjectsTopicsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsTopicsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsTopicsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsTopicsDeleteSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsTopicsDeleteSecurityOption1 };
var PubsubProjectsTopicsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsDeleteSecurityOption2, _super);
    function PubsubProjectsTopicsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsTopicsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsTopicsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsTopicsDeleteSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsTopicsDeleteSecurityOption2 };
var PubsubProjectsTopicsDeleteSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsDeleteSecurity, _super);
    function PubsubProjectsTopicsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsTopicsDeleteSecurityOption1)
    ], PubsubProjectsTopicsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsTopicsDeleteSecurityOption2)
    ], PubsubProjectsTopicsDeleteSecurity.prototype, "option2", void 0);
    return PubsubProjectsTopicsDeleteSecurity;
}(SpeakeasyBase));
export { PubsubProjectsTopicsDeleteSecurity };
var PubsubProjectsTopicsDeleteRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsDeleteRequest, _super);
    function PubsubProjectsTopicsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsTopicsDeletePathParams)
    ], PubsubProjectsTopicsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsTopicsDeleteQueryParams)
    ], PubsubProjectsTopicsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsTopicsDeleteSecurity)
    ], PubsubProjectsTopicsDeleteRequest.prototype, "security", void 0);
    return PubsubProjectsTopicsDeleteRequest;
}(SpeakeasyBase));
export { PubsubProjectsTopicsDeleteRequest };
var PubsubProjectsTopicsDeleteResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsTopicsDeleteResponse, _super);
    function PubsubProjectsTopicsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubProjectsTopicsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PubsubProjectsTopicsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsTopicsDeleteResponse.prototype, "statusCode", void 0);
    return PubsubProjectsTopicsDeleteResponse;
}(SpeakeasyBase));
export { PubsubProjectsTopicsDeleteResponse };
