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
var EventarcProjectsLocationsTriggersGetPathParams = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsTriggersGetPathParams, _super);
    function EventarcProjectsLocationsTriggersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersGetPathParams.prototype, "name", void 0);
    return EventarcProjectsLocationsTriggersGetPathParams;
}(SpeakeasyBase));
export { EventarcProjectsLocationsTriggersGetPathParams };
var EventarcProjectsLocationsTriggersGetQueryParams = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsTriggersGetQueryParams, _super);
    function EventarcProjectsLocationsTriggersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersGetQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], EventarcProjectsLocationsTriggersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersGetQueryParams.prototype, "uploadProtocol", void 0);
    return EventarcProjectsLocationsTriggersGetQueryParams;
}(SpeakeasyBase));
export { EventarcProjectsLocationsTriggersGetQueryParams };
var EventarcProjectsLocationsTriggersGetSecurity = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsTriggersGetSecurity, _super);
    function EventarcProjectsLocationsTriggersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EventarcProjectsLocationsTriggersGetSecurity.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], EventarcProjectsLocationsTriggersGetSecurity.prototype, "oauth2c", void 0);
    return EventarcProjectsLocationsTriggersGetSecurity;
}(SpeakeasyBase));
export { EventarcProjectsLocationsTriggersGetSecurity };
var EventarcProjectsLocationsTriggersGetRequest = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsTriggersGetRequest, _super);
    function EventarcProjectsLocationsTriggersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", EventarcProjectsLocationsTriggersGetPathParams)
    ], EventarcProjectsLocationsTriggersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", EventarcProjectsLocationsTriggersGetQueryParams)
    ], EventarcProjectsLocationsTriggersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", EventarcProjectsLocationsTriggersGetSecurity)
    ], EventarcProjectsLocationsTriggersGetRequest.prototype, "security", void 0);
    return EventarcProjectsLocationsTriggersGetRequest;
}(SpeakeasyBase));
export { EventarcProjectsLocationsTriggersGetRequest };
var EventarcProjectsLocationsTriggersGetResponse = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsTriggersGetResponse, _super);
    function EventarcProjectsLocationsTriggersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], EventarcProjectsLocationsTriggersGetResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.Trigger)
    ], EventarcProjectsLocationsTriggersGetResponse.prototype, "trigger", void 0);
    return EventarcProjectsLocationsTriggersGetResponse;
}(SpeakeasyBase));
export { EventarcProjectsLocationsTriggersGetResponse };
