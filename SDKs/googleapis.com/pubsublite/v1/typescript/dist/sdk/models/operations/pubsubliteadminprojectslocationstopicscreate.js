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
var PubsubliteAdminProjectsLocationsTopicsCreatePathParams = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsTopicsCreatePathParams, _super);
    function PubsubliteAdminProjectsLocationsTopicsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsCreatePathParams.prototype, "parent", void 0);
    return PubsubliteAdminProjectsLocationsTopicsCreatePathParams;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsTopicsCreatePathParams };
var PubsubliteAdminProjectsLocationsTopicsCreateQueryParams = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsTopicsCreateQueryParams, _super);
    function PubsubliteAdminProjectsLocationsTopicsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubliteAdminProjectsLocationsTopicsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topicId" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsCreateQueryParams.prototype, "topicId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsCreateQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubliteAdminProjectsLocationsTopicsCreateQueryParams;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsTopicsCreateQueryParams };
var PubsubliteAdminProjectsLocationsTopicsCreateSecurity = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsTopicsCreateSecurity, _super);
    function PubsubliteAdminProjectsLocationsTopicsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubliteAdminProjectsLocationsTopicsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubliteAdminProjectsLocationsTopicsCreateSecurity.prototype, "oauth2c", void 0);
    return PubsubliteAdminProjectsLocationsTopicsCreateSecurity;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsTopicsCreateSecurity };
var PubsubliteAdminProjectsLocationsTopicsCreateRequest = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsTopicsCreateRequest, _super);
    function PubsubliteAdminProjectsLocationsTopicsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsTopicsCreatePathParams)
    ], PubsubliteAdminProjectsLocationsTopicsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsTopicsCreateQueryParams)
    ], PubsubliteAdminProjectsLocationsTopicsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.Topic)
    ], PubsubliteAdminProjectsLocationsTopicsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PubsubliteAdminProjectsLocationsTopicsCreateSecurity)
    ], PubsubliteAdminProjectsLocationsTopicsCreateRequest.prototype, "security", void 0);
    return PubsubliteAdminProjectsLocationsTopicsCreateRequest;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsTopicsCreateRequest };
var PubsubliteAdminProjectsLocationsTopicsCreateResponse = /** @class */ (function (_super) {
    __extends(PubsubliteAdminProjectsLocationsTopicsCreateResponse, _super);
    function PubsubliteAdminProjectsLocationsTopicsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PubsubliteAdminProjectsLocationsTopicsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PubsubliteAdminProjectsLocationsTopicsCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Topic)
    ], PubsubliteAdminProjectsLocationsTopicsCreateResponse.prototype, "topic", void 0);
    return PubsubliteAdminProjectsLocationsTopicsCreateResponse;
}(SpeakeasyBase));
export { PubsubliteAdminProjectsLocationsTopicsCreateResponse };
