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
var GkehubProjectsLocationsMembershipsGenerateExclusivityManifestPathParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsGenerateExclusivityManifestPathParams, _super);
    function GkehubProjectsLocationsMembershipsGenerateExclusivityManifestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestPathParams.prototype, "name", void 0);
    return GkehubProjectsLocationsMembershipsGenerateExclusivityManifestPathParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsGenerateExclusivityManifestPathParams };
var GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams, _super);
    function GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=crManifest" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams.prototype, "crManifest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=crdManifest" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams.prototype, "crdManifest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams.prototype, "uploadProtocol", void 0);
    return GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams };
var GkehubProjectsLocationsMembershipsGenerateExclusivityManifestSecurity = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsGenerateExclusivityManifestSecurity, _super);
    function GkehubProjectsLocationsMembershipsGenerateExclusivityManifestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestSecurity.prototype, "oauth2c", void 0);
    return GkehubProjectsLocationsMembershipsGenerateExclusivityManifestSecurity;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsGenerateExclusivityManifestSecurity };
var GkehubProjectsLocationsMembershipsGenerateExclusivityManifestRequest = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsGenerateExclusivityManifestRequest, _super);
    function GkehubProjectsLocationsMembershipsGenerateExclusivityManifestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsGenerateExclusivityManifestPathParams)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsGenerateExclusivityManifestQueryParams)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsMembershipsGenerateExclusivityManifestSecurity)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestRequest.prototype, "security", void 0);
    return GkehubProjectsLocationsMembershipsGenerateExclusivityManifestRequest;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsGenerateExclusivityManifestRequest };
var GkehubProjectsLocationsMembershipsGenerateExclusivityManifestResponse = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsMembershipsGenerateExclusivityManifestResponse, _super);
    function GkehubProjectsLocationsMembershipsGenerateExclusivityManifestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GenerateExclusivityManifestResponse)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestResponse.prototype, "generateExclusivityManifestResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GkehubProjectsLocationsMembershipsGenerateExclusivityManifestResponse.prototype, "statusCode", void 0);
    return GkehubProjectsLocationsMembershipsGenerateExclusivityManifestResponse;
}(SpeakeasyBase));
export { GkehubProjectsLocationsMembershipsGenerateExclusivityManifestResponse };
