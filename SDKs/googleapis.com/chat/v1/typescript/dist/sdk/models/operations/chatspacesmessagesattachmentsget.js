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
var ChatSpacesMessagesAttachmentsGetPathParams = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesAttachmentsGetPathParams, _super);
    function ChatSpacesMessagesAttachmentsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesAttachmentsGetPathParams.prototype, "name", void 0);
    return ChatSpacesMessagesAttachmentsGetPathParams;
}(SpeakeasyBase));
export { ChatSpacesMessagesAttachmentsGetPathParams };
var ChatSpacesMessagesAttachmentsGetQueryParams = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesAttachmentsGetQueryParams, _super);
    function ChatSpacesMessagesAttachmentsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesAttachmentsGetQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesAttachmentsGetQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesAttachmentsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesAttachmentsGetQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesAttachmentsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesAttachmentsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesAttachmentsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], ChatSpacesMessagesAttachmentsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesAttachmentsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesAttachmentsGetQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], ChatSpacesMessagesAttachmentsGetQueryParams.prototype, "uploadProtocol", void 0);
    return ChatSpacesMessagesAttachmentsGetQueryParams;
}(SpeakeasyBase));
export { ChatSpacesMessagesAttachmentsGetQueryParams };
var ChatSpacesMessagesAttachmentsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesAttachmentsGetSecurityOption1, _super);
    function ChatSpacesMessagesAttachmentsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChatSpacesMessagesAttachmentsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChatSpacesMessagesAttachmentsGetSecurityOption1.prototype, "oauth2c", void 0);
    return ChatSpacesMessagesAttachmentsGetSecurityOption1;
}(SpeakeasyBase));
export { ChatSpacesMessagesAttachmentsGetSecurityOption1 };
var ChatSpacesMessagesAttachmentsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesAttachmentsGetSecurityOption2, _super);
    function ChatSpacesMessagesAttachmentsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], ChatSpacesMessagesAttachmentsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], ChatSpacesMessagesAttachmentsGetSecurityOption2.prototype, "oauth2c", void 0);
    return ChatSpacesMessagesAttachmentsGetSecurityOption2;
}(SpeakeasyBase));
export { ChatSpacesMessagesAttachmentsGetSecurityOption2 };
var ChatSpacesMessagesAttachmentsGetSecurity = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesAttachmentsGetSecurity, _super);
    function ChatSpacesMessagesAttachmentsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ChatSpacesMessagesAttachmentsGetSecurityOption1)
    ], ChatSpacesMessagesAttachmentsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", ChatSpacesMessagesAttachmentsGetSecurityOption2)
    ], ChatSpacesMessagesAttachmentsGetSecurity.prototype, "option2", void 0);
    return ChatSpacesMessagesAttachmentsGetSecurity;
}(SpeakeasyBase));
export { ChatSpacesMessagesAttachmentsGetSecurity };
var ChatSpacesMessagesAttachmentsGetRequest = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesAttachmentsGetRequest, _super);
    function ChatSpacesMessagesAttachmentsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChatSpacesMessagesAttachmentsGetPathParams)
    ], ChatSpacesMessagesAttachmentsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChatSpacesMessagesAttachmentsGetQueryParams)
    ], ChatSpacesMessagesAttachmentsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ChatSpacesMessagesAttachmentsGetSecurity)
    ], ChatSpacesMessagesAttachmentsGetRequest.prototype, "security", void 0);
    return ChatSpacesMessagesAttachmentsGetRequest;
}(SpeakeasyBase));
export { ChatSpacesMessagesAttachmentsGetRequest };
var ChatSpacesMessagesAttachmentsGetResponse = /** @class */ (function (_super) {
    __extends(ChatSpacesMessagesAttachmentsGetResponse, _super);
    function ChatSpacesMessagesAttachmentsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Attachment)
    ], ChatSpacesMessagesAttachmentsGetResponse.prototype, "attachment", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ChatSpacesMessagesAttachmentsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ChatSpacesMessagesAttachmentsGetResponse.prototype, "statusCode", void 0);
    return ChatSpacesMessagesAttachmentsGetResponse;
}(SpeakeasyBase));
export { ChatSpacesMessagesAttachmentsGetResponse };
