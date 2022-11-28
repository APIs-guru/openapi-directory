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
var GetWorkspaceIdReportsPathParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdReportsPathParams, _super);
    function GetWorkspaceIdReportsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace_id" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdReportsPathParams.prototype, "workspaceId", void 0);
    return GetWorkspaceIdReportsPathParams;
}(SpeakeasyBase));
export { GetWorkspaceIdReportsPathParams };
var GetWorkspaceIdReportsQueryParams = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdReportsQueryParams, _super);
    function GetWorkspaceIdReportsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=activity_type" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdReportsQueryParams.prototype, "activityType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdReportsQueryParams.prototype, "endDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdReportsQueryParams.prototype, "group", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdReportsQueryParams.prototype, "startDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetWorkspaceIdReportsQueryParams.prototype, "type", void 0);
    return GetWorkspaceIdReportsQueryParams;
}(SpeakeasyBase));
export { GetWorkspaceIdReportsQueryParams };
var GetWorkspaceIdReportsSecurity = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdReportsSecurity, _super);
    function GetWorkspaceIdReportsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeBearer)
    ], GetWorkspaceIdReportsSecurity.prototype, "bearer", void 0);
    return GetWorkspaceIdReportsSecurity;
}(SpeakeasyBase));
export { GetWorkspaceIdReportsSecurity };
var GetWorkspaceIdReportsRequest = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdReportsRequest, _super);
    function GetWorkspaceIdReportsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceIdReportsPathParams)
    ], GetWorkspaceIdReportsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceIdReportsQueryParams)
    ], GetWorkspaceIdReportsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetWorkspaceIdReportsSecurity)
    ], GetWorkspaceIdReportsRequest.prototype, "security", void 0);
    return GetWorkspaceIdReportsRequest;
}(SpeakeasyBase));
export { GetWorkspaceIdReportsRequest };
var GetWorkspaceIdReportsResponse = /** @class */ (function (_super) {
    __extends(GetWorkspaceIdReportsResponse, _super);
    function GetWorkspaceIdReportsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetWorkspaceIdReportsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetWorkspaceIdReportsResponse.prototype, "statusCode", void 0);
    return GetWorkspaceIdReportsResponse;
}(SpeakeasyBase));
export { GetWorkspaceIdReportsResponse };
