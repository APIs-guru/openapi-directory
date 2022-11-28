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
var RunNamespacesDomainmappingsCreatePathParams = /** @class */ (function (_super) {
    __extends(RunNamespacesDomainmappingsCreatePathParams, _super);
    function RunNamespacesDomainmappingsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsCreatePathParams.prototype, "parent", void 0);
    return RunNamespacesDomainmappingsCreatePathParams;
}(SpeakeasyBase));
export { RunNamespacesDomainmappingsCreatePathParams };
var RunNamespacesDomainmappingsCreateQueryParams = /** @class */ (function (_super) {
    __extends(RunNamespacesDomainmappingsCreateQueryParams, _super);
    function RunNamespacesDomainmappingsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dryRun" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsCreateQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RunNamespacesDomainmappingsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return RunNamespacesDomainmappingsCreateQueryParams;
}(SpeakeasyBase));
export { RunNamespacesDomainmappingsCreateQueryParams };
var RunNamespacesDomainmappingsCreateSecurity = /** @class */ (function (_super) {
    __extends(RunNamespacesDomainmappingsCreateSecurity, _super);
    function RunNamespacesDomainmappingsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RunNamespacesDomainmappingsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RunNamespacesDomainmappingsCreateSecurity.prototype, "oauth2c", void 0);
    return RunNamespacesDomainmappingsCreateSecurity;
}(SpeakeasyBase));
export { RunNamespacesDomainmappingsCreateSecurity };
var RunNamespacesDomainmappingsCreateRequest = /** @class */ (function (_super) {
    __extends(RunNamespacesDomainmappingsCreateRequest, _super);
    function RunNamespacesDomainmappingsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunNamespacesDomainmappingsCreatePathParams)
    ], RunNamespacesDomainmappingsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunNamespacesDomainmappingsCreateQueryParams)
    ], RunNamespacesDomainmappingsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.DomainMapping)
    ], RunNamespacesDomainmappingsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunNamespacesDomainmappingsCreateSecurity)
    ], RunNamespacesDomainmappingsCreateRequest.prototype, "security", void 0);
    return RunNamespacesDomainmappingsCreateRequest;
}(SpeakeasyBase));
export { RunNamespacesDomainmappingsCreateRequest };
var RunNamespacesDomainmappingsCreateResponse = /** @class */ (function (_super) {
    __extends(RunNamespacesDomainmappingsCreateResponse, _super);
    function RunNamespacesDomainmappingsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.DomainMapping)
    ], RunNamespacesDomainmappingsCreateResponse.prototype, "domainMapping", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RunNamespacesDomainmappingsCreateResponse.prototype, "statusCode", void 0);
    return RunNamespacesDomainmappingsCreateResponse;
}(SpeakeasyBase));
export { RunNamespacesDomainmappingsCreateResponse };
