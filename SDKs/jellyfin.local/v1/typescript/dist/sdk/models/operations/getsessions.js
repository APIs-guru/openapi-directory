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
var GetSessionsQueryParams = /** @class */ (function (_super) {
    __extends(GetSessionsQueryParams, _super);
    function GetSessionsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activeWithinSeconds" }),
        __metadata("design:type", Number)
    ], GetSessionsQueryParams.prototype, "activeWithinSeconds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=controllableByUserId" }),
        __metadata("design:type", String)
    ], GetSessionsQueryParams.prototype, "controllableByUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=deviceId" }),
        __metadata("design:type", String)
    ], GetSessionsQueryParams.prototype, "deviceId", void 0);
    return GetSessionsQueryParams;
}(SpeakeasyBase));
export { GetSessionsQueryParams };
var GetSessionsSecurity = /** @class */ (function (_super) {
    __extends(GetSessionsSecurity, _super);
    function GetSessionsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetSessionsSecurity.prototype, "customAuthentication", void 0);
    return GetSessionsSecurity;
}(SpeakeasyBase));
export { GetSessionsSecurity };
var GetSessionsRequest = /** @class */ (function (_super) {
    __extends(GetSessionsRequest, _super);
    function GetSessionsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSessionsQueryParams)
    ], GetSessionsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetSessionsSecurity)
    ], GetSessionsRequest.prototype, "security", void 0);
    return GetSessionsRequest;
}(SpeakeasyBase));
export { GetSessionsRequest };
var GetSessionsResponse = /** @class */ (function (_super) {
    __extends(GetSessionsResponse, _super);
    function GetSessionsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetSessionsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.SessionInfo }),
        __metadata("design:type", Array)
    ], GetSessionsResponse.prototype, "sessionInfos", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetSessionsResponse.prototype, "statusCode", void 0);
    return GetSessionsResponse;
}(SpeakeasyBase));
export { GetSessionsResponse };
