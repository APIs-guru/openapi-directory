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
var RunNamespacesDomainmappingsDeletePathParams = /** @class */ (function (_super) {
    __extends(RunNamespacesDomainmappingsDeletePathParams, _super);
    function RunNamespacesDomainmappingsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsDeletePathParams.prototype, "name", void 0);
    return RunNamespacesDomainmappingsDeletePathParams;
}(SpeakeasyBase));
export { RunNamespacesDomainmappingsDeletePathParams };
var RunNamespacesDomainmappingsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(RunNamespacesDomainmappingsDeleteQueryParams, _super);
    function RunNamespacesDomainmappingsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=apiVersion" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsDeleteQueryParams.prototype, "apiVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dryRun" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsDeleteQueryParams.prototype, "dryRun", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=kind" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsDeleteQueryParams.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RunNamespacesDomainmappingsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=propagationPolicy" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsDeleteQueryParams.prototype, "propagationPolicy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return RunNamespacesDomainmappingsDeleteQueryParams;
}(SpeakeasyBase));
export { RunNamespacesDomainmappingsDeleteQueryParams };
var RunNamespacesDomainmappingsDeleteSecurity = /** @class */ (function (_super) {
    __extends(RunNamespacesDomainmappingsDeleteSecurity, _super);
    function RunNamespacesDomainmappingsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RunNamespacesDomainmappingsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RunNamespacesDomainmappingsDeleteSecurity.prototype, "oauth2c", void 0);
    return RunNamespacesDomainmappingsDeleteSecurity;
}(SpeakeasyBase));
export { RunNamespacesDomainmappingsDeleteSecurity };
var RunNamespacesDomainmappingsDeleteRequest = /** @class */ (function (_super) {
    __extends(RunNamespacesDomainmappingsDeleteRequest, _super);
    function RunNamespacesDomainmappingsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunNamespacesDomainmappingsDeletePathParams)
    ], RunNamespacesDomainmappingsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunNamespacesDomainmappingsDeleteQueryParams)
    ], RunNamespacesDomainmappingsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunNamespacesDomainmappingsDeleteSecurity)
    ], RunNamespacesDomainmappingsDeleteRequest.prototype, "security", void 0);
    return RunNamespacesDomainmappingsDeleteRequest;
}(SpeakeasyBase));
export { RunNamespacesDomainmappingsDeleteRequest };
var RunNamespacesDomainmappingsDeleteResponse = /** @class */ (function (_super) {
    __extends(RunNamespacesDomainmappingsDeleteResponse, _super);
    function RunNamespacesDomainmappingsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Status)
    ], RunNamespacesDomainmappingsDeleteResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RunNamespacesDomainmappingsDeleteResponse.prototype, "statusCode", void 0);
    return RunNamespacesDomainmappingsDeleteResponse;
}(SpeakeasyBase));
export { RunNamespacesDomainmappingsDeleteResponse };
