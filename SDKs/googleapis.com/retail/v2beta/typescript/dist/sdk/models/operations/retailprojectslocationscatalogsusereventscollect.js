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
var RetailProjectsLocationsCatalogsUserEventsCollectPathParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsCollectPathParams, _super);
    function RetailProjectsLocationsCatalogsUserEventsCollectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsCollectPathParams.prototype, "parent", void 0);
    return RetailProjectsLocationsCatalogsUserEventsCollectPathParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsCollectPathParams };
var RetailProjectsLocationsCatalogsUserEventsCollectQueryParams = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsCollectQueryParams, _super);
    function RetailProjectsLocationsCatalogsUserEventsCollectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsCollectQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsCollectQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsCollectQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsCollectQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ets" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsCollectQueryParams.prototype, "ets", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsCollectQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsCollectQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsCollectQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prebuiltRule" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsCollectQueryParams.prototype, "prebuiltRule", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], RetailProjectsLocationsCatalogsUserEventsCollectQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsCollectQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rawJson" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsCollectQueryParams.prototype, "rawJson", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsCollectQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsCollectQueryParams.prototype, "uploadProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uri" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsCollectQueryParams.prototype, "uri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userEvent" }),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsCollectQueryParams.prototype, "userEvent", void 0);
    return RetailProjectsLocationsCatalogsUserEventsCollectQueryParams;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsCollectQueryParams };
var RetailProjectsLocationsCatalogsUserEventsCollectSecurity = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsCollectSecurity, _super);
    function RetailProjectsLocationsCatalogsUserEventsCollectSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], RetailProjectsLocationsCatalogsUserEventsCollectSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], RetailProjectsLocationsCatalogsUserEventsCollectSecurity.prototype, "oauth2c", void 0);
    return RetailProjectsLocationsCatalogsUserEventsCollectSecurity;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsCollectSecurity };
var RetailProjectsLocationsCatalogsUserEventsCollectRequest = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsCollectRequest, _super);
    function RetailProjectsLocationsCatalogsUserEventsCollectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsUserEventsCollectPathParams)
    ], RetailProjectsLocationsCatalogsUserEventsCollectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsUserEventsCollectQueryParams)
    ], RetailProjectsLocationsCatalogsUserEventsCollectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", RetailProjectsLocationsCatalogsUserEventsCollectSecurity)
    ], RetailProjectsLocationsCatalogsUserEventsCollectRequest.prototype, "security", void 0);
    return RetailProjectsLocationsCatalogsUserEventsCollectRequest;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsCollectRequest };
var RetailProjectsLocationsCatalogsUserEventsCollectResponse = /** @class */ (function (_super) {
    __extends(RetailProjectsLocationsCatalogsUserEventsCollectResponse, _super);
    function RetailProjectsLocationsCatalogsUserEventsCollectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], RetailProjectsLocationsCatalogsUserEventsCollectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GoogleApiHttpBody)
    ], RetailProjectsLocationsCatalogsUserEventsCollectResponse.prototype, "googleApiHttpBody", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], RetailProjectsLocationsCatalogsUserEventsCollectResponse.prototype, "statusCode", void 0);
    return RetailProjectsLocationsCatalogsUserEventsCollectResponse;
}(SpeakeasyBase));
export { RetailProjectsLocationsCatalogsUserEventsCollectResponse };
