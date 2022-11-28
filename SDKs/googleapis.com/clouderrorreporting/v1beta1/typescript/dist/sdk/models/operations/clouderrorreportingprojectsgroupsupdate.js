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
var ClouderrorreportingProjectsGroupsUpdatePathParams = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsGroupsUpdatePathParams, _super);
    function ClouderrorreportingProjectsGroupsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsUpdatePathParams.prototype, "name", void 0);
    return ClouderrorreportingProjectsGroupsUpdatePathParams;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsGroupsUpdatePathParams };
var ClouderrorreportingProjectsGroupsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsGroupsUpdateQueryParams, _super);
    function ClouderrorreportingProjectsGroupsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ClouderrorreportingProjectsGroupsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return ClouderrorreportingProjectsGroupsUpdateQueryParams;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsGroupsUpdateQueryParams };
var ClouderrorreportingProjectsGroupsUpdateSecurity = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsGroupsUpdateSecurity, _super);
    function ClouderrorreportingProjectsGroupsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ClouderrorreportingProjectsGroupsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ClouderrorreportingProjectsGroupsUpdateSecurity.prototype, "oauth2c", void 0);
    return ClouderrorreportingProjectsGroupsUpdateSecurity;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsGroupsUpdateSecurity };
var ClouderrorreportingProjectsGroupsUpdateRequest = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsGroupsUpdateRequest, _super);
    function ClouderrorreportingProjectsGroupsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouderrorreportingProjectsGroupsUpdatePathParams)
    ], ClouderrorreportingProjectsGroupsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouderrorreportingProjectsGroupsUpdateQueryParams)
    ], ClouderrorreportingProjectsGroupsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ErrorGroup)
    ], ClouderrorreportingProjectsGroupsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ClouderrorreportingProjectsGroupsUpdateSecurity)
    ], ClouderrorreportingProjectsGroupsUpdateRequest.prototype, "security", void 0);
    return ClouderrorreportingProjectsGroupsUpdateRequest;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsGroupsUpdateRequest };
var ClouderrorreportingProjectsGroupsUpdateResponse = /** @class */ (function (_super) {
    __extends(ClouderrorreportingProjectsGroupsUpdateResponse, _super);
    function ClouderrorreportingProjectsGroupsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ClouderrorreportingProjectsGroupsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorGroup)
    ], ClouderrorreportingProjectsGroupsUpdateResponse.prototype, "errorGroup", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ClouderrorreportingProjectsGroupsUpdateResponse.prototype, "statusCode", void 0);
    return ClouderrorreportingProjectsGroupsUpdateResponse;
}(SpeakeasyBase));
export { ClouderrorreportingProjectsGroupsUpdateResponse };
