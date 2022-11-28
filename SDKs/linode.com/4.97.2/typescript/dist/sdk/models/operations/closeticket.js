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
var CloseTicketPathParams = /** @class */ (function (_super) {
    __extends(CloseTicketPathParams, _super);
    function CloseTicketPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ticketId" }),
        __metadata("design:type", Number)
    ], CloseTicketPathParams.prototype, "ticketId", void 0);
    return CloseTicketPathParams;
}(SpeakeasyBase));
export { CloseTicketPathParams };
var CloseTicketSecurity = /** @class */ (function (_super) {
    __extends(CloseTicketSecurity, _super);
    function CloseTicketSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], CloseTicketSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], CloseTicketSecurity.prototype, "oauth", void 0);
    return CloseTicketSecurity;
}(SpeakeasyBase));
export { CloseTicketSecurity };
var CloseTicketDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(CloseTicketDefaultApplicationJson, _super);
    function CloseTicketDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], CloseTicketDefaultApplicationJson.prototype, "errors", void 0);
    return CloseTicketDefaultApplicationJson;
}(SpeakeasyBase));
export { CloseTicketDefaultApplicationJson };
var CloseTicketRequest = /** @class */ (function (_super) {
    __extends(CloseTicketRequest, _super);
    function CloseTicketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloseTicketPathParams)
    ], CloseTicketRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloseTicketSecurity)
    ], CloseTicketRequest.prototype, "security", void 0);
    return CloseTicketRequest;
}(SpeakeasyBase));
export { CloseTicketRequest };
var CloseTicketResponse = /** @class */ (function (_super) {
    __extends(CloseTicketResponse, _super);
    function CloseTicketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CloseTicketResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CloseTicketResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], CloseTicketResponse.prototype, "closeTicket200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CloseTicketDefaultApplicationJson)
    ], CloseTicketResponse.prototype, "closeTicketDefaultApplicationJsonObject", void 0);
    return CloseTicketResponse;
}(SpeakeasyBase));
export { CloseTicketResponse };
