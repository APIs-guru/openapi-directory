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
var GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams = /** @class */ (function (_super) {
    __extends(GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams, _super);
    function GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=issue_name" }),
        __metadata("design:type", String)
    ], GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams.prototype, "issueName", void 0);
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=issue_tracker_name" }),
        __metadata("design:type", String)
    ], GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams.prototype, "issueTrackerName", void 0);
    return GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams;
}(SpeakeasyBase));
export { GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams };
var GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity = /** @class */ (function (_super) {
    __extends(GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity, _super);
    function GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity.prototype, "basicAuthentication", void 0);
    return GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity;
}(SpeakeasyBase));
export { GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity };
var GetIssueTrackersIssueTrackerNameIssuesIssueNameRequest = /** @class */ (function (_super) {
    __extends(GetIssueTrackersIssueTrackerNameIssuesIssueNameRequest, _super);
    function GetIssueTrackersIssueTrackerNameIssuesIssueNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetIssueTrackersIssueTrackerNameIssuesIssueNamePathParams)
    ], GetIssueTrackersIssueTrackerNameIssuesIssueNameRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetIssueTrackersIssueTrackerNameIssuesIssueNameSecurity)
    ], GetIssueTrackersIssueTrackerNameIssuesIssueNameRequest.prototype, "security", void 0);
    return GetIssueTrackersIssueTrackerNameIssuesIssueNameRequest;
}(SpeakeasyBase));
export { GetIssueTrackersIssueTrackerNameIssuesIssueNameRequest };
var GetIssueTrackersIssueTrackerNameIssuesIssueNameResponse = /** @class */ (function (_super) {
    __extends(GetIssueTrackersIssueTrackerNameIssuesIssueNameResponse, _super);
    function GetIssueTrackersIssueTrackerNameIssuesIssueNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], GetIssueTrackersIssueTrackerNameIssuesIssueNameResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetIssueTrackersIssueTrackerNameIssuesIssueNameResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetIssueTrackersIssueTrackerNameIssuesIssueNameResponse.prototype, "statusCode", void 0);
    return GetIssueTrackersIssueTrackerNameIssuesIssueNameResponse;
}(SpeakeasyBase));
export { GetIssueTrackersIssueTrackerNameIssuesIssueNameResponse };
