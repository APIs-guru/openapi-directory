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
var PubsubProjectsSchemasCreatePathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasCreatePathParams, _super);
    function PubsubProjectsSchemasCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasCreatePathParams.prototype, "parent", void 0);
    return PubsubProjectsSchemasCreatePathParams;
}(SpeakeasyBase));
export { PubsubProjectsSchemasCreatePathParams };
var PubsubProjectsSchemasCreateQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasCreateQueryParams, _super);
    function PubsubProjectsSchemasCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsSchemasCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=schemaId" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasCreateQueryParams.prototype, "schemaId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasCreateQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsSchemasCreateQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsSchemasCreateQueryParams };
var PubsubProjectsSchemasCreateSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasCreateSecurityOption1, _super);
    function PubsubProjectsSchemasCreateSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSchemasCreateSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSchemasCreateSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsSchemasCreateSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsSchemasCreateSecurityOption1 };
var PubsubProjectsSchemasCreateSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasCreateSecurityOption2, _super);
    function PubsubProjectsSchemasCreateSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSchemasCreateSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSchemasCreateSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsSchemasCreateSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsSchemasCreateSecurityOption2 };
var PubsubProjectsSchemasCreateSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasCreateSecurity, _super);
    function PubsubProjectsSchemasCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSchemasCreateSecurityOption1)
    ], PubsubProjectsSchemasCreateSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSchemasCreateSecurityOption2)
    ], PubsubProjectsSchemasCreateSecurity.prototype, "option2", void 0);
    return PubsubProjectsSchemasCreateSecurity;
}(SpeakeasyBase));
export { PubsubProjectsSchemasCreateSecurity };
var PubsubProjectsSchemasCreateRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasCreateRequest, _super);
    function PubsubProjectsSchemasCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSchemasCreatePathParams)
    ], PubsubProjectsSchemasCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSchemasCreateQueryParams)
    ], PubsubProjectsSchemasCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SchemaInput)
    ], PubsubProjectsSchemasCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSchemasCreateSecurity)
    ], PubsubProjectsSchemasCreateRequest.prototype, "security", void 0);
    return PubsubProjectsSchemasCreateRequest;
}(SpeakeasyBase));
export { PubsubProjectsSchemasCreateRequest };
var PubsubProjectsSchemasCreateResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasCreateResponse, _super);
    function PubsubProjectsSchemasCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Schema)
    ], PubsubProjectsSchemasCreateResponse.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsSchemasCreateResponse.prototype, "statusCode", void 0);
    return PubsubProjectsSchemasCreateResponse;
}(SpeakeasyBase));
export { PubsubProjectsSchemasCreateResponse };
