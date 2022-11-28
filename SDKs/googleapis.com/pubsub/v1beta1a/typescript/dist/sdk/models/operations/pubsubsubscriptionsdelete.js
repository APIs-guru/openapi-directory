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
var PubsubSubscriptionsDeletePathParams = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsDeletePathParams, _super);
    function PubsubSubscriptionsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subscription" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsDeletePathParams.prototype, "subscription", void 0);
    return PubsubSubscriptionsDeletePathParams;
}(SpeakeasyBase));
export { PubsubSubscriptionsDeletePathParams };
var PubsubSubscriptionsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsDeleteQueryParams, _super);
    function PubsubSubscriptionsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubSubscriptionsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubSubscriptionsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubSubscriptionsDeleteQueryParams;
}(SpeakeasyBase));
export { PubsubSubscriptionsDeleteQueryParams };
var PubsubSubscriptionsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsDeleteSecurityOption1, _super);
    function PubsubSubscriptionsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubSubscriptionsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubSubscriptionsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubSubscriptionsDeleteSecurityOption1;
}(SpeakeasyBase));
export { PubsubSubscriptionsDeleteSecurityOption1 };
var PubsubSubscriptionsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsDeleteSecurityOption2, _super);
    function PubsubSubscriptionsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubSubscriptionsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubSubscriptionsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubSubscriptionsDeleteSecurityOption2;
}(SpeakeasyBase));
export { PubsubSubscriptionsDeleteSecurityOption2 };
var PubsubSubscriptionsDeleteSecurity = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsDeleteSecurity, _super);
    function PubsubSubscriptionsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubSubscriptionsDeleteSecurityOption1)
    ], PubsubSubscriptionsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubSubscriptionsDeleteSecurityOption2)
    ], PubsubSubscriptionsDeleteSecurity.prototype, "option2", void 0);
    return PubsubSubscriptionsDeleteSecurity;
}(SpeakeasyBase));
export { PubsubSubscriptionsDeleteSecurity };
var PubsubSubscriptionsDeleteRequest = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsDeleteRequest, _super);
    function PubsubSubscriptionsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubSubscriptionsDeletePathParams)
    ], PubsubSubscriptionsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubSubscriptionsDeleteQueryParams)
    ], PubsubSubscriptionsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubSubscriptionsDeleteSecurity)
    ], PubsubSubscriptionsDeleteRequest.prototype, "security", void 0);
    return PubsubSubscriptionsDeleteRequest;
}(SpeakeasyBase));
export { PubsubSubscriptionsDeleteRequest };
var PubsubSubscriptionsDeleteResponse = /** @class */ (function (_super) {
    __extends(PubsubSubscriptionsDeleteResponse, _super);
    function PubsubSubscriptionsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubSubscriptionsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PubsubSubscriptionsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubSubscriptionsDeleteResponse.prototype, "statusCode", void 0);
    return PubsubSubscriptionsDeleteResponse;
}(SpeakeasyBase));
export { PubsubSubscriptionsDeleteResponse };
