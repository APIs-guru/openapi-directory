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
var ReferencesAircraftByAircraftCodeGetPathParams = /** @class */ (function (_super) {
    __extends(ReferencesAircraftByAircraftCodeGetPathParams, _super);
    function ReferencesAircraftByAircraftCodeGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=aircraftCode" }),
        __metadata("design:type", String)
    ], ReferencesAircraftByAircraftCodeGetPathParams.prototype, "aircraftCode", void 0);
    return ReferencesAircraftByAircraftCodeGetPathParams;
}(SpeakeasyBase));
export { ReferencesAircraftByAircraftCodeGetPathParams };
var ReferencesAircraftByAircraftCodeGetQueryParams = /** @class */ (function (_super) {
    __extends(ReferencesAircraftByAircraftCodeGetQueryParams, _super);
    function ReferencesAircraftByAircraftCodeGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", String)
    ], ReferencesAircraftByAircraftCodeGetQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", String)
    ], ReferencesAircraftByAircraftCodeGetQueryParams.prototype, "offset", void 0);
    return ReferencesAircraftByAircraftCodeGetQueryParams;
}(SpeakeasyBase));
export { ReferencesAircraftByAircraftCodeGetQueryParams };
var ReferencesAircraftByAircraftCodeGetHeaders = /** @class */ (function (_super) {
    __extends(ReferencesAircraftByAircraftCodeGetHeaders, _super);
    function ReferencesAircraftByAircraftCodeGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], ReferencesAircraftByAircraftCodeGetHeaders.prototype, "accept", void 0);
    return ReferencesAircraftByAircraftCodeGetHeaders;
}(SpeakeasyBase));
export { ReferencesAircraftByAircraftCodeGetHeaders };
var ReferencesAircraftByAircraftCodeGetSecurity = /** @class */ (function (_super) {
    __extends(ReferencesAircraftByAircraftCodeGetSecurity, _super);
    function ReferencesAircraftByAircraftCodeGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], ReferencesAircraftByAircraftCodeGetSecurity.prototype, "auth", void 0);
    return ReferencesAircraftByAircraftCodeGetSecurity;
}(SpeakeasyBase));
export { ReferencesAircraftByAircraftCodeGetSecurity };
var ReferencesAircraftByAircraftCodeGetRequest = /** @class */ (function (_super) {
    __extends(ReferencesAircraftByAircraftCodeGetRequest, _super);
    function ReferencesAircraftByAircraftCodeGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReferencesAircraftByAircraftCodeGetPathParams)
    ], ReferencesAircraftByAircraftCodeGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReferencesAircraftByAircraftCodeGetQueryParams)
    ], ReferencesAircraftByAircraftCodeGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReferencesAircraftByAircraftCodeGetHeaders)
    ], ReferencesAircraftByAircraftCodeGetRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ReferencesAircraftByAircraftCodeGetSecurity)
    ], ReferencesAircraftByAircraftCodeGetRequest.prototype, "security", void 0);
    return ReferencesAircraftByAircraftCodeGetRequest;
}(SpeakeasyBase));
export { ReferencesAircraftByAircraftCodeGetRequest };
var ReferencesAircraftByAircraftCodeGetResponse = /** @class */ (function (_super) {
    __extends(ReferencesAircraftByAircraftCodeGetResponse, _super);
    function ReferencesAircraftByAircraftCodeGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ReferencesAircraftByAircraftCodeGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], ReferencesAircraftByAircraftCodeGetResponse.prototype, "referencesAircraftByAircraftCodeGet200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ReferencesAircraftByAircraftCodeGetResponse.prototype, "statusCode", void 0);
    return ReferencesAircraftByAircraftCodeGetResponse;
}(SpeakeasyBase));
export { ReferencesAircraftByAircraftCodeGetResponse };
