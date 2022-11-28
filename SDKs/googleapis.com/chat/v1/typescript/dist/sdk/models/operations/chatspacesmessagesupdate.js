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
var ChatSpacesMessagesUpdatePathParams = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesUpdatePathParams, _super);
    function ChatSpacesMessagesUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesUpdatePathParams.prototype, "name", void 0);
    return ChatSpacesMessagesUpdatePathParams;
}(SpeakeasyBase));
export { ChatSpacesMessagesUpdatePathParams };
var ChatSpacesMessagesUpdateQueryParams = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesUpdateQueryParams, _super);
    function ChatSpacesMessagesUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesUpdateQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesUpdateQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowMissing" }),
        __metadata("design:type", Boolean)
    ], ChatSpacesMessagesUpdateQueryParams.prototype, "allowMissing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesUpdateQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ChatSpacesMessagesUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updateMask" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesUpdateQueryParams.prototype, "updateMask", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesUpdateQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesUpdateQueryParams.prototype, "uploadProtocol", void 0);
    return ChatSpacesMessagesUpdateQueryParams;
}(SpeakeasyBase));
export { ChatSpacesMessagesUpdateQueryParams };
var ChatSpacesMessagesUpdateSecurity = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesUpdateSecurity, _super);
    function ChatSpacesMessagesUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChatSpacesMessagesUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChatSpacesMessagesUpdateSecurity.prototype, "oauth2c", void 0);
    return ChatSpacesMessagesUpdateSecurity;
}(SpeakeasyBase));
export { ChatSpacesMessagesUpdateSecurity };
var ChatSpacesMessagesUpdateRequest = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesUpdateRequest, _super);
    function ChatSpacesMessagesUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChatSpacesMessagesUpdatePathParams)
    ], ChatSpacesMessagesUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChatSpacesMessagesUpdateQueryParams)
    ], ChatSpacesMessagesUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MessageInput)
    ], ChatSpacesMessagesUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChatSpacesMessagesUpdateSecurity)
    ], ChatSpacesMessagesUpdateRequest.prototype, "security", void 0);
    return ChatSpacesMessagesUpdateRequest;
}(SpeakeasyBase));
export { ChatSpacesMessagesUpdateRequest };
var ChatSpacesMessagesUpdateResponse = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesUpdateResponse, _super);
    function ChatSpacesMessagesUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChatSpacesMessagesUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Message)
    ], ChatSpacesMessagesUpdateResponse.prototype, "message", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChatSpacesMessagesUpdateResponse.prototype, "statusCode", void 0);
    return ChatSpacesMessagesUpdateResponse;
}(SpeakeasyBase));
export { ChatSpacesMessagesUpdateResponse };
