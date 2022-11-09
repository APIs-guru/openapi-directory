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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams = /** @class */ (function (_super) {
    __extends(ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams, _super);
    function ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=latitude" }),
        __metadata("design:type", Number)
    ], ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams.prototype, "latitude", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=longitude" }),
        __metadata("design:type", Number)
    ], ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams.prototype, "longitude", void 0);
    return ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams;
}(SpeakeasyBase));
export { ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams };
var ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams = /** @class */ (function (_super) {
    __extends(ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams, _super);
    function ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=lang" }),
        __metadata("design:type", String)
    ], ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams.prototype, "lang", void 0);
    return ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams;
}(SpeakeasyBase));
export { ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams };
var ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders = /** @class */ (function (_super) {
    __extends(ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders, _super);
    function ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Accept" }),
        __metadata("design:type", String)
    ], ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders.prototype, "accept", void 0);
    return ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders;
}(SpeakeasyBase));
export { ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders };
var ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity = /** @class */ (function (_super) {
    __extends(ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity, _super);
    function ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeAuth)
    ], ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity.prototype, "auth", void 0);
    return ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity;
}(SpeakeasyBase));
export { ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity };
var ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest = /** @class */ (function (_super) {
    __extends(ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest, _super);
    function ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ReferencesAirportsNearestByLatitudeAndLongitudeGetPathParams)
    ], ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ReferencesAirportsNearestByLatitudeAndLongitudeGetQueryParams)
    ], ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ReferencesAirportsNearestByLatitudeAndLongitudeGetHeaders)
    ], ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest.prototype, "headers", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ReferencesAirportsNearestByLatitudeAndLongitudeGetSecurity)
    ], ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest.prototype, "security", void 0);
    return ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest;
}(SpeakeasyBase));
export { ReferencesAirportsNearestByLatitudeAndLongitudeGetRequest };
var ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse = /** @class */ (function (_super) {
    __extends(ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse, _super);
    function ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Map)
    ], ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse.prototype, "referencesAirportsNearestByLatitudeAndLongitudeGet200ApplicationJsonObject", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse.prototype, "statusCode", void 0);
    return ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse;
}(SpeakeasyBase));
export { ReferencesAirportsNearestByLatitudeAndLongitudeGetResponse };
