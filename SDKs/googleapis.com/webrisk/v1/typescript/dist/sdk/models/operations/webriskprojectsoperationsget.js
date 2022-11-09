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
var WebriskProjectsOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(WebriskProjectsOperationsGetPathParams, _super);
    function WebriskProjectsOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], WebriskProjectsOperationsGetPathParams.prototype, "name", void 0);
    return WebriskProjectsOperationsGetPathParams;
}(SpeakeasyBase));
export { WebriskProjectsOperationsGetPathParams };
var WebriskProjectsOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(WebriskProjectsOperationsGetQueryParams, _super);
    function WebriskProjectsOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], WebriskProjectsOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], WebriskProjectsOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], WebriskProjectsOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], WebriskProjectsOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], WebriskProjectsOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], WebriskProjectsOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], WebriskProjectsOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], WebriskProjectsOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], WebriskProjectsOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], WebriskProjectsOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], WebriskProjectsOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return WebriskProjectsOperationsGetQueryParams;
}(SpeakeasyBase));
export { WebriskProjectsOperationsGetQueryParams };
var WebriskProjectsOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(WebriskProjectsOperationsGetSecurity, _super);
    function WebriskProjectsOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], WebriskProjectsOperationsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], WebriskProjectsOperationsGetSecurity.prototype, "oauth2c", void 0);
    return WebriskProjectsOperationsGetSecurity;
}(SpeakeasyBase));
export { WebriskProjectsOperationsGetSecurity };
var WebriskProjectsOperationsGetRequest = /** @class */ (function (_super) {
    __extends(WebriskProjectsOperationsGetRequest, _super);
    function WebriskProjectsOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", WebriskProjectsOperationsGetPathParams)
    ], WebriskProjectsOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WebriskProjectsOperationsGetQueryParams)
    ], WebriskProjectsOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", WebriskProjectsOperationsGetSecurity)
    ], WebriskProjectsOperationsGetRequest.prototype, "security", void 0);
    return WebriskProjectsOperationsGetRequest;
}(SpeakeasyBase));
export { WebriskProjectsOperationsGetRequest };
var WebriskProjectsOperationsGetResponse = /** @class */ (function (_super) {
    __extends(WebriskProjectsOperationsGetResponse, _super);
    function WebriskProjectsOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], WebriskProjectsOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], WebriskProjectsOperationsGetResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], WebriskProjectsOperationsGetResponse.prototype, "statusCode", void 0);
    return WebriskProjectsOperationsGetResponse;
}(SpeakeasyBase));
export { WebriskProjectsOperationsGetResponse };
