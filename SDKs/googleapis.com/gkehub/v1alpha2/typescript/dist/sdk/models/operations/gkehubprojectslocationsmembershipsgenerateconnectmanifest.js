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
var GkehubProjectsLocationsMembershipsGenerateConnectManifestPathParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsGenerateConnectManifestPathParams, _super);
    function GkehubProjectsLocationsMembershipsGenerateConnectManifestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestPathParams.prototype, "name", void 0);
    return GkehubProjectsLocationsMembershipsGenerateConnectManifestPathParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsGenerateConnectManifestPathParams };
var GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams, _super);
    function GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=imagePullSecretContent" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams.prototype, "imagePullSecretContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isUpgrade" }),
        __metadata("design:type", Boolean)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams.prototype, "isUpgrade", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=namespace" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams.prototype, "namespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=proxy" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams.prototype, "proxy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=registry" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams.prototype, "registry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=version" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams.prototype, "version", void 0);
    return GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams };
var GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity, _super);
    function GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity.prototype, "oauth2c", void 0);
    return GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity };
var GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest, _super);
    function GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsGenerateConnectManifestPathParams)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsGenerateConnectManifestQueryParams)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsGenerateConnectManifestSecurity)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest.prototype, "security", void 0);
    return GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest };
var GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse, _super);
    function GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GenerateConnectManifestResponse)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse.prototype, "generateConnectManifestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse.prototype, "statusCode", void 0);
    return GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse };
