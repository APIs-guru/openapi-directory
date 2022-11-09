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
var VideointelligenceOperationsProjectsLocationsOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(VideointelligenceOperationsProjectsLocationsOperationsCancelPathParams, _super);
    function VideointelligenceOperationsProjectsLocationsOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelPathParams.prototype, "name", void 0);
    return VideointelligenceOperationsProjectsLocationsOperationsCancelPathParams;
}(SpeakeasyBase));
export { VideointelligenceOperationsProjectsLocationsOperationsCancelPathParams };
var VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams, _super);
    function VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams;
}(SpeakeasyBase));
export { VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams };
var VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity, _super);
    function VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity.prototype, "oauth2c", void 0);
    return VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity;
}(SpeakeasyBase));
export { VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity };
var VideointelligenceOperationsProjectsLocationsOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(VideointelligenceOperationsProjectsLocationsOperationsCancelRequest, _super);
    function VideointelligenceOperationsProjectsLocationsOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", VideointelligenceOperationsProjectsLocationsOperationsCancelPathParams)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VideointelligenceOperationsProjectsLocationsOperationsCancelQueryParams)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", VideointelligenceOperationsProjectsLocationsOperationsCancelSecurity)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelRequest.prototype, "security", void 0);
    return VideointelligenceOperationsProjectsLocationsOperationsCancelRequest;
}(SpeakeasyBase));
export { VideointelligenceOperationsProjectsLocationsOperationsCancelRequest };
var VideointelligenceOperationsProjectsLocationsOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(VideointelligenceOperationsProjectsLocationsOperationsCancelResponse, _super);
    function VideointelligenceOperationsProjectsLocationsOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], VideointelligenceOperationsProjectsLocationsOperationsCancelResponse.prototype, "statusCode", void 0);
    return VideointelligenceOperationsProjectsLocationsOperationsCancelResponse;
}(SpeakeasyBase));
export { VideointelligenceOperationsProjectsLocationsOperationsCancelResponse };
