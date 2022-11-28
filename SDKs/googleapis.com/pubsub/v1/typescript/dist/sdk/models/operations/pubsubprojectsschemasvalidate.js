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
var PubsubProjectsSchemasValidatePathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasValidatePathParams, _super);
    function PubsubProjectsSchemasValidatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidatePathParams.prototype, "parent", void 0);
    return PubsubProjectsSchemasValidatePathParams;
}(SpeakeasyBase));
export { PubsubProjectsSchemasValidatePathParams };
var PubsubProjectsSchemasValidateQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasValidateQueryParams, _super);
    function PubsubProjectsSchemasValidateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsSchemasValidateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsSchemasValidateQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsSchemasValidateQueryParams };
var PubsubProjectsSchemasValidateSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasValidateSecurityOption1, _super);
    function PubsubProjectsSchemasValidateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSchemasValidateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSchemasValidateSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsSchemasValidateSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsSchemasValidateSecurityOption1 };
var PubsubProjectsSchemasValidateSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasValidateSecurityOption2, _super);
    function PubsubProjectsSchemasValidateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSchemasValidateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSchemasValidateSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsSchemasValidateSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsSchemasValidateSecurityOption2 };
var PubsubProjectsSchemasValidateSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasValidateSecurity, _super);
    function PubsubProjectsSchemasValidateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSchemasValidateSecurityOption1)
    ], PubsubProjectsSchemasValidateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSchemasValidateSecurityOption2)
    ], PubsubProjectsSchemasValidateSecurity.prototype, "option2", void 0);
    return PubsubProjectsSchemasValidateSecurity;
}(SpeakeasyBase));
export { PubsubProjectsSchemasValidateSecurity };
var PubsubProjectsSchemasValidateRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasValidateRequest, _super);
    function PubsubProjectsSchemasValidateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSchemasValidatePathParams)
    ], PubsubProjectsSchemasValidateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSchemasValidateQueryParams)
    ], PubsubProjectsSchemasValidateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ValidateSchemaRequestInput)
    ], PubsubProjectsSchemasValidateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSchemasValidateSecurity)
    ], PubsubProjectsSchemasValidateRequest.prototype, "security", void 0);
    return PubsubProjectsSchemasValidateRequest;
}(SpeakeasyBase));
export { PubsubProjectsSchemasValidateRequest };
var PubsubProjectsSchemasValidateResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasValidateResponse, _super);
    function PubsubProjectsSchemasValidateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsSchemasValidateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], PubsubProjectsSchemasValidateResponse.prototype, "validateSchemaResponse", void 0);
    return PubsubProjectsSchemasValidateResponse;
}(SpeakeasyBase));
export { PubsubProjectsSchemasValidateResponse };
