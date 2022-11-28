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
var DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionPathParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionPathParams, _super);
    function DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=processor" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionPathParams.prototype, "processor", void 0);
    return DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionPathParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionPathParams };
var DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams, _super);
    function DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams.prototype, "uploadProtocol", void 0);
    return DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams };
var DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionSecurity = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionSecurity, _super);
    function DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionSecurity.prototype, "oauth2c", void 0);
    return DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionSecurity;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionSecurity };
var DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionRequest = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionRequest, _super);
    function DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionPathParams)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.GoogleCloudDocumentaiV1beta3SetDefaultProcessorVersionRequest)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionSecurity)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionRequest.prototype, "security", void 0);
    return DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionRequest;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionRequest };
var DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionResponse = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionResponse, _super);
    function DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionResponse.prototype, "statusCode", void 0);
    return DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionResponse;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionResponse };
