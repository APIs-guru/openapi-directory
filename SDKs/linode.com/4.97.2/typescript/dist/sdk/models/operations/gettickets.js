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
var GetTicketsQueryParams = /** @class */ (function (_super) {
    __extends(GetTicketsQueryParams, _super);
    function GetTicketsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetTicketsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetTicketsQueryParams.prototype, "pageSize", void 0);
    return GetTicketsQueryParams;
}(SpeakeasyBase));
export { GetTicketsQueryParams };
var GetTicketsSecurity = /** @class */ (function (_super) {
    __extends(GetTicketsSecurity, _super);
    function GetTicketsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetTicketsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetTicketsSecurity.prototype, "oauth", void 0);
    return GetTicketsSecurity;
}(SpeakeasyBase));
export { GetTicketsSecurity };
var GetTickets200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetTickets200ApplicationJson, _super);
    function GetTickets200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.SupportTicket }),
        __metadata("design:type", Array)
    ], GetTickets200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetTickets200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetTickets200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetTickets200ApplicationJson.prototype, "results", void 0);
    return GetTickets200ApplicationJson;
}(SpeakeasyBase));
export { GetTickets200ApplicationJson };
var GetTicketsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetTicketsDefaultApplicationJson, _super);
    function GetTicketsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetTicketsDefaultApplicationJson.prototype, "errors", void 0);
    return GetTicketsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetTicketsDefaultApplicationJson };
var GetTicketsRequest = /** @class */ (function (_super) {
    __extends(GetTicketsRequest, _super);
    function GetTicketsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTicketsQueryParams)
    ], GetTicketsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTicketsSecurity)
    ], GetTicketsRequest.prototype, "security", void 0);
    return GetTicketsRequest;
}(SpeakeasyBase));
export { GetTicketsRequest };
var GetTicketsResponse = /** @class */ (function (_super) {
    __extends(GetTicketsResponse, _super);
    function GetTicketsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetTicketsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetTicketsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTickets200ApplicationJson)
    ], GetTicketsResponse.prototype, "getTickets200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetTicketsDefaultApplicationJson)
    ], GetTicketsResponse.prototype, "getTicketsDefaultApplicationJsonObject", void 0);
    return GetTicketsResponse;
}(SpeakeasyBase));
export { GetTicketsResponse };
