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
var VideointelligenceOperationsProjectsLocationsOperationsDeletePathParams = /** @class */ (function (_super) {
    __extends(VideointelligenceOperationsProjectsLocationsOperationsDeletePathParams, _super);
    function VideointelligenceOperationsProjectsLocationsOperationsDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeletePathParams.prototype, "name", void 0);
    return VideointelligenceOperationsProjectsLocationsOperationsDeletePathParams;
}(SpeakeasyBase));
export { VideointelligenceOperationsProjectsLocationsOperationsDeletePathParams };
var VideointelligenceOperationsProjectsLocationsOperationsDeleteQueryParams = /** @class */ (function (_super) {
    __extends(VideointelligenceOperationsProjectsLocationsOperationsDeleteQueryParams, _super);
    function VideointelligenceOperationsProjectsLocationsOperationsDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return VideointelligenceOperationsProjectsLocationsOperationsDeleteQueryParams;
}(SpeakeasyBase));
export { VideointelligenceOperationsProjectsLocationsOperationsDeleteQueryParams };
var VideointelligenceOperationsProjectsLocationsOperationsDeleteSecurity = /** @class */ (function (_super) {
    __extends(VideointelligenceOperationsProjectsLocationsOperationsDeleteSecurity, _super);
    function VideointelligenceOperationsProjectsLocationsOperationsDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteSecurity.prototype, "oauth2c", void 0);
    return VideointelligenceOperationsProjectsLocationsOperationsDeleteSecurity;
}(SpeakeasyBase));
export { VideointelligenceOperationsProjectsLocationsOperationsDeleteSecurity };
var VideointelligenceOperationsProjectsLocationsOperationsDeleteRequest = /** @class */ (function (_super) {
    __extends(VideointelligenceOperationsProjectsLocationsOperationsDeleteRequest, _super);
    function VideointelligenceOperationsProjectsLocationsOperationsDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VideointelligenceOperationsProjectsLocationsOperationsDeletePathParams)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VideointelligenceOperationsProjectsLocationsOperationsDeleteQueryParams)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", VideointelligenceOperationsProjectsLocationsOperationsDeleteSecurity)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteRequest.prototype, "security", void 0);
    return VideointelligenceOperationsProjectsLocationsOperationsDeleteRequest;
}(SpeakeasyBase));
export { VideointelligenceOperationsProjectsLocationsOperationsDeleteRequest };
var VideointelligenceOperationsProjectsLocationsOperationsDeleteResponse = /** @class */ (function (_super) {
    __extends(VideointelligenceOperationsProjectsLocationsOperationsDeleteResponse, _super);
    function VideointelligenceOperationsProjectsLocationsOperationsDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], VideointelligenceOperationsProjectsLocationsOperationsDeleteResponse.prototype, "statusCode", void 0);
    return VideointelligenceOperationsProjectsLocationsOperationsDeleteResponse;
}(SpeakeasyBase));
export { VideointelligenceOperationsProjectsLocationsOperationsDeleteResponse };
