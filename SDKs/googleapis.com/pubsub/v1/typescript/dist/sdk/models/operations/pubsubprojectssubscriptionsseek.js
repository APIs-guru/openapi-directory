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
var PubsubProjectsSubscriptionsSeekPathParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsSeekPathParams, _super);
    function PubsubProjectsSubscriptionsSeekPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=subscription" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsSeekPathParams.prototype, "subscription", void 0);
    return PubsubProjectsSubscriptionsSeekPathParams;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsSeekPathParams };
var PubsubProjectsSubscriptionsSeekQueryParams = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsSeekQueryParams, _super);
    function PubsubProjectsSubscriptionsSeekQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsSeekQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsSeekQueryParams.prototype, "accessToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsSeekQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsSeekQueryParams.prototype, "callback", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsSeekQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsSeekQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsSeekQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], PubsubProjectsSubscriptionsSeekQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsSeekQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsSeekQueryParams.prototype, "uploadType", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsSeekQueryParams.prototype, "uploadProtocol", void 0);
    return PubsubProjectsSubscriptionsSeekQueryParams;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsSeekQueryParams };
var PubsubProjectsSubscriptionsSeekSecurityOption1 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsSeekSecurityOption1, _super);
    function PubsubProjectsSubscriptionsSeekSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSubscriptionsSeekSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSubscriptionsSeekSecurityOption1.prototype, "oauth2c", void 0);
    return PubsubProjectsSubscriptionsSeekSecurityOption1;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsSeekSecurityOption1 };
var PubsubProjectsSubscriptionsSeekSecurityOption2 = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsSeekSecurityOption2, _super);
    function PubsubProjectsSubscriptionsSeekSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], PubsubProjectsSubscriptionsSeekSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], PubsubProjectsSubscriptionsSeekSecurityOption2.prototype, "oauth2c", void 0);
    return PubsubProjectsSubscriptionsSeekSecurityOption2;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsSeekSecurityOption2 };
var PubsubProjectsSubscriptionsSeekSecurity = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsSeekSecurity, _super);
    function PubsubProjectsSubscriptionsSeekSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSubscriptionsSeekSecurityOption1)
    ], PubsubProjectsSubscriptionsSeekSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PubsubProjectsSubscriptionsSeekSecurityOption2)
    ], PubsubProjectsSubscriptionsSeekSecurity.prototype, "option2", void 0);
    return PubsubProjectsSubscriptionsSeekSecurity;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsSeekSecurity };
var PubsubProjectsSubscriptionsSeekRequest = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsSeekRequest, _super);
    function PubsubProjectsSubscriptionsSeekRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsSeekPathParams)
    ], PubsubProjectsSubscriptionsSeekRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsSeekQueryParams)
    ], PubsubProjectsSubscriptionsSeekRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SeekRequest)
    ], PubsubProjectsSubscriptionsSeekRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PubsubProjectsSubscriptionsSeekSecurity)
    ], PubsubProjectsSubscriptionsSeekRequest.prototype, "security", void 0);
    return PubsubProjectsSubscriptionsSeekRequest;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsSeekRequest };
var PubsubProjectsSubscriptionsSeekResponse = /** @class */ (function (_super) {
    __extends(PubsubProjectsSubscriptionsSeekResponse, _super);
    function PubsubProjectsSubscriptionsSeekResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PubsubProjectsSubscriptionsSeekResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], PubsubProjectsSubscriptionsSeekResponse.prototype, "seekResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PubsubProjectsSubscriptionsSeekResponse.prototype, "statusCode", void 0);
    return PubsubProjectsSubscriptionsSeekResponse;
}(SpeakeasyBase));
export { PubsubProjectsSubscriptionsSeekResponse };
