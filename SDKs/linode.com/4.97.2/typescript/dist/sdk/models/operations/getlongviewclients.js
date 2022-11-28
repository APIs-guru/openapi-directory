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
var GetLongviewClientsQueryParams = /** @class */ (function (_super) {
    __extends(GetLongviewClientsQueryParams, _super);
    function GetLongviewClientsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetLongviewClientsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetLongviewClientsQueryParams.prototype, "pageSize", void 0);
    return GetLongviewClientsQueryParams;
}(SpeakeasyBase));
export { GetLongviewClientsQueryParams };
var GetLongviewClientsSecurity = /** @class */ (function (_super) {
    __extends(GetLongviewClientsSecurity, _super);
    function GetLongviewClientsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetLongviewClientsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetLongviewClientsSecurity.prototype, "oauth", void 0);
    return GetLongviewClientsSecurity;
}(SpeakeasyBase));
export { GetLongviewClientsSecurity };
var GetLongviewClients200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetLongviewClients200ApplicationJson, _super);
    function GetLongviewClients200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.LongviewClient }),
        __metadata("design:type", Array)
    ], GetLongviewClients200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetLongviewClients200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetLongviewClients200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetLongviewClients200ApplicationJson.prototype, "results", void 0);
    return GetLongviewClients200ApplicationJson;
}(SpeakeasyBase));
export { GetLongviewClients200ApplicationJson };
var GetLongviewClientsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetLongviewClientsDefaultApplicationJson, _super);
    function GetLongviewClientsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetLongviewClientsDefaultApplicationJson.prototype, "errors", void 0);
    return GetLongviewClientsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetLongviewClientsDefaultApplicationJson };
var GetLongviewClientsRequest = /** @class */ (function (_super) {
    __extends(GetLongviewClientsRequest, _super);
    function GetLongviewClientsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLongviewClientsQueryParams)
    ], GetLongviewClientsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLongviewClientsSecurity)
    ], GetLongviewClientsRequest.prototype, "security", void 0);
    return GetLongviewClientsRequest;
}(SpeakeasyBase));
export { GetLongviewClientsRequest };
var GetLongviewClientsResponse = /** @class */ (function (_super) {
    __extends(GetLongviewClientsResponse, _super);
    function GetLongviewClientsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetLongviewClientsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetLongviewClientsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLongviewClients200ApplicationJson)
    ], GetLongviewClientsResponse.prototype, "getLongviewClients200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetLongviewClientsDefaultApplicationJson)
    ], GetLongviewClientsResponse.prototype, "getLongviewClientsDefaultApplicationJsonObject", void 0);
    return GetLongviewClientsResponse;
}(SpeakeasyBase));
export { GetLongviewClientsResponse };
