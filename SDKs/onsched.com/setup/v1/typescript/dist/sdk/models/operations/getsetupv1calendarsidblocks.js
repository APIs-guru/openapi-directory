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
var GetSetupV1CalendarsIdBlocksPathParams = /** @class */ (function (_super) {
    __extends(GetSetupV1CalendarsIdBlocksPathParams, _super);
    function GetSetupV1CalendarsIdBlocksPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetSetupV1CalendarsIdBlocksPathParams.prototype, "id", void 0);
    return GetSetupV1CalendarsIdBlocksPathParams;
}(SpeakeasyBase));
export { GetSetupV1CalendarsIdBlocksPathParams };
var GetSetupV1CalendarsIdBlocksQueryParams = /** @class */ (function (_super) {
    __extends(GetSetupV1CalendarsIdBlocksQueryParams, _super);
    function GetSetupV1CalendarsIdBlocksQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetSetupV1CalendarsIdBlocksQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], GetSetupV1CalendarsIdBlocksQueryParams.prototype, "offset", void 0);
    return GetSetupV1CalendarsIdBlocksQueryParams;
}(SpeakeasyBase));
export { GetSetupV1CalendarsIdBlocksQueryParams };
var GetSetupV1CalendarsIdBlocksRequest = /** @class */ (function (_super) {
    __extends(GetSetupV1CalendarsIdBlocksRequest, _super);
    function GetSetupV1CalendarsIdBlocksRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1CalendarsIdBlocksPathParams)
    ], GetSetupV1CalendarsIdBlocksRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSetupV1CalendarsIdBlocksQueryParams)
    ], GetSetupV1CalendarsIdBlocksRequest.prototype, "queryParams", void 0);
    return GetSetupV1CalendarsIdBlocksRequest;
}(SpeakeasyBase));
export { GetSetupV1CalendarsIdBlocksRequest };
var GetSetupV1CalendarsIdBlocksResponse = /** @class */ (function (_super) {
    __extends(GetSetupV1CalendarsIdBlocksResponse, _super);
    function GetSetupV1CalendarsIdBlocksResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], GetSetupV1CalendarsIdBlocksResponse.prototype, "calendarBlockListViewModel", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSetupV1CalendarsIdBlocksResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSetupV1CalendarsIdBlocksResponse.prototype, "statusCode", void 0);
    return GetSetupV1CalendarsIdBlocksResponse;
}(SpeakeasyBase));
export { GetSetupV1CalendarsIdBlocksResponse };
