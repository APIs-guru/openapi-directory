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
var GetManagedIssuesQueryParams = /** @class */ (function (_super) {
    __extends(GetManagedIssuesQueryParams, _super);
    function GetManagedIssuesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetManagedIssuesQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetManagedIssuesQueryParams.prototype, "pageSize", void 0);
    return GetManagedIssuesQueryParams;
}(SpeakeasyBase));
export { GetManagedIssuesQueryParams };
var GetManagedIssuesSecurity = /** @class */ (function (_super) {
    __extends(GetManagedIssuesSecurity, _super);
    function GetManagedIssuesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetManagedIssuesSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetManagedIssuesSecurity.prototype, "oauth", void 0);
    return GetManagedIssuesSecurity;
}(SpeakeasyBase));
export { GetManagedIssuesSecurity };
var GetManagedIssues200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetManagedIssues200ApplicationJson, _super);
    function GetManagedIssues200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data", elemType: shared.ManagedIssue }),
        __metadata("design:type", Array)
    ], GetManagedIssues200ApplicationJson.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], GetManagedIssues200ApplicationJson.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pages" }),
        __metadata("design:type", Number)
    ], GetManagedIssues200ApplicationJson.prototype, "pages", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results" }),
        __metadata("design:type", Number)
    ], GetManagedIssues200ApplicationJson.prototype, "results", void 0);
    return GetManagedIssues200ApplicationJson;
}(SpeakeasyBase));
export { GetManagedIssues200ApplicationJson };
var GetManagedIssuesDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetManagedIssuesDefaultApplicationJson, _super);
    function GetManagedIssuesDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetManagedIssuesDefaultApplicationJson.prototype, "errors", void 0);
    return GetManagedIssuesDefaultApplicationJson;
}(SpeakeasyBase));
export { GetManagedIssuesDefaultApplicationJson };
var GetManagedIssuesRequest = /** @class */ (function (_super) {
    __extends(GetManagedIssuesRequest, _super);
    function GetManagedIssuesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedIssuesQueryParams)
    ], GetManagedIssuesRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedIssuesSecurity)
    ], GetManagedIssuesRequest.prototype, "security", void 0);
    return GetManagedIssuesRequest;
}(SpeakeasyBase));
export { GetManagedIssuesRequest };
var GetManagedIssuesResponse = /** @class */ (function (_super) {
    __extends(GetManagedIssuesResponse, _super);
    function GetManagedIssuesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetManagedIssuesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetManagedIssuesResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedIssues200ApplicationJson)
    ], GetManagedIssuesResponse.prototype, "getManagedIssues200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedIssuesDefaultApplicationJson)
    ], GetManagedIssuesResponse.prototype, "getManagedIssuesDefaultApplicationJsonObject", void 0);
    return GetManagedIssuesResponse;
}(SpeakeasyBase));
export { GetManagedIssuesResponse };
