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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var PubsubProjectsSchemasValidateMessagePathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasValidateMessagePathParams, _super);
    function PubsubProjectsSchemasValidateMessagePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateMessagePathParams.prototype, "parent", void 0);
    return PubsubProjectsSchemasValidateMessagePathParams;
}(SpeakeasyBase));
export { PubsubProjectsSchemasValidateMessagePathParams };
var PubsubProjectsSchemasValidateMessageQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasValidateMessageQueryParams, _super);
    function PubsubProjectsSchemasValidateMessageQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateMessageQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateMessageQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateMessageQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateMessageQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateMessageQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateMessageQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateMessageQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsSchemasValidateMessageQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateMessageQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateMessageQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateMessageQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsSchemasValidateMessageQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsSchemasValidateMessageQueryParams };
var PubsubProjectsSchemasValidateMessageSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasValidateMessageSecurityOption1, _super);
    function PubsubProjectsSchemasValidateMessageSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSchemasValidateMessageSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSchemasValidateMessageSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsSchemasValidateMessageSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsSchemasValidateMessageSecurityOption1 };
var PubsubProjectsSchemasValidateMessageSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasValidateMessageSecurityOption2, _super);
    function PubsubProjectsSchemasValidateMessageSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSchemasValidateMessageSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSchemasValidateMessageSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsSchemasValidateMessageSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsSchemasValidateMessageSecurityOption2 };
var PubsubProjectsSchemasValidateMessageSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasValidateMessageSecurity, _super);
    function PubsubProjectsSchemasValidateMessageSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSchemasValidateMessageSecurityOption1)
    ], PubsubProjectsSchemasValidateMessageSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSchemasValidateMessageSecurityOption2)
    ], PubsubProjectsSchemasValidateMessageSecurity.prototype, "option2", void 0);
    return PubsubProjectsSchemasValidateMessageSecurity;
}(SpeakeasyBase));
export { PubsubProjectsSchemasValidateMessageSecurity };
var PubsubProjectsSchemasValidateMessageRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasValidateMessageRequest, _super);
    function PubsubProjectsSchemasValidateMessageRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsSchemasValidateMessagePathParams)
    ], PubsubProjectsSchemasValidateMessageRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsSchemasValidateMessageQueryParams)
    ], PubsubProjectsSchemasValidateMessageRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ValidateMessageRequest)
    ], PubsubProjectsSchemasValidateMessageRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsSchemasValidateMessageSecurity)
    ], PubsubProjectsSchemasValidateMessageRequest.prototype, "security", void 0);
    return PubsubProjectsSchemasValidateMessageRequest;
}(SpeakeasyBase));
export { PubsubProjectsSchemasValidateMessageRequest };
var PubsubProjectsSchemasValidateMessageResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasValidateMessageResponse, _super);
    function PubsubProjectsSchemasValidateMessageResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasValidateMessageResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsSchemasValidateMessageResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], PubsubProjectsSchemasValidateMessageResponse.prototype, "validateMessageResponse", void 0);
    return PubsubProjectsSchemasValidateMessageResponse;
}(SpeakeasyBase));
export { PubsubProjectsSchemasValidateMessageResponse };
