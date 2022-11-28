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
var DocumentaiProjectsLocationsOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsOperationsCancelPathParams, _super);
    function DocumentaiProjectsLocationsOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsOperationsCancelPathParams.prototype, "name", void 0);
    return DocumentaiProjectsLocationsOperationsCancelPathParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsOperationsCancelPathParams };
var DocumentaiProjectsLocationsOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsOperationsCancelQueryParams, _super);
    function DocumentaiProjectsLocationsOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DocumentaiProjectsLocationsOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return DocumentaiProjectsLocationsOperationsCancelQueryParams;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsOperationsCancelQueryParams };
var DocumentaiProjectsLocationsOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsOperationsCancelSecurity, _super);
    function DocumentaiProjectsLocationsOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DocumentaiProjectsLocationsOperationsCancelSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DocumentaiProjectsLocationsOperationsCancelSecurity.prototype, "oauth2c", void 0);
    return DocumentaiProjectsLocationsOperationsCancelSecurity;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsOperationsCancelSecurity };
var DocumentaiProjectsLocationsOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsOperationsCancelRequest, _super);
    function DocumentaiProjectsLocationsOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsOperationsCancelPathParams)
    ], DocumentaiProjectsLocationsOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsOperationsCancelQueryParams)
    ], DocumentaiProjectsLocationsOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DocumentaiProjectsLocationsOperationsCancelSecurity)
    ], DocumentaiProjectsLocationsOperationsCancelRequest.prototype, "security", void 0);
    return DocumentaiProjectsLocationsOperationsCancelRequest;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsOperationsCancelRequest };
var DocumentaiProjectsLocationsOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(DocumentaiProjectsLocationsOperationsCancelResponse, _super);
    function DocumentaiProjectsLocationsOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DocumentaiProjectsLocationsOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], DocumentaiProjectsLocationsOperationsCancelResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DocumentaiProjectsLocationsOperationsCancelResponse.prototype, "statusCode", void 0);
    return DocumentaiProjectsLocationsOperationsCancelResponse;
}(SpeakeasyBase));
export { DocumentaiProjectsLocationsOperationsCancelResponse };
