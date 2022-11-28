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
var RemotebuildexecutionProjectsOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsOperationsGetPathParams, _super);
    function RemotebuildexecutionProjectsOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsOperationsGetPathParams.prototype, "name", void 0);
    return RemotebuildexecutionProjectsOperationsGetPathParams;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsOperationsGetPathParams };
var RemotebuildexecutionProjectsOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsOperationsGetQueryParams, _super);
    function RemotebuildexecutionProjectsOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RemotebuildexecutionProjectsOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return RemotebuildexecutionProjectsOperationsGetQueryParams;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsOperationsGetQueryParams };
var RemotebuildexecutionProjectsOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsOperationsGetSecurity, _super);
    function RemotebuildexecutionProjectsOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RemotebuildexecutionProjectsOperationsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RemotebuildexecutionProjectsOperationsGetSecurity.prototype, "oauth2c", void 0);
    return RemotebuildexecutionProjectsOperationsGetSecurity;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsOperationsGetSecurity };
var RemotebuildexecutionProjectsOperationsGetRequest = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsOperationsGetRequest, _super);
    function RemotebuildexecutionProjectsOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsOperationsGetPathParams)
    ], RemotebuildexecutionProjectsOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsOperationsGetQueryParams)
    ], RemotebuildexecutionProjectsOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RemotebuildexecutionProjectsOperationsGetSecurity)
    ], RemotebuildexecutionProjectsOperationsGetRequest.prototype, "security", void 0);
    return RemotebuildexecutionProjectsOperationsGetRequest;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsOperationsGetRequest };
var RemotebuildexecutionProjectsOperationsGetResponse = /** @class */ (function (_super) {
    __extends(RemotebuildexecutionProjectsOperationsGetResponse, _super);
    function RemotebuildexecutionProjectsOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RemotebuildexecutionProjectsOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], RemotebuildexecutionProjectsOperationsGetResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RemotebuildexecutionProjectsOperationsGetResponse.prototype, "statusCode", void 0);
    return RemotebuildexecutionProjectsOperationsGetResponse;
}(SpeakeasyBase));
export { RemotebuildexecutionProjectsOperationsGetResponse };
