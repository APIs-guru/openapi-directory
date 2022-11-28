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
var LifesciencesProjectsLocationsOperationsGetPathParams = /** @class */ (function (_super) {
    __extends(LifesciencesProjectsLocationsOperationsGetPathParams, _super);
    function LifesciencesProjectsLocationsOperationsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsOperationsGetPathParams.prototype, "name", void 0);
    return LifesciencesProjectsLocationsOperationsGetPathParams;
}(SpeakeasyBase));
export { LifesciencesProjectsLocationsOperationsGetPathParams };
var LifesciencesProjectsLocationsOperationsGetQueryParams = /** @class */ (function (_super) {
    __extends(LifesciencesProjectsLocationsOperationsGetQueryParams, _super);
    function LifesciencesProjectsLocationsOperationsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsOperationsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsOperationsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsOperationsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsOperationsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsOperationsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsOperationsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsOperationsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], LifesciencesProjectsLocationsOperationsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsOperationsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsOperationsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsOperationsGetQueryParams.prototype, "uploadProtocol", void 0);
    return LifesciencesProjectsLocationsOperationsGetQueryParams;
}(SpeakeasyBase));
export { LifesciencesProjectsLocationsOperationsGetQueryParams };
var LifesciencesProjectsLocationsOperationsGetSecurity = /** @class */ (function (_super) {
    __extends(LifesciencesProjectsLocationsOperationsGetSecurity, _super);
    function LifesciencesProjectsLocationsOperationsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], LifesciencesProjectsLocationsOperationsGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], LifesciencesProjectsLocationsOperationsGetSecurity.prototype, "oauth2c", void 0);
    return LifesciencesProjectsLocationsOperationsGetSecurity;
}(SpeakeasyBase));
export { LifesciencesProjectsLocationsOperationsGetSecurity };
var LifesciencesProjectsLocationsOperationsGetRequest = /** @class */ (function (_super) {
    __extends(LifesciencesProjectsLocationsOperationsGetRequest, _super);
    function LifesciencesProjectsLocationsOperationsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LifesciencesProjectsLocationsOperationsGetPathParams)
    ], LifesciencesProjectsLocationsOperationsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LifesciencesProjectsLocationsOperationsGetQueryParams)
    ], LifesciencesProjectsLocationsOperationsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", LifesciencesProjectsLocationsOperationsGetSecurity)
    ], LifesciencesProjectsLocationsOperationsGetRequest.prototype, "security", void 0);
    return LifesciencesProjectsLocationsOperationsGetRequest;
}(SpeakeasyBase));
export { LifesciencesProjectsLocationsOperationsGetRequest };
var LifesciencesProjectsLocationsOperationsGetResponse = /** @class */ (function (_super) {
    __extends(LifesciencesProjectsLocationsOperationsGetResponse, _super);
    function LifesciencesProjectsLocationsOperationsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], LifesciencesProjectsLocationsOperationsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], LifesciencesProjectsLocationsOperationsGetResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], LifesciencesProjectsLocationsOperationsGetResponse.prototype, "statusCode", void 0);
    return LifesciencesProjectsLocationsOperationsGetResponse;
}(SpeakeasyBase));
export { LifesciencesProjectsLocationsOperationsGetResponse };
