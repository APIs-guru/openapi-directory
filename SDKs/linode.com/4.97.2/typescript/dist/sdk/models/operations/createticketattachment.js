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
var CreateTicketAttachmentPathParams = /** @class */ (function (_super) {
    __extends(CreateTicketAttachmentPathParams, _super);
    function CreateTicketAttachmentPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ticketId" }),
        __metadata("design:type", Number)
    ], CreateTicketAttachmentPathParams.prototype, "ticketId", void 0);
    return CreateTicketAttachmentPathParams;
}(SpeakeasyBase));
export { CreateTicketAttachmentPathParams };
var CreateTicketAttachmentSecurity = /** @class */ (function (_super) {
    __extends(CreateTicketAttachmentSecurity, _super);
    function CreateTicketAttachmentSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreateTicketAttachmentSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateTicketAttachmentSecurity.prototype, "oauth", void 0);
    return CreateTicketAttachmentSecurity;
}(SpeakeasyBase));
export { CreateTicketAttachmentSecurity };
var CreateTicketAttachmentDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTicketAttachmentDefaultApplicationJson, _super);
    function CreateTicketAttachmentDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreateTicketAttachmentDefaultApplicationJson.prototype, "errors", void 0);
    return CreateTicketAttachmentDefaultApplicationJson;
}(SpeakeasyBase));
export { CreateTicketAttachmentDefaultApplicationJson };
var CreateTicketAttachmentRequest = /** @class */ (function (_super) {
    __extends(CreateTicketAttachmentRequest, _super);
    function CreateTicketAttachmentRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTicketAttachmentPathParams)
    ], CreateTicketAttachmentRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", Object)
    ], CreateTicketAttachmentRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTicketAttachmentSecurity)
    ], CreateTicketAttachmentRequest.prototype, "security", void 0);
    return CreateTicketAttachmentRequest;
}(SpeakeasyBase));
export { CreateTicketAttachmentRequest };
var CreateTicketAttachmentResponse = /** @class */ (function (_super) {
    __extends(CreateTicketAttachmentResponse, _super);
    function CreateTicketAttachmentResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTicketAttachmentResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTicketAttachmentResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CreateTicketAttachmentResponse.prototype, "createTicketAttachment200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTicketAttachmentDefaultApplicationJson)
    ], CreateTicketAttachmentResponse.prototype, "createTicketAttachmentDefaultApplicationJsonObject", void 0);
    return CreateTicketAttachmentResponse;
}(SpeakeasyBase));
export { CreateTicketAttachmentResponse };
