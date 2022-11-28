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
var PubsubTopicsDeletePathParams = /** @class */ (function (_super) {
    __extends(PubsubTopicsDeletePathParams, _super);
    function PubsubTopicsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=topic" }),
        __metadata("design:type", String)
    ], PubsubTopicsDeletePathParams.prototype, "topic", void 0);
    return PubsubTopicsDeletePathParams;
}(SpeakeasyBase));
export { PubsubTopicsDeletePathParams };
var PubsubTopicsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(PubsubTopicsDeleteQueryParams, _super);
    function PubsubTopicsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubTopicsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubTopicsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubTopicsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubTopicsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubTopicsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubTopicsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubTopicsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubTopicsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubTopicsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubTopicsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubTopicsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubTopicsDeleteQueryParams;
}(SpeakeasyBase));
export { PubsubTopicsDeleteQueryParams };
var PubsubTopicsDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubTopicsDeleteSecurityOption1, _super);
    function PubsubTopicsDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubTopicsDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubTopicsDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubTopicsDeleteSecurityOption1;
}(SpeakeasyBase));
export { PubsubTopicsDeleteSecurityOption1 };
var PubsubTopicsDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubTopicsDeleteSecurityOption2, _super);
    function PubsubTopicsDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubTopicsDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubTopicsDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubTopicsDeleteSecurityOption2;
}(SpeakeasyBase));
export { PubsubTopicsDeleteSecurityOption2 };
var PubsubTopicsDeleteSecurity = /** @class */ (function (_super) {
    __extends(PubsubTopicsDeleteSecurity, _super);
    function PubsubTopicsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubTopicsDeleteSecurityOption1)
    ], PubsubTopicsDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubTopicsDeleteSecurityOption2)
    ], PubsubTopicsDeleteSecurity.prototype, "option2", void 0);
    return PubsubTopicsDeleteSecurity;
}(SpeakeasyBase));
export { PubsubTopicsDeleteSecurity };
var PubsubTopicsDeleteRequest = /** @class */ (function (_super) {
    __extends(PubsubTopicsDeleteRequest, _super);
    function PubsubTopicsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubTopicsDeletePathParams)
    ], PubsubTopicsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubTopicsDeleteQueryParams)
    ], PubsubTopicsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubTopicsDeleteSecurity)
    ], PubsubTopicsDeleteRequest.prototype, "security", void 0);
    return PubsubTopicsDeleteRequest;
}(SpeakeasyBase));
export { PubsubTopicsDeleteRequest };
var PubsubTopicsDeleteResponse = /** @class */ (function (_super) {
    __extends(PubsubTopicsDeleteResponse, _super);
    function PubsubTopicsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubTopicsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PubsubTopicsDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubTopicsDeleteResponse.prototype, "statusCode", void 0);
    return PubsubTopicsDeleteResponse;
}(SpeakeasyBase));
export { PubsubTopicsDeleteResponse };
