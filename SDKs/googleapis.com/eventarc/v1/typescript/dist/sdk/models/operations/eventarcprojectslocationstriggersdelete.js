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
var EventarcProjectsLocationsTriggersDeletePathParams = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsTriggersDeletePathParams, _super);
    function EventarcProjectsLocationsTriggersDeletePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersDeletePathParams.prototype, "name", void 0);
    return EventarcProjectsLocationsTriggersDeletePathParams;
}(SpeakeasyBase));
export { EventarcProjectsLocationsTriggersDeletePathParams };
var EventarcProjectsLocationsTriggersDeleteQueryParams = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsTriggersDeleteQueryParams, _super);
    function EventarcProjectsLocationsTriggersDeleteQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersDeleteQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersDeleteQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowMissing" }),
        __metadata("design:type", Boolean)
    ], EventarcProjectsLocationsTriggersDeleteQueryParams.prototype, "allowMissing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersDeleteQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersDeleteQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=etag" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersDeleteQueryParams.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersDeleteQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersDeleteQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersDeleteQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], EventarcProjectsLocationsTriggersDeleteQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersDeleteQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersDeleteQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersDeleteQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=validateOnly" }),
        __metadata("design:type", Boolean)
    ], EventarcProjectsLocationsTriggersDeleteQueryParams.prototype, "validateOnly", void 0);
    return EventarcProjectsLocationsTriggersDeleteQueryParams;
}(SpeakeasyBase));
export { EventarcProjectsLocationsTriggersDeleteQueryParams };
var EventarcProjectsLocationsTriggersDeleteSecurity = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsTriggersDeleteSecurity, _super);
    function EventarcProjectsLocationsTriggersDeleteSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], EventarcProjectsLocationsTriggersDeleteSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], EventarcProjectsLocationsTriggersDeleteSecurity.prototype, "oauth2c", void 0);
    return EventarcProjectsLocationsTriggersDeleteSecurity;
}(SpeakeasyBase));
export { EventarcProjectsLocationsTriggersDeleteSecurity };
var EventarcProjectsLocationsTriggersDeleteRequest = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsTriggersDeleteRequest, _super);
    function EventarcProjectsLocationsTriggersDeleteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EventarcProjectsLocationsTriggersDeletePathParams)
    ], EventarcProjectsLocationsTriggersDeleteRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EventarcProjectsLocationsTriggersDeleteQueryParams)
    ], EventarcProjectsLocationsTriggersDeleteRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", EventarcProjectsLocationsTriggersDeleteSecurity)
    ], EventarcProjectsLocationsTriggersDeleteRequest.prototype, "security", void 0);
    return EventarcProjectsLocationsTriggersDeleteRequest;
}(SpeakeasyBase));
export { EventarcProjectsLocationsTriggersDeleteRequest };
var EventarcProjectsLocationsTriggersDeleteResponse = /** @class */ (function (_super) {
    __extends(EventarcProjectsLocationsTriggersDeleteResponse, _super);
    function EventarcProjectsLocationsTriggersDeleteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], EventarcProjectsLocationsTriggersDeleteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleLongrunningOperation)
    ], EventarcProjectsLocationsTriggersDeleteResponse.prototype, "googleLongrunningOperation", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], EventarcProjectsLocationsTriggersDeleteResponse.prototype, "statusCode", void 0);
    return EventarcProjectsLocationsTriggersDeleteResponse;
}(SpeakeasyBase));
export { EventarcProjectsLocationsTriggersDeleteResponse };
