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
var CreateTicketSecurity = /** @class */ (function (_super) {
    __extends(CreateTicketSecurity, _super);
    function CreateTicketSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CreateTicketSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CreateTicketSecurity.prototype, "oauth", void 0);
    return CreateTicketSecurity;
}(SpeakeasyBase));
export { CreateTicketSecurity };
var CreateTicketDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CreateTicketDefaultApplicationJson, _super);
    function CreateTicketDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CreateTicketDefaultApplicationJson.prototype, "errors", void 0);
    return CreateTicketDefaultApplicationJson;
}(SpeakeasyBase));
export { CreateTicketDefaultApplicationJson };
var CreateTicketRequest = /** @class */ (function (_super) {
    __extends(CreateTicketRequest, _super);
    function CreateTicketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SupportTicketRequest)
    ], CreateTicketRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTicketSecurity)
    ], CreateTicketRequest.prototype, "security", void 0);
    return CreateTicketRequest;
}(SpeakeasyBase));
export { CreateTicketRequest };
var CreateTicketResponse = /** @class */ (function (_super) {
    __extends(CreateTicketResponse, _super);
    function CreateTicketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateTicketResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateTicketResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SupportTicket)
    ], CreateTicketResponse.prototype, "supportTicket", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateTicketDefaultApplicationJson)
    ], CreateTicketResponse.prototype, "createTicketDefaultApplicationJsonObject", void 0);
    return CreateTicketResponse;
}(SpeakeasyBase));
export { CreateTicketResponse };
