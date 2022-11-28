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
var GetManagedIssuePathParams = /** @class */ (function (_super) {
    __extends(GetManagedIssuePathParams, _super);
    function GetManagedIssuePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=issueId" }),
        __metadata("design:type", Number)
    ], GetManagedIssuePathParams.prototype, "issueId", void 0);
    return GetManagedIssuePathParams;
}(SpeakeasyBase));
export { GetManagedIssuePathParams };
var GetManagedIssueSecurity = /** @class */ (function (_super) {
    __extends(GetManagedIssueSecurity, _super);
    function GetManagedIssueSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemePersonalAccessToken)
    ], GetManagedIssueSecurity.prototype, "personalAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth)
    ], GetManagedIssueSecurity.prototype, "oauth", void 0);
    return GetManagedIssueSecurity;
}(SpeakeasyBase));
export { GetManagedIssueSecurity };
var GetManagedIssueDefaultApplicationJson = /** @class */ (function (_super) {
    __extends(GetManagedIssueDefaultApplicationJson, _super);
    function GetManagedIssueDefaultApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject }),
        __metadata("design:type", Array)
    ], GetManagedIssueDefaultApplicationJson.prototype, "errors", void 0);
    return GetManagedIssueDefaultApplicationJson;
}(SpeakeasyBase));
export { GetManagedIssueDefaultApplicationJson };
var GetManagedIssueRequest = /** @class */ (function (_super) {
    __extends(GetManagedIssueRequest, _super);
    function GetManagedIssueRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedIssuePathParams)
    ], GetManagedIssueRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedIssueSecurity)
    ], GetManagedIssueRequest.prototype, "security", void 0);
    return GetManagedIssueRequest;
}(SpeakeasyBase));
export { GetManagedIssueRequest };
var GetManagedIssueResponse = /** @class */ (function (_super) {
    __extends(GetManagedIssueResponse, _super);
    function GetManagedIssueResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetManagedIssueResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ManagedIssue)
    ], GetManagedIssueResponse.prototype, "managedIssue", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetManagedIssueResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetManagedIssueDefaultApplicationJson)
    ], GetManagedIssueResponse.prototype, "getManagedIssueDefaultApplicationJsonObject", void 0);
    return GetManagedIssueResponse;
}(SpeakeasyBase));
export { GetManagedIssueResponse };
