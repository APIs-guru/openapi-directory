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
var PubsubProjectsSchemasGetPathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasGetPathParams, _super);
    function PubsubProjectsSchemasGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasGetPathParams.prototype, "name", void 0);
    return PubsubProjectsSchemasGetPathParams;
}(SpeakeasyBase));
export { PubsubProjectsSchemasGetPathParams };
export var PubsubProjectsSchemasGetViewEnum;
(function (PubsubProjectsSchemasGetViewEnum) {
    PubsubProjectsSchemasGetViewEnum["SchemaViewUnspecified"] = "SCHEMA_VIEW_UNSPECIFIED";
    PubsubProjectsSchemasGetViewEnum["Basic"] = "BASIC";
    PubsubProjectsSchemasGetViewEnum["Full"] = "FULL";
})(PubsubProjectsSchemasGetViewEnum || (PubsubProjectsSchemasGetViewEnum = {}));
var PubsubProjectsSchemasGetQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasGetQueryParams, _super);
    function PubsubProjectsSchemasGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsSchemasGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasGetQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" }),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasGetQueryParams.prototype, "view", void 0);
    return PubsubProjectsSchemasGetQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsSchemasGetQueryParams };
var PubsubProjectsSchemasGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasGetSecurityOption1, _super);
    function PubsubProjectsSchemasGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSchemasGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSchemasGetSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsSchemasGetSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsSchemasGetSecurityOption1 };
var PubsubProjectsSchemasGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasGetSecurityOption2, _super);
    function PubsubProjectsSchemasGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSchemasGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSchemasGetSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsSchemasGetSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsSchemasGetSecurityOption2 };
var PubsubProjectsSchemasGetSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasGetSecurity, _super);
    function PubsubProjectsSchemasGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSchemasGetSecurityOption1)
    ], PubsubProjectsSchemasGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSchemasGetSecurityOption2)
    ], PubsubProjectsSchemasGetSecurity.prototype, "option2", void 0);
    return PubsubProjectsSchemasGetSecurity;
}(SpeakeasyBase));
export { PubsubProjectsSchemasGetSecurity };
var PubsubProjectsSchemasGetRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasGetRequest, _super);
    function PubsubProjectsSchemasGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSchemasGetPathParams)
    ], PubsubProjectsSchemasGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSchemasGetQueryParams)
    ], PubsubProjectsSchemasGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubProjectsSchemasGetSecurity)
    ], PubsubProjectsSchemasGetRequest.prototype, "security", void 0);
    return PubsubProjectsSchemasGetRequest;
}(SpeakeasyBase));
export { PubsubProjectsSchemasGetRequest };
var PubsubProjectsSchemasGetResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsSchemasGetResponse, _super);
    function PubsubProjectsSchemasGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubProjectsSchemasGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Schema)
    ], PubsubProjectsSchemasGetResponse.prototype, "schema", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsSchemasGetResponse.prototype, "statusCode", void 0);
    return PubsubProjectsSchemasGetResponse;
}(SpeakeasyBase));
export { PubsubProjectsSchemasGetResponse };
