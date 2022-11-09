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
var GetWellKnownMercureQueryParams = /** @class */ (function (_super) {
    __extends(GetWellKnownMercureQueryParams, _super);
    function GetWellKnownMercureQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=Last-Event-ID" }),
        __metadata("design:type", String)
    ], GetWellKnownMercureQueryParams.prototype, "lastEventId", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=topic" }),
        __metadata("design:type", Array)
    ], GetWellKnownMercureQueryParams.prototype, "topic", void 0);
    return GetWellKnownMercureQueryParams;
}(SpeakeasyBase));
export { GetWellKnownMercureQueryParams };
var GetWellKnownMercureHeaders = /** @class */ (function (_super) {
    __extends(GetWellKnownMercureHeaders, _super);
    function GetWellKnownMercureHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "header, style=simple;explode=false;name=Last-Event-ID" }),
        __metadata("design:type", String)
    ], GetWellKnownMercureHeaders.prototype, "lastEventId", void 0);
    return GetWellKnownMercureHeaders;
}(SpeakeasyBase));
export { GetWellKnownMercureHeaders };
var GetWellKnownMercureRequest = /** @class */ (function (_super) {
    __extends(GetWellKnownMercureRequest, _super);
    function GetWellKnownMercureRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetWellKnownMercureQueryParams)
    ], GetWellKnownMercureRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetWellKnownMercureHeaders)
    ], GetWellKnownMercureRequest.prototype, "headers", void 0);
    return GetWellKnownMercureRequest;
}(SpeakeasyBase));
export { GetWellKnownMercureRequest };
var GetWellKnownMercureResponse = /** @class */ (function (_super) {
    __extends(GetWellKnownMercureResponse, _super);
    function GetWellKnownMercureResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetWellKnownMercureResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetWellKnownMercureResponse.prototype, "statusCode", void 0);
    return GetWellKnownMercureResponse;
}(SpeakeasyBase));
export { GetWellKnownMercureResponse };
