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
var FactchecktoolsPagesDeletePathParams = /** @class */ (function (_super) {
    __extends(FactchecktoolsPagesDeletePathParams, _super);
    function FactchecktoolsPagesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesDeletePathParams.prototype, "name", void 0);
    return FactchecktoolsPagesDeletePathParams;
}(SpeakeasyBase));
export { FactchecktoolsPagesDeletePathParams };
var FactchecktoolsPagesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(FactchecktoolsPagesDeleteQueryParams, _super);
    function FactchecktoolsPagesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], FactchecktoolsPagesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], FactchecktoolsPagesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return FactchecktoolsPagesDeleteQueryParams;
}(SpeakeasyBase));
export { FactchecktoolsPagesDeleteQueryParams };
var FactchecktoolsPagesDeleteSecurity = /** @class */ (function (_super) {
    __extends(FactchecktoolsPagesDeleteSecurity, _super);
    function FactchecktoolsPagesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], FactchecktoolsPagesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], FactchecktoolsPagesDeleteSecurity.prototype, "oauth2c", void 0);
    return FactchecktoolsPagesDeleteSecurity;
}(SpeakeasyBase));
export { FactchecktoolsPagesDeleteSecurity };
var FactchecktoolsPagesDeleteRequest = /** @class */ (function (_super) {
    __extends(FactchecktoolsPagesDeleteRequest, _super);
    function FactchecktoolsPagesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", FactchecktoolsPagesDeletePathParams)
    ], FactchecktoolsPagesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FactchecktoolsPagesDeleteQueryParams)
    ], FactchecktoolsPagesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", FactchecktoolsPagesDeleteSecurity)
    ], FactchecktoolsPagesDeleteRequest.prototype, "security", void 0);
    return FactchecktoolsPagesDeleteRequest;
}(SpeakeasyBase));
export { FactchecktoolsPagesDeleteRequest };
var FactchecktoolsPagesDeleteResponse = /** @class */ (function (_super) {
    __extends(FactchecktoolsPagesDeleteResponse, _super);
    function FactchecktoolsPagesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], FactchecktoolsPagesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], FactchecktoolsPagesDeleteResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], FactchecktoolsPagesDeleteResponse.prototype, "statusCode", void 0);
    return FactchecktoolsPagesDeleteResponse;
}(SpeakeasyBase));
export { FactchecktoolsPagesDeleteResponse };
