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
var RunNamespacesDomainmappingsListPathParams = /** @class */ (function (_super) {
    __extends(RunNamespacesDomainmappingsListPathParams, _super);
    function RunNamespacesDomainmappingsListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsListPathParams.prototype, "parent", void 0);
    return RunNamespacesDomainmappingsListPathParams;
}(SpeakeasyBase));
export { RunNamespacesDomainmappingsListPathParams };
var RunNamespacesDomainmappingsListQueryParams = /** @class */ (function (_super) {
    __extends(RunNamespacesDomainmappingsListQueryParams, _super);
    function RunNamespacesDomainmappingsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=continue" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "continue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fieldSelector" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "fieldSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeUninitialized" }),
        __metadata("design:type", Boolean)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "includeUninitialized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=labelSelector" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "labelSelector", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resourceVersion" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "resourceVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=watch" }),
        __metadata("design:type", Boolean)
    ], RunNamespacesDomainmappingsListQueryParams.prototype, "watch", void 0);
    return RunNamespacesDomainmappingsListQueryParams;
}(SpeakeasyBase));
export { RunNamespacesDomainmappingsListQueryParams };
var RunNamespacesDomainmappingsListSecurity = /** @class */ (function (_super) {
    __extends(RunNamespacesDomainmappingsListSecurity, _super);
    function RunNamespacesDomainmappingsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RunNamespacesDomainmappingsListSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RunNamespacesDomainmappingsListSecurity.prototype, "oauth2c", void 0);
    return RunNamespacesDomainmappingsListSecurity;
}(SpeakeasyBase));
export { RunNamespacesDomainmappingsListSecurity };
var RunNamespacesDomainmappingsListRequest = /** @class */ (function (_super) {
    __extends(RunNamespacesDomainmappingsListRequest, _super);
    function RunNamespacesDomainmappingsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunNamespacesDomainmappingsListPathParams)
    ], RunNamespacesDomainmappingsListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunNamespacesDomainmappingsListQueryParams)
    ], RunNamespacesDomainmappingsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RunNamespacesDomainmappingsListSecurity)
    ], RunNamespacesDomainmappingsListRequest.prototype, "security", void 0);
    return RunNamespacesDomainmappingsListRequest;
}(SpeakeasyBase));
export { RunNamespacesDomainmappingsListRequest };
var RunNamespacesDomainmappingsListResponse = /** @class */ (function (_super) {
    __extends(RunNamespacesDomainmappingsListResponse, _super);
    function RunNamespacesDomainmappingsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RunNamespacesDomainmappingsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ListDomainMappingsResponse)
    ], RunNamespacesDomainmappingsListResponse.prototype, "listDomainMappingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RunNamespacesDomainmappingsListResponse.prototype, "statusCode", void 0);
    return RunNamespacesDomainmappingsListResponse;
}(SpeakeasyBase));
export { RunNamespacesDomainmappingsListResponse };
