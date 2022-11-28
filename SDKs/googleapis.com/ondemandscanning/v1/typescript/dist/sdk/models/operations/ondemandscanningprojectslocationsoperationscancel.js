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
var OndemandscanningProjectsLocationsOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(OndemandscanningProjectsLocationsOperationsCancelPathParams, _super);
    function OndemandscanningProjectsLocationsOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsCancelPathParams.prototype, "name", void 0);
    return OndemandscanningProjectsLocationsOperationsCancelPathParams;
}(SpeakeasyBase));
export { OndemandscanningProjectsLocationsOperationsCancelPathParams };
var OndemandscanningProjectsLocationsOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(OndemandscanningProjectsLocationsOperationsCancelQueryParams, _super);
    function OndemandscanningProjectsLocationsOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OndemandscanningProjectsLocationsOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return OndemandscanningProjectsLocationsOperationsCancelQueryParams;
}(SpeakeasyBase));
export { OndemandscanningProjectsLocationsOperationsCancelQueryParams };
var OndemandscanningProjectsLocationsOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(OndemandscanningProjectsLocationsOperationsCancelSecurity, _super);
    function OndemandscanningProjectsLocationsOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OndemandscanningProjectsLocationsOperationsCancelSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OndemandscanningProjectsLocationsOperationsCancelSecurity.prototype, "oauth2c", void 0);
    return OndemandscanningProjectsLocationsOperationsCancelSecurity;
}(SpeakeasyBase));
export { OndemandscanningProjectsLocationsOperationsCancelSecurity };
var OndemandscanningProjectsLocationsOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(OndemandscanningProjectsLocationsOperationsCancelRequest, _super);
    function OndemandscanningProjectsLocationsOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OndemandscanningProjectsLocationsOperationsCancelPathParams)
    ], OndemandscanningProjectsLocationsOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OndemandscanningProjectsLocationsOperationsCancelQueryParams)
    ], OndemandscanningProjectsLocationsOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OndemandscanningProjectsLocationsOperationsCancelSecurity)
    ], OndemandscanningProjectsLocationsOperationsCancelRequest.prototype, "security", void 0);
    return OndemandscanningProjectsLocationsOperationsCancelRequest;
}(SpeakeasyBase));
export { OndemandscanningProjectsLocationsOperationsCancelRequest };
var OndemandscanningProjectsLocationsOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(OndemandscanningProjectsLocationsOperationsCancelResponse, _super);
    function OndemandscanningProjectsLocationsOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], OndemandscanningProjectsLocationsOperationsCancelResponse.prototype, "empty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OndemandscanningProjectsLocationsOperationsCancelResponse.prototype, "statusCode", void 0);
    return OndemandscanningProjectsLocationsOperationsCancelResponse;
}(SpeakeasyBase));
export { OndemandscanningProjectsLocationsOperationsCancelResponse };
