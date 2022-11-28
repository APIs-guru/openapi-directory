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
var ContentPubsubnotificationsettingsUpdatePathParams = /** @class */ (function (_super) {
    __extends(ContentPubsubnotificationsettingsUpdatePathParams, _super);
    function ContentPubsubnotificationsettingsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=merchantId" }),
        __metadata("design:type", String)
    ], ContentPubsubnotificationsettingsUpdatePathParams.prototype, "merchantId", void 0);
    return ContentPubsubnotificationsettingsUpdatePathParams;
}(SpeakeasyBase));
export { ContentPubsubnotificationsettingsUpdatePathParams };
var ContentPubsubnotificationsettingsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(ContentPubsubnotificationsettingsUpdateQueryParams, _super);
    function ContentPubsubnotificationsettingsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ContentPubsubnotificationsettingsUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ContentPubsubnotificationsettingsUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ContentPubsubnotificationsettingsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ContentPubsubnotificationsettingsUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ContentPubsubnotificationsettingsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ContentPubsubnotificationsettingsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ContentPubsubnotificationsettingsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ContentPubsubnotificationsettingsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ContentPubsubnotificationsettingsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ContentPubsubnotificationsettingsUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ContentPubsubnotificationsettingsUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return ContentPubsubnotificationsettingsUpdateQueryParams;
}(SpeakeasyBase));
export { ContentPubsubnotificationsettingsUpdateQueryParams };
var ContentPubsubnotificationsettingsUpdateSecurity = /** @class */ (function (_super) {
    __extends(ContentPubsubnotificationsettingsUpdateSecurity, _super);
    function ContentPubsubnotificationsettingsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ContentPubsubnotificationsettingsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ContentPubsubnotificationsettingsUpdateSecurity.prototype, "oauth2c", void 0);
    return ContentPubsubnotificationsettingsUpdateSecurity;
}(SpeakeasyBase));
export { ContentPubsubnotificationsettingsUpdateSecurity };
var ContentPubsubnotificationsettingsUpdateRequest = /** @class */ (function (_super) {
    __extends(ContentPubsubnotificationsettingsUpdateRequest, _super);
    function ContentPubsubnotificationsettingsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentPubsubnotificationsettingsUpdatePathParams)
    ], ContentPubsubnotificationsettingsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentPubsubnotificationsettingsUpdateQueryParams)
    ], ContentPubsubnotificationsettingsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PubsubNotificationSettings)
    ], ContentPubsubnotificationsettingsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ContentPubsubnotificationsettingsUpdateSecurity)
    ], ContentPubsubnotificationsettingsUpdateRequest.prototype, "security", void 0);
    return ContentPubsubnotificationsettingsUpdateRequest;
}(SpeakeasyBase));
export { ContentPubsubnotificationsettingsUpdateRequest };
var ContentPubsubnotificationsettingsUpdateResponse = /** @class */ (function (_super) {
    __extends(ContentPubsubnotificationsettingsUpdateResponse, _super);
    function ContentPubsubnotificationsettingsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ContentPubsubnotificationsettingsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.PubsubNotificationSettings)
    ], ContentPubsubnotificationsettingsUpdateResponse.prototype, "pubsubNotificationSettings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ContentPubsubnotificationsettingsUpdateResponse.prototype, "statusCode", void 0);
    return ContentPubsubnotificationsettingsUpdateResponse;
}(SpeakeasyBase));
export { ContentPubsubnotificationsettingsUpdateResponse };
