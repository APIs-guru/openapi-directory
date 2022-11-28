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
var PubsubProjectsSubscriptionsDeletePathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsDeletePathParams, _super);
    function PubsubProjectsSubscriptionsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDeletePathParams.prototype, "subscription", void 0);
    return PubsubProjectsSubscriptionsDeletePathParams;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsDeletePathParams };
var PubsubProjectsSubscriptionsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsDeleteQueryParams, _super);
    function PubsubProjectsSubscriptionsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsSubscriptionsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsSubscriptionsDeleteQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsDeleteQueryParams };
var PubsubProjectsSubscriptionsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsDeleteSecurityOption1, _super);
    function PubsubProjectsSubscriptionsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSubscriptionsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSubscriptionsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsSubscriptionsDeleteSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsDeleteSecurityOption1 };
var PubsubProjectsSubscriptionsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsDeleteSecurityOption2, _super);
    function PubsubProjectsSubscriptionsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSubscriptionsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSubscriptionsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsSubscriptionsDeleteSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsDeleteSecurityOption2 };
var PubsubProjectsSubscriptionsDeleteSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsDeleteSecurity, _super);
    function PubsubProjectsSubscriptionsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSubscriptionsDeleteSecurityOption1)
    ], PubsubProjectsSubscriptionsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSubscriptionsDeleteSecurityOption2)
    ], PubsubProjectsSubscriptionsDeleteSecurity.prototype, "option2", void 0);
    return PubsubProjectsSubscriptionsDeleteSecurity;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsDeleteSecurity };
var PubsubProjectsSubscriptionsDeleteRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsDeleteRequest, _super);
    function PubsubProjectsSubscriptionsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsDeletePathParams)
    ], PubsubProjectsSubscriptionsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsDeleteQueryParams)
    ], PubsubProjectsSubscriptionsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsDeleteSecurity)
    ], PubsubProjectsSubscriptionsDeleteRequest.prototype, "security", void 0);
    return PubsubProjectsSubscriptionsDeleteRequest;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsDeleteRequest };
var PubsubProjectsSubscriptionsDeleteResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsDeleteResponse, _super);
    function PubsubProjectsSubscriptionsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PubsubProjectsSubscriptionsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsSubscriptionsDeleteResponse.prototype, "statusCode", void 0);
    return PubsubProjectsSubscriptionsDeleteResponse;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsDeleteResponse };
