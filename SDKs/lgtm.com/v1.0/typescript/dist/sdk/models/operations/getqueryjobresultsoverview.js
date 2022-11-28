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
var GetQueryJobResultsOverviewPathParams = /** @class */ (function (_super) {
    __extends(GetQueryJobResultsOverviewPathParams, _super);
    function GetQueryJobResultsOverviewPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=queryjob-id" }),
        __metadata("design:type", String)
    ], GetQueryJobResultsOverviewPathParams.prototype, "queryjobId", void 0);
    return GetQueryJobResultsOverviewPathParams;
}(SpeakeasyBase));
export { GetQueryJobResultsOverviewPathParams };
var GetQueryJobResultsOverviewQueryParams = /** @class */ (function (_super) {
    __extends(GetQueryJobResultsOverviewQueryParams, _super);
    function GetQueryJobResultsOverviewQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" }),
        __metadata("design:type", String)
    ], GetQueryJobResultsOverviewQueryParams.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetQueryJobResultsOverviewQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", String)
    ], GetQueryJobResultsOverviewQueryParams.prototype, "start", void 0);
    return GetQueryJobResultsOverviewQueryParams;
}(SpeakeasyBase));
export { GetQueryJobResultsOverviewQueryParams };
var GetQueryJobResultsOverviewSecurity = /** @class */ (function (_super) {
    __extends(GetQueryJobResultsOverviewSecurity, _super);
    function GetQueryJobResultsOverviewSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeAccessToken)
    ], GetQueryJobResultsOverviewSecurity.prototype, "accessToken", void 0);
    return GetQueryJobResultsOverviewSecurity;
}(SpeakeasyBase));
export { GetQueryJobResultsOverviewSecurity };
var GetQueryJobResultsOverviewRequest = /** @class */ (function (_super) {
    __extends(GetQueryJobResultsOverviewRequest, _super);
    function GetQueryJobResultsOverviewRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryJobResultsOverviewPathParams)
    ], GetQueryJobResultsOverviewRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryJobResultsOverviewQueryParams)
    ], GetQueryJobResultsOverviewRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryJobResultsOverviewSecurity)
    ], GetQueryJobResultsOverviewRequest.prototype, "security", void 0);
    return GetQueryJobResultsOverviewRequest;
}(SpeakeasyBase));
export { GetQueryJobResultsOverviewRequest };
var GetQueryJobResultsOverviewResponse = /** @class */ (function (_super) {
    __extends(GetQueryJobResultsOverviewResponse, _super);
    function GetQueryJobResultsOverviewResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetQueryJobResultsOverviewResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetQueryJobResultsOverviewResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.QueryjobResultsOverview)
    ], GetQueryJobResultsOverviewResponse.prototype, "queryjobResultsOverview", void 0);
    return GetQueryJobResultsOverviewResponse;
}(SpeakeasyBase));
export { GetQueryJobResultsOverviewResponse };
