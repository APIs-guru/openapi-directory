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
var OndemandscanningProjectsLocationsOperationsWaitPathParams = /** @class */ (function (_super) {
    __extends(OndemandscanningProjectsLocationsOperationsWaitPathParams, _super);
    function OndemandscanningProjectsLocationsOperationsWaitPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsWaitPathParams.prototype, "name", void 0);
    return OndemandscanningProjectsLocationsOperationsWaitPathParams;
}(SpeakeasyBase));
export { OndemandscanningProjectsLocationsOperationsWaitPathParams };
var OndemandscanningProjectsLocationsOperationsWaitQueryParams = /** @class */ (function (_super) {
    __extends(OndemandscanningProjectsLocationsOperationsWaitQueryParams, _super);
    function OndemandscanningProjectsLocationsOperationsWaitQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsWaitQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsWaitQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsWaitQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsWaitQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsWaitQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsWaitQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsWaitQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], OndemandscanningProjectsLocationsOperationsWaitQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsWaitQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeout" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsWaitQueryParams.prototype, "timeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsWaitQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsWaitQueryParams.prototype, "uploadProtocol", void 0);
    return OndemandscanningProjectsLocationsOperationsWaitQueryParams;
}(SpeakeasyBase));
export { OndemandscanningProjectsLocationsOperationsWaitQueryParams };
var OndemandscanningProjectsLocationsOperationsWaitSecurity = /** @class */ (function (_super) {
    __extends(OndemandscanningProjectsLocationsOperationsWaitSecurity, _super);
    function OndemandscanningProjectsLocationsOperationsWaitSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], OndemandscanningProjectsLocationsOperationsWaitSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], OndemandscanningProjectsLocationsOperationsWaitSecurity.prototype, "oauth2c", void 0);
    return OndemandscanningProjectsLocationsOperationsWaitSecurity;
}(SpeakeasyBase));
export { OndemandscanningProjectsLocationsOperationsWaitSecurity };
var OndemandscanningProjectsLocationsOperationsWaitRequest = /** @class */ (function (_super) {
    __extends(OndemandscanningProjectsLocationsOperationsWaitRequest, _super);
    function OndemandscanningProjectsLocationsOperationsWaitRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OndemandscanningProjectsLocationsOperationsWaitPathParams)
    ], OndemandscanningProjectsLocationsOperationsWaitRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OndemandscanningProjectsLocationsOperationsWaitQueryParams)
    ], OndemandscanningProjectsLocationsOperationsWaitRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", OndemandscanningProjectsLocationsOperationsWaitSecurity)
    ], OndemandscanningProjectsLocationsOperationsWaitRequest.prototype, "security", void 0);
    return OndemandscanningProjectsLocationsOperationsWaitRequest;
}(SpeakeasyBase));
export { OndemandscanningProjectsLocationsOperationsWaitRequest };
var OndemandscanningProjectsLocationsOperationsWaitResponse = /** @class */ (function (_super) {
    __extends(OndemandscanningProjectsLocationsOperationsWaitResponse, _super);
    function OndemandscanningProjectsLocationsOperationsWaitResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], OndemandscanningProjectsLocationsOperationsWaitResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Operation)
    ], OndemandscanningProjectsLocationsOperationsWaitResponse.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], OndemandscanningProjectsLocationsOperationsWaitResponse.prototype, "statusCode", void 0);
    return OndemandscanningProjectsLocationsOperationsWaitResponse;
}(SpeakeasyBase));
export { OndemandscanningProjectsLocationsOperationsWaitResponse };
