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
var DatapipelinesProjectsLocationsPipelinesDeletePathParams = /** @class */ (function (_super) {
    __extends(DatapipelinesProjectsLocationsPipelinesDeletePathParams, _super);
    function DatapipelinesProjectsLocationsPipelinesDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesDeletePathParams.prototype, "name", void 0);
    return DatapipelinesProjectsLocationsPipelinesDeletePathParams;
}(SpeakeasyBase));
export { DatapipelinesProjectsLocationsPipelinesDeletePathParams };
var DatapipelinesProjectsLocationsPipelinesDeleteQueryParams = /** @class */ (function (_super) {
    __extends(DatapipelinesProjectsLocationsPipelinesDeleteQueryParams, _super);
    function DatapipelinesProjectsLocationsPipelinesDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DatapipelinesProjectsLocationsPipelinesDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesDeleteQueryParams.prototype, "uploadProtocol", void 0);
    return DatapipelinesProjectsLocationsPipelinesDeleteQueryParams;
}(SpeakeasyBase));
export { DatapipelinesProjectsLocationsPipelinesDeleteQueryParams };
var DatapipelinesProjectsLocationsPipelinesDeleteSecurity = /** @class */ (function (_super) {
    __extends(DatapipelinesProjectsLocationsPipelinesDeleteSecurity, _super);
    function DatapipelinesProjectsLocationsPipelinesDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DatapipelinesProjectsLocationsPipelinesDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DatapipelinesProjectsLocationsPipelinesDeleteSecurity.prototype, "oauth2c", void 0);
    return DatapipelinesProjectsLocationsPipelinesDeleteSecurity;
}(SpeakeasyBase));
export { DatapipelinesProjectsLocationsPipelinesDeleteSecurity };
var DatapipelinesProjectsLocationsPipelinesDeleteRequest = /** @class */ (function (_super) {
    __extends(DatapipelinesProjectsLocationsPipelinesDeleteRequest, _super);
    function DatapipelinesProjectsLocationsPipelinesDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DatapipelinesProjectsLocationsPipelinesDeletePathParams)
    ], DatapipelinesProjectsLocationsPipelinesDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatapipelinesProjectsLocationsPipelinesDeleteQueryParams)
    ], DatapipelinesProjectsLocationsPipelinesDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DatapipelinesProjectsLocationsPipelinesDeleteSecurity)
    ], DatapipelinesProjectsLocationsPipelinesDeleteRequest.prototype, "security", void 0);
    return DatapipelinesProjectsLocationsPipelinesDeleteRequest;
}(SpeakeasyBase));
export { DatapipelinesProjectsLocationsPipelinesDeleteRequest };
var DatapipelinesProjectsLocationsPipelinesDeleteResponse = /** @class */ (function (_super) {
    __extends(DatapipelinesProjectsLocationsPipelinesDeleteResponse, _super);
    function DatapipelinesProjectsLocationsPipelinesDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DatapipelinesProjectsLocationsPipelinesDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], DatapipelinesProjectsLocationsPipelinesDeleteResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DatapipelinesProjectsLocationsPipelinesDeleteResponse.prototype, "statusCode", void 0);
    return DatapipelinesProjectsLocationsPipelinesDeleteResponse;
}(SpeakeasyBase));
export { DatapipelinesProjectsLocationsPipelinesDeleteResponse };
