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
var ContactcenterinsightsProjectsLocationsOperationsCancelPathParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsOperationsCancelPathParams, _super);
    function ContactcenterinsightsProjectsLocationsOperationsCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelPathParams.prototype, "name", void 0);
    return ContactcenterinsightsProjectsLocationsOperationsCancelPathParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsOperationsCancelPathParams };
var ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams, _super);
    function ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams.prototype, "uploadProtocol", void 0);
    return ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams };
var ContactcenterinsightsProjectsLocationsOperationsCancelSecurity = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsOperationsCancelSecurity, _super);
    function ContactcenterinsightsProjectsLocationsOperationsCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelSecurity.prototype, "oauth2c", void 0);
    return ContactcenterinsightsProjectsLocationsOperationsCancelSecurity;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsOperationsCancelSecurity };
var ContactcenterinsightsProjectsLocationsOperationsCancelRequest = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsOperationsCancelRequest, _super);
    function ContactcenterinsightsProjectsLocationsOperationsCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsOperationsCancelPathParams)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsOperationsCancelQueryParams)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContactcenterinsightsProjectsLocationsOperationsCancelSecurity)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelRequest.prototype, "security", void 0);
    return ContactcenterinsightsProjectsLocationsOperationsCancelRequest;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsOperationsCancelRequest };
var ContactcenterinsightsProjectsLocationsOperationsCancelResponse = /** @class */ (function (_super) {
    __extends(ContactcenterinsightsProjectsLocationsOperationsCancelResponse, _super);
    function ContactcenterinsightsProjectsLocationsOperationsCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelResponse.prototype, "googleProtobufEmpty", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContactcenterinsightsProjectsLocationsOperationsCancelResponse.prototype, "statusCode", void 0);
    return ContactcenterinsightsProjectsLocationsOperationsCancelResponse;
}(SpeakeasyBase));
export { ContactcenterinsightsProjectsLocationsOperationsCancelResponse };
