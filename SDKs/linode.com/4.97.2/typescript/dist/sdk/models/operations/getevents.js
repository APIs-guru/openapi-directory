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
var GetEventsQueryParams = /** @class */ (function (_super) {
    __extends(GetEventsQueryParams, _super);
    function GetEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetEventsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetEventsQueryParams.prototype, "pageSize", void 0);
    return GetEventsQueryParams;
}(SpeakeasyBase));
export { GetEventsQueryParams };
var GetEventsSecurity = /** @class */ (function (_super) {
    __extends(GetEventsSecurity, _super);
    function GetEventsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetEventsSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetEventsSecurity.prototype, "oauth", void 0);
    return GetEventsSecurity;
}(SpeakeasyBase));
export { GetEventsSecurity };
var GetEvents200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetEvents200ApplicationJson, _super);
    function GetEvents200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.Event }),
        __metadata("design:type", Array)
    ], GetEvents200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetEvents200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetEvents200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetEvents200ApplicationJson.prototype, "results", void 0);
    return GetEvents200ApplicationJson;
}(SpeakeasyBase));
export { GetEvents200ApplicationJson };
var GetEventsDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetEventsDefaultApplicationJson, _super);
    function GetEventsDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetEventsDefaultApplicationJson.prototype, "errors", void 0);
    return GetEventsDefaultApplicationJson;
}(SpeakeasyBase));
export { GetEventsDefaultApplicationJson };
var GetEventsRequest = /** @class */ (function (_super) {
    __extends(GetEventsRequest, _super);
    function GetEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventsQueryParams)
    ], GetEventsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventsSecurity)
    ], GetEventsRequest.prototype, "security", void 0);
    return GetEventsRequest;
}(SpeakeasyBase));
export { GetEventsRequest };
var GetEventsResponse = /** @class */ (function (_super) {
    __extends(GetEventsResponse, _super);
    function GetEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetEventsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetEventsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEvents200ApplicationJson)
    ], GetEventsResponse.prototype, "getEvents200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetEventsDefaultApplicationJson)
    ], GetEventsResponse.prototype, "getEventsDefaultApplicationJsonObject", void 0);
    return GetEventsResponse;
}(SpeakeasyBase));
export { GetEventsResponse };
