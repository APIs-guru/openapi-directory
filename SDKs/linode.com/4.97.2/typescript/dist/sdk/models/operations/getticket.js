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
var GetTicketPathParams = /** @class */ (function (_super) {
    __extends(GetTicketPathParams, _super);
    function GetTicketPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ticketId" }),
        __metadata("design:type", Number)
    ], GetTicketPathParams.prototype, "ticketId", void 0);
    return GetTicketPathParams;
}(SpeakeasyBase));
export { GetTicketPathParams };
var GetTicketSecurity = /** @class */ (function (_super) {
    __extends(GetTicketSecurity, _super);
    function GetTicketSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetTicketSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetTicketSecurity.prototype, "oauth", void 0);
    return GetTicketSecurity;
}(SpeakeasyBase));
export { GetTicketSecurity };
var GetTicketDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetTicketDefaultApplicationJson, _super);
    function GetTicketDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetTicketDefaultApplicationJson.prototype, "errors", void 0);
    return GetTicketDefaultApplicationJson;
}(SpeakeasyBase));
export { GetTicketDefaultApplicationJson };
var GetTicketRequest = /** @class */ (function (_super) {
    __extends(GetTicketRequest, _super);
    function GetTicketRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTicketPathParams)
    ], GetTicketRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTicketSecurity)
    ], GetTicketRequest.prototype, "security", void 0);
    return GetTicketRequest;
}(SpeakeasyBase));
export { GetTicketRequest };
var GetTicketResponse = /** @class */ (function (_super) {
    __extends(GetTicketResponse, _super);
    function GetTicketResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTicketResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTicketResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SupportTicket)
    ], GetTicketResponse.prototype, "supportTicket", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTicketDefaultApplicationJson)
    ], GetTicketResponse.prototype, "getTicketDefaultApplicationJsonObject", void 0);
    return GetTicketResponse;
}(SpeakeasyBase));
export { GetTicketResponse };
