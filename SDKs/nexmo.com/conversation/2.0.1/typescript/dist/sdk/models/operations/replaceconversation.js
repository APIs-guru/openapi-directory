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
var ReplaceConversationPathParams = /** @class */ (function (_super) {
    __extends(ReplaceConversationPathParams, _super);
    function ReplaceConversationPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=conversation_id" }),
        __metadata("design:type", String)
    ], ReplaceConversationPathParams.prototype, "conversationId", void 0);
    return ReplaceConversationPathParams;
}(SpeakeasyBase));
export { ReplaceConversationPathParams };
var ReplaceConversationRequestBody = /** @class */ (function (_super) {
    __extends(ReplaceConversationRequestBody, _super);
    function ReplaceConversationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], ReplaceConversationRequestBody.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=image_url" }),
        __metadata("design:type", String)
    ], ReplaceConversationRequestBody.prototype, "imageUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ReplaceConversationRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties" }),
        __metadata("design:type", shared.ConversationProperties)
    ], ReplaceConversationRequestBody.prototype, "properties", void 0);
    return ReplaceConversationRequestBody;
}(SpeakeasyBase));
export { ReplaceConversationRequestBody };
var ReplaceConversation200ApplicationJson = /** @class */ (function (_super) {
    __extends(ReplaceConversation200ApplicationJson, _super);
    function ReplaceConversation200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=href" }),
        __metadata("design:type", String)
    ], ReplaceConversation200ApplicationJson.prototype, "href", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ReplaceConversation200ApplicationJson.prototype, "id", void 0);
    return ReplaceConversation200ApplicationJson;
}(SpeakeasyBase));
export { ReplaceConversation200ApplicationJson };
var ReplaceConversationRequest = /** @class */ (function (_super) {
    __extends(ReplaceConversationRequest, _super);
    function ReplaceConversationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplaceConversationPathParams)
    ], ReplaceConversationRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", ReplaceConversationRequestBody)
    ], ReplaceConversationRequest.prototype, "request", void 0);
    return ReplaceConversationRequest;
}(SpeakeasyBase));
export { ReplaceConversationRequest };
var ReplaceConversationResponse = /** @class */ (function (_super) {
    __extends(ReplaceConversationResponse, _super);
    function ReplaceConversationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReplaceConversationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReplaceConversationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReplaceConversation200ApplicationJson)
    ], ReplaceConversationResponse.prototype, "replaceConversation200ApplicationJsonObject", void 0);
    return ReplaceConversationResponse;
}(SpeakeasyBase));
export { ReplaceConversationResponse };
