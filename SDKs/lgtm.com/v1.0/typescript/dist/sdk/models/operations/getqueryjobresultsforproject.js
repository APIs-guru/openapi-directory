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
var GetQueryJobResultsForProjectPathParams = /** @class */ (function (_super) {
    __extends(GetQueryJobResultsForProjectPathParams, _super);
    function GetQueryJobResultsForProjectPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-id" }),
        __metadata("design:type", String)
    ], GetQueryJobResultsForProjectPathParams.prototype, "projectId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=queryjob-id" }),
        __metadata("design:type", String)
    ], GetQueryJobResultsForProjectPathParams.prototype, "queryjobId", void 0);
    return GetQueryJobResultsForProjectPathParams;
}(SpeakeasyBase));
export { GetQueryJobResultsForProjectPathParams };
var GetQueryJobResultsForProjectQueryParams = /** @class */ (function (_super) {
    __extends(GetQueryJobResultsForProjectQueryParams, _super);
    function GetQueryJobResultsForProjectQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" }),
        __metadata("design:type", Number)
    ], GetQueryJobResultsForProjectQueryParams.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nofilter" }),
        __metadata("design:type", Boolean)
    ], GetQueryJobResultsForProjectQueryParams.prototype, "nofilter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" }),
        __metadata("design:type", Number)
    ], GetQueryJobResultsForProjectQueryParams.prototype, "start", void 0);
    return GetQueryJobResultsForProjectQueryParams;
}(SpeakeasyBase));
export { GetQueryJobResultsForProjectQueryParams };
var GetQueryJobResultsForProjectSecurity = /** @class */ (function (_super) {
    __extends(GetQueryJobResultsForProjectSecurity, _super);
    function GetQueryJobResultsForProjectSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeAccessToken)
    ], GetQueryJobResultsForProjectSecurity.prototype, "accessToken", void 0);
    return GetQueryJobResultsForProjectSecurity;
}(SpeakeasyBase));
export { GetQueryJobResultsForProjectSecurity };
var GetQueryJobResultsForProjectRequest = /** @class */ (function (_super) {
    __extends(GetQueryJobResultsForProjectRequest, _super);
    function GetQueryJobResultsForProjectRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryJobResultsForProjectPathParams)
    ], GetQueryJobResultsForProjectRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryJobResultsForProjectQueryParams)
    ], GetQueryJobResultsForProjectRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetQueryJobResultsForProjectSecurity)
    ], GetQueryJobResultsForProjectRequest.prototype, "security", void 0);
    return GetQueryJobResultsForProjectRequest;
}(SpeakeasyBase));
export { GetQueryJobResultsForProjectRequest };
var GetQueryJobResultsForProjectResponse = /** @class */ (function (_super) {
    __extends(GetQueryJobResultsForProjectResponse, _super);
    function GetQueryJobResultsForProjectResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetQueryJobResultsForProjectResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetQueryJobResultsForProjectResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.QueryjobProjectResults)
    ], GetQueryJobResultsForProjectResponse.prototype, "queryjobProjectResults", void 0);
    return GetQueryJobResultsForProjectResponse;
}(SpeakeasyBase));
export { GetQueryJobResultsForProjectResponse };
