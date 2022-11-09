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
var GetAppsAppIdPathParams = /** @class */ (function (_super) {
    __extends(GetAppsAppIdPathParams, _super);
    function GetAppsAppIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", String)
    ], GetAppsAppIdPathParams.prototype, "appId", void 0);
    return GetAppsAppIdPathParams;
}(SpeakeasyBase));
export { GetAppsAppIdPathParams };
var GetAppsAppIdQueryParams = /** @class */ (function (_super) {
    __extends(GetAppsAppIdQueryParams, _super);
    function GetAppsAppIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=trackViews" }),
        __metadata("design:type", Boolean)
    ], GetAppsAppIdQueryParams.prototype, "trackViews", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userId" }),
        __metadata("design:type", String)
    ], GetAppsAppIdQueryParams.prototype, "userId", void 0);
    return GetAppsAppIdQueryParams;
}(SpeakeasyBase));
export { GetAppsAppIdQueryParams };
var GetAppsAppIdRequest = /** @class */ (function (_super) {
    __extends(GetAppsAppIdRequest, _super);
    function GetAppsAppIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAppsAppIdPathParams)
    ], GetAppsAppIdRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAppsAppIdQueryParams)
    ], GetAppsAppIdRequest.prototype, "queryParams", void 0);
    return GetAppsAppIdRequest;
}(SpeakeasyBase));
export { GetAppsAppIdRequest };
var GetAppsAppIdResponse = /** @class */ (function (_super) {
    __extends(GetAppsAppIdResponse, _super);
    function GetAppsAppIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetAppsAppIdResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAppsAppIdResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAppsAppIdResponse.prototype, "statusCode", void 0);
    return GetAppsAppIdResponse;
}(SpeakeasyBase));
export { GetAppsAppIdResponse };
