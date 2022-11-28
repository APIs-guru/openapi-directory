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
var EventarcProjectsLocationsChannelsCreatePathParams = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsChannelsCreatePathParams, _super);
    function EventarcProjectsLocationsChannelsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsChannelsCreatePathParams.prototype, "parent", void 0);
    return EventarcProjectsLocationsChannelsCreatePathParams;
}(SpeakeasyBase));
export { EventarcProjectsLocationsChannelsCreatePathParams };
var EventarcProjectsLocationsChannelsCreateQueryParams = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsChannelsCreateQueryParams, _super);
    function EventarcProjectsLocationsChannelsCreateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsChannelsCreateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsChannelsCreateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsChannelsCreateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsChannelsCreateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=channelId" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsChannelsCreateQueryParams.prototype, "channelId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsChannelsCreateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsChannelsCreateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsChannelsCreateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], EventarcProjectsLocationsChannelsCreateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsChannelsCreateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsChannelsCreateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsChannelsCreateQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], EventarcProjectsLocationsChannelsCreateQueryParams.prototype, "validateOnly", void 0);
    return EventarcProjectsLocationsChannelsCreateQueryParams;
}(SpeakeasyBase));
export { EventarcProjectsLocationsChannelsCreateQueryParams };
var EventarcProjectsLocationsChannelsCreateSecurity = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsChannelsCreateSecurity, _super);
    function EventarcProjectsLocationsChannelsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EventarcProjectsLocationsChannelsCreateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], EventarcProjectsLocationsChannelsCreateSecurity.prototype, "oauth2c", void 0);
    return EventarcProjectsLocationsChannelsCreateSecurity;
}(SpeakeasyBase));
export { EventarcProjectsLocationsChannelsCreateSecurity };
var EventarcProjectsLocationsChannelsCreateRequest = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsChannelsCreateRequest, _super);
    function EventarcProjectsLocationsChannelsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EventarcProjectsLocationsChannelsCreatePathParams)
    ], EventarcProjectsLocationsChannelsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EventarcProjectsLocationsChannelsCreateQueryParams)
    ], EventarcProjectsLocationsChannelsCreateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.ChannelInput)
    ], EventarcProjectsLocationsChannelsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EventarcProjectsLocationsChannelsCreateSecurity)
    ], EventarcProjectsLocationsChannelsCreateRequest.prototype, "security", void 0);
    return EventarcProjectsLocationsChannelsCreateRequest;
}(SpeakeasyBase));
export { EventarcProjectsLocationsChannelsCreateRequest };
var EventarcProjectsLocationsChannelsCreateResponse = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsChannelsCreateResponse, _super);
    function EventarcProjectsLocationsChannelsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsChannelsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], EventarcProjectsLocationsChannelsCreateResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EventarcProjectsLocationsChannelsCreateResponse.prototype, "statusCode", void 0);
    return EventarcProjectsLocationsChannelsCreateResponse;
}(SpeakeasyBase));
export { EventarcProjectsLocationsChannelsCreateResponse };
