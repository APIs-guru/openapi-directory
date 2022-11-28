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
var PubsubliteAdminProjectsLocationsTopicsPatchPathParams = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsTopicsPatchPathParams, _super);
    function PubsubliteAdminProjectsLocationsTopicsPatchPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsPatchPathParams.prototype, "name", void 0);
    return PubsubliteAdminProjectsLocationsTopicsPatchPathParams;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsTopicsPatchPathParams };
var PubsubliteAdminProjectsLocationsTopicsPatchQueryParams = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsTopicsPatchQueryParams, _super);
    function PubsubliteAdminProjectsLocationsTopicsPatchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsPatchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsPatchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsPatchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsPatchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsPatchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsPatchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsPatchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubliteAdminProjectsLocationsTopicsPatchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsPatchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsPatchQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsPatchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsPatchQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubliteAdminProjectsLocationsTopicsPatchQueryParams;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsTopicsPatchQueryParams };
var PubsubliteAdminProjectsLocationsTopicsPatchSecurity = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsTopicsPatchSecurity, _super);
    function PubsubliteAdminProjectsLocationsTopicsPatchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubliteAdminProjectsLocationsTopicsPatchSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubliteAdminProjectsLocationsTopicsPatchSecurity.prototype, "oauth2c", void 0);
    return PubsubliteAdminProjectsLocationsTopicsPatchSecurity;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsTopicsPatchSecurity };
var PubsubliteAdminProjectsLocationsTopicsPatchRequest = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsTopicsPatchRequest, _super);
    function PubsubliteAdminProjectsLocationsTopicsPatchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsTopicsPatchPathParams)
    ], PubsubliteAdminProjectsLocationsTopicsPatchRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsTopicsPatchQueryParams)
    ], PubsubliteAdminProjectsLocationsTopicsPatchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Topic)
    ], PubsubliteAdminProjectsLocationsTopicsPatchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsTopicsPatchSecurity)
    ], PubsubliteAdminProjectsLocationsTopicsPatchRequest.prototype, "security", void 0);
    return PubsubliteAdminProjectsLocationsTopicsPatchRequest;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsTopicsPatchRequest };
var PubsubliteAdminProjectsLocationsTopicsPatchResponse = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsTopicsPatchResponse, _super);
    function PubsubliteAdminProjectsLocationsTopicsPatchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsPatchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubliteAdminProjectsLocationsTopicsPatchResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Topic)
    ], PubsubliteAdminProjectsLocationsTopicsPatchResponse.prototype, "topic", void 0);
    return PubsubliteAdminProjectsLocationsTopicsPatchResponse;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsTopicsPatchResponse };
