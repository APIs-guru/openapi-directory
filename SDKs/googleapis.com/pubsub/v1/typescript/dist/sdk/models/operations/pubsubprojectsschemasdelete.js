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
var PubsubProjectsSchemasDeletePathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasDeletePathParams, _super);
    function PubsubProjectsSchemasDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasDeletePathParams.prototype, "name", void 0);
    return PubsubProjectsSchemasDeletePathParams;
}(SpeakeasyBase));
export { PubsubProjectsSchemasDeletePathParams };
var PubsubProjectsSchemasDeleteQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasDeleteQueryParams, _super);
    function PubsubProjectsSchemasDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsSchemasDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsSchemasDeleteQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsSchemasDeleteQueryParams };
var PubsubProjectsSchemasDeleteSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasDeleteSecurityOption1, _super);
    function PubsubProjectsSchemasDeleteSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSchemasDeleteSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSchemasDeleteSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsSchemasDeleteSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsSchemasDeleteSecurityOption1 };
var PubsubProjectsSchemasDeleteSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasDeleteSecurityOption2, _super);
    function PubsubProjectsSchemasDeleteSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSchemasDeleteSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSchemasDeleteSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsSchemasDeleteSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsSchemasDeleteSecurityOption2 };
var PubsubProjectsSchemasDeleteSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasDeleteSecurity, _super);
    function PubsubProjectsSchemasDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSchemasDeleteSecurityOption1)
    ], PubsubProjectsSchemasDeleteSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSchemasDeleteSecurityOption2)
    ], PubsubProjectsSchemasDeleteSecurity.prototype, "option2", void 0);
    return PubsubProjectsSchemasDeleteSecurity;
}(SpeakeasyBase));
export { PubsubProjectsSchemasDeleteSecurity };
var PubsubProjectsSchemasDeleteRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasDeleteRequest, _super);
    function PubsubProjectsSchemasDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSchemasDeletePathParams)
    ], PubsubProjectsSchemasDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSchemasDeleteQueryParams)
    ], PubsubProjectsSchemasDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSchemasDeleteSecurity)
    ], PubsubProjectsSchemasDeleteRequest.prototype, "security", void 0);
    return PubsubProjectsSchemasDeleteRequest;
}(SpeakeasyBase));
export { PubsubProjectsSchemasDeleteRequest };
var PubsubProjectsSchemasDeleteResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasDeleteResponse, _super);
    function PubsubProjectsSchemasDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PubsubProjectsSchemasDeleteResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsSchemasDeleteResponse.prototype, "statusCode", void 0);
    return PubsubProjectsSchemasDeleteResponse;
}(SpeakeasyBase));
export { PubsubProjectsSchemasDeleteResponse };
