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
var GkehubProjectsLocationsFeaturesCreatePathParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFeaturesCreatePathParams, _super);
    function GkehubProjectsLocationsFeaturesCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesCreatePathParams.prototype, "parent", void 0);
    return GkehubProjectsLocationsFeaturesCreatePathParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFeaturesCreatePathParams };
var GkehubProjectsLocationsFeaturesCreateQueryParams = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFeaturesCreateQueryParams, _super);
    function GkehubProjectsLocationsFeaturesCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featureId" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesCreateQueryParams.prototype, "featureId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], GkehubProjectsLocationsFeaturesCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=requestId" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesCreateQueryParams.prototype, "requestId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesCreateQueryParams.prototype, "uploadProtocol", void 0);
    return GkehubProjectsLocationsFeaturesCreateQueryParams;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFeaturesCreateQueryParams };
var GkehubProjectsLocationsFeaturesCreateSecurity = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFeaturesCreateSecurity, _super);
    function GkehubProjectsLocationsFeaturesCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], GkehubProjectsLocationsFeaturesCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], GkehubProjectsLocationsFeaturesCreateSecurity.prototype, "oauth2c", void 0);
    return GkehubProjectsLocationsFeaturesCreateSecurity;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFeaturesCreateSecurity };
var GkehubProjectsLocationsFeaturesCreateRequest = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFeaturesCreateRequest, _super);
    function GkehubProjectsLocationsFeaturesCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsFeaturesCreatePathParams)
    ], GkehubProjectsLocationsFeaturesCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsFeaturesCreateQueryParams)
    ], GkehubProjectsLocationsFeaturesCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FeatureInput)
    ], GkehubProjectsLocationsFeaturesCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GkehubProjectsLocationsFeaturesCreateSecurity)
    ], GkehubProjectsLocationsFeaturesCreateRequest.prototype, "security", void 0);
    return GkehubProjectsLocationsFeaturesCreateRequest;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFeaturesCreateRequest };
var GkehubProjectsLocationsFeaturesCreateResponse = /** @class */ (function (_super) {
    __extends(GkehubProjectsLocationsFeaturesCreateResponse, _super);
    function GkehubProjectsLocationsFeaturesCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GkehubProjectsLocationsFeaturesCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], GkehubProjectsLocationsFeaturesCreateResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GkehubProjectsLocationsFeaturesCreateResponse.prototype, "statusCode", void 0);
    return GkehubProjectsLocationsFeaturesCreateResponse;
}(SpeakeasyBase));
export { GkehubProjectsLocationsFeaturesCreateResponse };
