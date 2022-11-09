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
var DeleteIssueTrackersIssueTrackerNamePathParams = /** @class */ (function (_super) {
    __extends(DeleteIssueTrackersIssueTrackerNamePathParams, _super);
    function DeleteIssueTrackersIssueTrackerNamePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=issue_tracker_name" }),
        __metadata("design:type", String)
    ], DeleteIssueTrackersIssueTrackerNamePathParams.prototype, "issueTrackerName", void 0);
    return DeleteIssueTrackersIssueTrackerNamePathParams;
}(SpeakeasyBase));
export { DeleteIssueTrackersIssueTrackerNamePathParams };
var DeleteIssueTrackersIssueTrackerNameSecurity = /** @class */ (function (_super) {
    __extends(DeleteIssueTrackersIssueTrackerNameSecurity, _super);
    function DeleteIssueTrackersIssueTrackerNameSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeBasicAuthentication)
    ], DeleteIssueTrackersIssueTrackerNameSecurity.prototype, "basicAuthentication", void 0);
    return DeleteIssueTrackersIssueTrackerNameSecurity;
}(SpeakeasyBase));
export { DeleteIssueTrackersIssueTrackerNameSecurity };
var DeleteIssueTrackersIssueTrackerNameRequest = /** @class */ (function (_super) {
    __extends(DeleteIssueTrackersIssueTrackerNameRequest, _super);
    function DeleteIssueTrackersIssueTrackerNameRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteIssueTrackersIssueTrackerNamePathParams)
    ], DeleteIssueTrackersIssueTrackerNameRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteIssueTrackersIssueTrackerNameSecurity)
    ], DeleteIssueTrackersIssueTrackerNameRequest.prototype, "security", void 0);
    return DeleteIssueTrackersIssueTrackerNameRequest;
}(SpeakeasyBase));
export { DeleteIssueTrackersIssueTrackerNameRequest };
var DeleteIssueTrackersIssueTrackerNameResponse = /** @class */ (function (_super) {
    __extends(DeleteIssueTrackersIssueTrackerNameResponse, _super);
    function DeleteIssueTrackersIssueTrackerNameResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteIssueTrackersIssueTrackerNameResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteIssueTrackersIssueTrackerNameResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteIssueTrackersIssueTrackerNameResponse.prototype, "statusCode", void 0);
    return DeleteIssueTrackersIssueTrackerNameResponse;
}(SpeakeasyBase));
export { DeleteIssueTrackersIssueTrackerNameResponse };
